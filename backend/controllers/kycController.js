const ErrorResponse = require('../utils/errorResponse');
const Kyc = require('../models/Kyc');
const User = require('../models/User');

// @desc    Upload KYC documents
// @route   POST /api/kyc/upload
// @access  Private
exports.uploadKycDocuments = async (req, res, next) => {
  try {
    const { panNumber, aadhaarNumber, dateOfBirth, address, city, state, pincode } = req.body;
    
    // Check if KYC already exists for this user
    let kyc = await Kyc.findOne({ userId: req.user.id });
    
    const uploadedDocs = {};
    
    // Handle file uploads
    if (req.files) {
      if (req.files.panCard) {
        uploadedDocs.panCard = req.files.panCard[0].filename;
      }
      if (req.files.aadhaarFront) {
        uploadedDocs.aadhaarFront = req.files.aadhaarFront[0].filename;
      }
      if (req.files.aadhaarBack) {
        uploadedDocs.aadhaarBack = req.files.aadhaarBack[0].filename;
      }
      if (req.files.bankStatement) {
        uploadedDocs.bankStatement = req.files.bankStatement[0].filename;
      }
      if (req.files.salarySlip) {
        uploadedDocs.salarySlip = req.files.salarySlip[0].filename;
      }
    }
    
    if (kyc) {
      // Update existing KYC
      kyc.panNumber = panNumber || kyc.panNumber;
      kyc.aadhaarNumber = aadhaarNumber || kyc.aadhaarNumber;
      kyc.dateOfBirth = dateOfBirth || kyc.dateOfBirth;
      kyc.address = address || kyc.address;
      kyc.city = city || kyc.city;
      kyc.state = state || kyc.state;
      kyc.pincode = pincode || kyc.pincode;
      kyc.uploadedDocs = { ...kyc.uploadedDocs, ...uploadedDocs };
      kyc.updatedAt = Date.now();
      
      await kyc.save();
    } else {
      // Create new KYC
      kyc = await Kyc.create({
        userId: req.user.id,
        panNumber,
        aadhaarNumber,
        dateOfBirth,
        address,
        city,
        state,
        pincode,
        uploadedDocs
      });
    }
    
    // Update user's KYC status
    await User.findByIdAndUpdate(req.user.id, { kycCompleted: true });
    
    res.status(200).json({
      success: true,
      data: kyc
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get KYC status
// @route   GET /api/kyc/status
// @access  Private
exports.getKycStatus = async (req, res, next) => {
  try {
    const kyc = await Kyc.findOne({ userId: req.user.id });
    
    if (!kyc) {
      return next(new ErrorResponse('KYC not submitted yet', 404));
    }
    
    res.status(200).json({
      success: true,
      data: kyc
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Verify KYC (Admin only)
// @route   PUT /api/kyc/verify/:id
// @access  Private/Admin
exports.verifyKyc = async (req, res, next) => {
  try {
    const { verified, remarks } = req.body;
    
    const kyc = await Kyc.findById(req.params.id);
    
    if (!kyc) {
      return next(new ErrorResponse(`KYC not found with id of ${req.params.id}`, 404));
    }
    
    kyc.verified = verified;
    kyc.remarks = remarks;
    kyc.updatedAt = Date.now();
    
    await kyc.save();
    
    // Get CIBIL score if verified (in a real implementation, this would call an external API)
    if (verified) {
      // Mock CIBIL score calculation
      const cibilScore = Math.floor(Math.random() * (850 - 300 + 1)) + 300;
      kyc.cibilScore = cibilScore;
      await kyc.save();
    }
    
    res.status(200).json({
      success: true,
      data: kyc
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all KYC submissions (Admin only)
// @route   GET /api/kyc
// @access  Private/Admin
exports.getAllKyc = async (req, res, next) => {
  try {
    const kycs = await Kyc.find().populate({
      path: 'userId',
      select: 'name email mobile'
    });
    
    res.status(200).json({
      success: true,
      count: kycs.length,
      data: kycs
    });
  } catch (err) {
    next(err);
  }
};