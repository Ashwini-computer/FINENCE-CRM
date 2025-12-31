const ErrorResponse = require('../utils/errorResponse');
const LoanTransfer = require('../models/LoanTransfer');
const User = require('../models/User');
const Kyc = require('../models/Kyc');
const Product = require('../models/Product');
const Partner = require('../models/Partner');
const sendEmail = require('../utils/sendEmail');
const sendSMS = require('../utils/sendSMS');
const generateWelcomeEmail = require('../utils/emailTemplates/welcomeEmail');
const PersonalLoan = require('../models/Personal-Loan');
const BussinessLoan = require('../models/BussinessLoan');
const PersonalLoanDocuments = require('../models/PersonalLoanDocuments');
const HomeLoanDocuments = require('../models/HomeLoanDocuments');
const BusinessLoanDocuments = require('../models/BusinessLoanDocuments');
const MortgageLoanDocuments = require('../models/MortgageLoanDocuments');

// @desc    Apply for loan transfer
// @route   POST /api/loan/transfer
// @access  Private
exports.applyForLoanTransfer = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;

    // Check if KYC is completed and verified
    const user = await User.findById(req.user.id);
    const kyc = await Kyc.findOne({ userId: req.user.id });

    if (!user.kycCompleted || !kyc || !kyc.verified) {
      return next(new ErrorResponse('Please complete and verify your KYC first', 400));
    }

    // Check if product exists
    if (req.body.transferDetails && req.body.transferDetails.productId) {
      const product = await Product.findById(req.body.transferDetails.productId);

      if (!product) {
        return next(new ErrorResponse('Product not found', 404));
      }

      // Check eligibility based on CIBIL score
      if (kyc.cibilScore < product.minCibilScore) {
        return next(new ErrorResponse(`You do not meet the minimum CIBIL score requirement of ${product.minCibilScore}`, 400));
      }
    }

    // Calculate savings if interest rates are provided
    if (req.body.currentLoanDetails && req.body.transferDetails) {
      const currentDetails = req.body.currentLoanDetails;
      const transferDetails = req.body.transferDetails;

      if (currentDetails.rateOfInterest && transferDetails.newRateOfInterest &&
        currentDetails.remainingTenure && transferDetails.newTenure &&
        currentDetails.outstandingAmount) {

        // Calculate current EMI
        const currentPrincipal = currentDetails.outstandingAmount;
        const currentRate = currentDetails.rateOfInterest / 1200; // Monthly rate
        const currentTenure = currentDetails.remainingTenure;

        const currentEmi = (currentPrincipal * currentRate * Math.pow(1 + currentRate, currentTenure)) /
          (Math.pow(1 + currentRate, currentTenure) - 1);

        // Calculate new EMI
        const newPrincipal = currentPrincipal;
        const newRate = transferDetails.newRateOfInterest / 1200; // Monthly rate
        const newTenure = transferDetails.newTenure;

        const newEmi = (newPrincipal * newRate * Math.pow(1 + newRate, newTenure)) /
          (Math.pow(1 + newRate, newTenure) - 1);

        // Calculate savings
        const savingsPerMonth = currentEmi - newEmi;
        const totalSavings = (savingsPerMonth * newTenure) - (transferDetails.processingFee || 0);

        // Update transfer details
        transferDetails.newEmiAmount = newEmi.toFixed(2);
        transferDetails.savingsPerMonth = savingsPerMonth.toFixed(2);
        transferDetails.totalSavings = totalSavings.toFixed(2);

        req.body.transferDetails = transferDetails;
      }
    }

    // Create loan transfer application
    const loanTransfer = await LoanTransfer.create(req.body);

    // Send notification
    const emailMessage = `Your loan transfer application has been received successfully. Your application number is ${loanTransfer.applicationNumber}. We will update you on the status soon.`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Loan Transfer Application Received',
        message: emailMessage,
        html: generateWelcomeEmail
      });

      await sendSMS({
        mobile: user.mobile,
        message: `Your loan transfer application (${loanTransfer.applicationNumber}) has been received. We'll update you soon.`
      });
    } catch (err) {
      console.log('Notification error:', err);
    }

    res.status(201).json({
      success: true,
      data: loanTransfer
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all loan transfer applications for a user
// @route   GET /api/loan/transfer/user
// @access  Private
exports.getUserLoanTransfers = async (req, res, next) => {
  try {
    const loanTransfers = await LoanTransfer.find({ userId: req.user.id })
      .populate('transferDetails.productId', 'title category')
      .populate('transferDetails.partnerId', 'name logo')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: loanTransfers.length,
      data: loanTransfers
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get loan transfer by ID
// @route   GET /api/loan/transfer/:id
// @access  Private
exports.getLoanTransfer = async (req, res, next) => {
  try {
    const loanTransfer = await LoanTransfer.findById(req.params.id)
      .populate('transferDetails.productId')
      .populate('transferDetails.partnerId')
      .populate('userId', 'name email mobile');

    if (!loanTransfer) {
      return next(new ErrorResponse(`Loan transfer not found with id of ${req.params.id}`, 404));
    }

    // Make sure user owns loan transfer or is admin
    if (loanTransfer.userId.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(new ErrorResponse(`User ${req.user.id} is not authorized to access this loan transfer`, 401));
    }

    res.status(200).json({
      success: true,
      data: loanTransfer
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update loan transfer status
// @route   PUT /api/loan/transfer/:id/status
// @access  Private/Admin
exports.updateLoanTransferStatus = async (req, res, next) => {
  try {
    const { status, remarks } = req.body;

    let loanTransfer = await LoanTransfer.findById(req.params.id);

    if (!loanTransfer) {
      return next(new ErrorResponse(`Loan transfer not found with id of ${req.params.id}`, 404));
    }

    loanTransfer.status = status;
    loanTransfer.remarks = remarks;
    loanTransfer.updatedAt = Date.now();

    await loanTransfer.save();

    // Send notification
    const user = await User.findById(loanTransfer.userId);

    const emailMessage = `Your loan transfer application (${loanTransfer.applicationNumber}) has been ${status}. ${remarks ? `Remarks: ${remarks}` : ''}`;

    try {
      await sendEmail({
        email: user.email,
        subject: `Loan Transfer Application ${status.charAt(0).toUpperCase() + status.slice(1)}`,
        message: emailMessage,
        html: generateWelcomeEmail
      });

      await sendSMS({
        mobile: user.mobile,
        message: `Your loan transfer application (${loanTransfer.applicationNumber}) has been ${status}. ${remarks ? `Remarks: ${remarks}` : ''}`
      });
    } catch (err) {
      console.log('Notification error:', err);
    }

    res.status(200).json({
      success: true,
      data: loanTransfer
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Apply for loan against car
// @route   POST /api/loan/against-car
// @access  Private
exports.applyForLoanAgainstCar = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;
    req.body.loanType = 'car';

    // Check if KYC is completed and verified
    const user = await User.findById(req.user.id);
    const kyc = await Kyc.findOne({ userId: req.user.id });

    if (!user.kycCompleted || !kyc || !kyc.verified) {
      return next(new ErrorResponse('Please complete and verify your KYC first', 400));
    }

    // Create loan transfer application (using the same model)
    const loanTransfer = await LoanTransfer.create(req.body);

    // Send notification
    const emailMessage = `Your loan against car application has been received successfully. Your application number is ${loanTransfer.applicationNumber}. We will update you on the status soon.`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Loan Against Car Application Received',
        message: emailMessage,
        html: generateWelcomeEmail
      });

      await sendSMS({
        mobile: user.mobile,
        message: `Your loan against car application (${loanTransfer.applicationNumber}) has been received. We'll update you soon.`
      });
    } catch (err) {
      console.log('Notification error:', err);
    }

    res.status(201).json({
      success: true,
      data: loanTransfer
    });
  } catch (err) {
    next(err);
  }
};

exports.PersonalLoanApply = async (req, res) => {
  try {
    const { formData } = req.body;

    if (!formData) {
      return res.status(400).json({
        message: "Form data is not provided",
        success: false,
      });
    }

    const personalL = new PersonalLoan(formData);
    await personalL.save();

    return res.status(201).json({
      message: "Data saved successfully",
      success: true,
    });

  } catch (error) {
    console.error("Error saving personal loan:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};

exports.BussinessLoanApply = async (req, res) => {
  try {
    const { formData } = req.body;
    console.log('formdata', formData);
    if (!formData) {
      return res.status(401).json({
        message: "Form data is not provided",
        success: false,
      });
    }

    const bussinessloan = new BussinessLoan(formData);
    await bussinessloan.save();

    return res.status(201).json({
      message: "Data saved successfully",
      success: true,
    });

  } catch (error) {
    console.error("Error saving personal loan:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
}

exports.getPersonalLoanDocuments = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log('userId=>', userId);
    console.log('req.body=>', req.body);
    console.log('req.files=>', req.files);

    const getURLs = (field) => req.files[field]?.map((file) => file.path) || [];

    const documentData = {
      userId,
      pancard: getURLs("pancard")[0] || null,
      adharcard: getURLs("adharcard")[0] || null,
      salarySlips: getURLs("salarySlips"),
      bankStatements: getURLs("bankStatements"),
      photo: getURLs("photo")[0] || null,
      form16: getURLs("form16")[0] || null,
      offerLetter: getURLs("offerLetter")[0] || null,
      cibilReport: getURLs("cibilReport")[0] || null,
    };

    const newDoc = new PersonalLoanDocuments(documentData);
    await newDoc.save();

    res.json({ success: true, message: "Documents uploaded to Cloudinary", data: newDoc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Upload failed" });
  }

}

exports.getHomeLoanDocuments = async (req, res) => {
  try {
    const { userId } = req.body;
    const getURLs = (field) => req.files[field]?.map((file) => file.path) || [];

    const documentData = {
      userId,
      pancard: getURLs(req, "pancard")[0] || null,
      adharcard: getURLs(req, "adharcard")[0] || null,
      salarySlips: getURLs(req, "salarySlips"),
      form16: getURLs(req, "form16")[0] || null,
      bankStatements: getURLs(req, "bankStatements"),
      propertyDocs: getURLs(req, "propertyDocs"),
    };

    const newDoc = new HomeLoanDocuments(documentData);
    await newDoc.save();
    res.json({ success: true, message: "Home loan documents uploaded", data: newDoc });
  } catch (err) {
    res.status(500).json({ success: false, message: "Upload failed", error: err.message });
  }
};

exports.getBusinessLoanDocuments = async (req, res) => {
  try {
    const { userId } = req.body;
    const getURLs = (field) => req.files[field]?.map((file) => file.path) || [];

    const documentData = {
      userId,
      pancard: getURLs(req, "pancard")[0] || null,
      adharcard: getURLs(req, "adharcard")[0] || null,
      photo: getURLs(req, "photo")[0] || null,
      salarySlips: getURLs(req, "salarySlips"),
      form16: getURLs(req, "form16")[0] || null,
      bankStatements: getURLs(req, "bankStatements"),
      gstReturn: getURLs(req, "gstReturn"),
      itrDocs: getURLs(req, "itrDocs"),
    };

    const newDoc = new BusinessLoanDocuments(documentData);
    await newDoc.save();
    res.json({ success: true, message: "Business loan documents uploaded", data: newDoc });
  } catch (err) {
    res.status(500).json({ success: false, message: "Upload failed", error: err.message });
  }
};

exports.getMortgageLoanDocuments = async (req, res) => {
  try {
    const { userId } = req.body;
    const getURLs = (field) => req.files[field]?.map((file) => file.path) || [];

    const documentData = {
      userId,
      pancard: getURLs(req, "pancard")[0] || null,
      adharcard: getURLs(req, "adharcard")[0] || null,
      photo: getURLs(req, "photo")[0] || null,
      propertyDocs: getURLs(req, "propertyDocs"),
      loanSanctionLetter: getURLs(req, "loanSanctionLetter")[0] || null,
    };

    const newDoc = new MortgageLoanDocuments(documentData);
    await newDoc.save();
    res.json({ success: true, message: "Mortgage loan documents uploaded", data: newDoc });
  } catch (err) {
    res.status(500).json({ success: false, message: "Upload failed", error: err.message });
  }
};
