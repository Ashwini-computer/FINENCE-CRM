// const ErrorResponse = require('../utils/errorResponse');
// const Application = require('../models/Application');
// const Product = require('../models/Product');
// const User = require('../models/User');
// const Kyc = require('../models/Kyc');
// const sendEmail = require('../utils/sendEmail');
// const sendSMS = require('../utils/sendSMS');
// const generateWelcomeEmail = require('../utils/emailTemplates/welcomeEmail');

// // @desc    Create new application
// // @route   POST /api/applications
// // @access  Private
// exports.createApplication = async (req, res, next) => {
//   try {
//     req.body.userId = req.user.id;

//     // Check if product exists
//     const product = await Product.findById(req.body.productId);

//     if (!product) {
//       return next(new ErrorResponse(`Product not found with id of ${req.body.productId}`, 404));
//     }

//     // Check if KYC is completed
//     const user = await User.findById(req.user.id);

//     if (!user.kycCompleted) {
//       return next(new ErrorResponse('Please complete KYC first', 400));
//     }

//     // Check if KYC is verified
//     const kyc = await Kyc.findOne({ userId: req.user.id });

//     if (!kyc.verified) {
//       return next(new ErrorResponse('Your KYC is not verified yet', 400));
//     }

//     // Check eligibility based on CIBIL score
//     if (kyc.cibilScore < product.minCibilScore) {
//       return next(new ErrorResponse(`You do not meet the minimum CIBIL score requirement of ${product.minCibilScore}`, 400));
//     }

//     // Add product type to application
//     req.body.type = product.category;

//     // Calculate EMI if loan application
//     if (product.category === 'loan') {
//       const amount = req.body.amount;
//       const tenure = req.body.tenure;
//       const interestRate = product.interestRate;

//       // Simple interest calculation for now (in a real app, this would be a compound interest formula)
//       const totalInterest = amount * interestRate * tenure / 1200; // Convert annual rate to monthly and years to months
//       const totalAmount = parseFloat(amount) + parseFloat(totalInterest);
//       const emiAmount = totalAmount / tenure;

//       req.body.emiAmount = emiAmount.toFixed(2);
//       req.body.interestRate = interestRate;
//       req.body.processingFee = product.processingFee || 0;
//       req.body.totalPayable = totalAmount.toFixed(2);
//     }

//     const application = await Application.create(req.body);

//     // Send notification
//     const emailMessage = `Your application for ${product.title} has been received successfully. Your application number is ${application.applicationNumber}. We will update you on the status soon.`;

//     try {
//       await sendEmail({
//         email: user.email,
//         subject: 'Application Received',
//         message: emailMessage,
//         html: generateWelcomeEmail
//       });

//       await sendSMS({
//         mobile: user.mobile,
//         message: `Your application for ${product.title} (${application.applicationNumber}) has been received. We'll update you soon.`
//       });
//     } catch (err) {
//       console.log('Notification error:', err);
//     }

//     res.status(201).json({
//       success: true,
//       data: application
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Get all applications for a user
// // @route   GET /api/applications/user
// // @access  Private
// exports.getUserApplications = async (req, res, next) => {
//   try {
//     const applications = await Application.find({ userId: req.user.id })
//       .populate('productId', 'title category')
//       .sort('-createdAt');

//     res.status(200).json({
//       success: true,
//       count: applications.length,
//       data: applications
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Get application by ID
// // @route   GET /api/applications/:id
// // @access  Private
// exports.getApplication = async (req, res, next) => {
//   try {
//     const application = await Application.findById(req.params.id)
//       .populate('productId')
//       .populate('userId', 'name email mobile');

//     if (!application) {
//       return next(new ErrorResponse(`Application not found with id of ${req.params.id}`, 404));
//     }

//     // Make sure user owns application or is admin
//     if (application.userId.toString() !== req.user.id && req.user.role !== 'admin') {
//       return next(new ErrorResponse(`User ${req.user.id} is not authorized to access this application`, 401));
//     }

//     res.status(200).json({
//       success: true,
//       data: application
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Update application status
// // @route   PUT /api/applications/:id/status
// // @access  Private/Admin
// exports.updateApplicationStatus = async (req, res, next) => {
//   try {
//     const { status, remarks } = req.body;

//     let application = await Application.findById(req.params.id);

//     if (!application) {
//       return next(new ErrorResponse(`Application not found with id of ${req.params.id}`, 404));
//     }

//     application.status = status;
//     application.remarks = remarks;
//     application.updatedAt = Date.now();

//     await application.save();

//     // Send notification
//     const user = await User.findById(application.userId);
//     const product = await Product.findById(application.productId);

//     const emailMessage = `Your application for ${product.title} (${application.applicationNumber}) has been ${status}. ${remarks ? `Remarks: ${remarks}` : ''}`;

//     try {
//       await sendEmail({
//         email: user.email,
//         subject: `Application ${status.charAt(0).toUpperCase() + status.slice(1)}`,
//         message: emailMessage,
//         html: generateWelcomeEmail
//       });

//       await sendSMS({
//         mobile: user.mobile,
//         message: `Your application for ${product.title} (${application.applicationNumber}) has been ${status}. ${remarks ? `Remarks: ${remarks}` : ''}`
//       });
//     } catch (err) {
//       console.log('Notification error:', err);
//     }

//     res.status(200).json({
//       success: true,
//       data: application
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Get all applications (admin)
// // @route   GET /api/applications/admin
// // @access  Private/Admin
// exports.getAllApplications = async (req, res, next) => {
//   try {
//     // Copy req.query
//     const reqQuery = { ...req.query };

//     // Fields to exclude
//     const removeFields = ['select', 'sort', 'page', 'limit'];

//     // Loop over removeFields and delete them from reqQuery
//     removeFields.forEach(param => delete reqQuery[param]);

//     // Create query string
//     let queryStr = JSON.stringify(reqQuery);

//     // Create operators ($gt, $gte, etc)
//     queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

//     // Finding resource
//     let query = Application.find(JSON.parse(queryStr))
//       .populate('productId', 'title category')
//       .populate('userId', 'name email mobile');

//     // Select Fields
//     if (req.query.select) {
//       const fields = req.query.select.split(',').join(' ');
//       query = query.select(fields);
//     }

//     // Sort
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(',').join(' ');
//       query = query.sort(sortBy);
//     } else {
//       query = query.sort('-createdAt');
//     }

//     // Pagination
//     const page = parseInt(req.query.page, 10) || 1;
//     const limit = parseInt(req.query.limit, 10) || 10;
//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;
//     const total = await Application.countDocuments(JSON.parse(queryStr));

//     query = query.skip(startIndex).limit(limit);

//     // Executing query
//     const applications = await query;

//     // Pagination result
//     const pagination = {};

//     if (endIndex < total) {
//       pagination.next = {
//         page: page + 1,
//         limit
//       };
//     }

//     if (startIndex > 0) {
//       pagination.prev = {
//         page: page - 1,
//         limit
//       };
//     }

//     res.status(200).json({
//       success: true,
//       count: applications.length,
//       pagination,
//       data: applications
//     });
//   } catch (err) {
//     next(err);
//   }
// };




const ErrorResponse = require("../utils/errorResponse");
const Application = require("../models/Application");
const Product = require("../models/Product");
const User = require("../models/User");
const Kyc = require("../models/Kyc");
const sendEmail = require("../utils/sendEmail");
const sendSMS = require("../utils/sendSMS");



/* ================= CREATE APPLICATION ================= */

// exports.createApplication = async (req, res) => {
//   try {
//     const { user, product, amount, status, appliedAt } = req.body;

//     if (!user || !product || !amount) {
//       return res.status(400).json({
//         success: false,
//         message: "user, product, amount are required",
//       });
//     }

//     // FIND OR CREATE USER
//     let userDoc = await User.findOne({ email: user });

//     if (!userDoc) {
//       userDoc = await User.create({
//         email: user,
//         name: user.split("@")[0],
//         role: "user",
//         isVerified: false,
//       });
//     }

//     // FIND PRODUCT
//     const productDoc = await Product.findOne({
//       category: product.toLowerCase(),
//     });

//     if (!productDoc) {
//       return res.status(400).json({
//         success: false,
//         message: `Product category '${product}' not found`,
//       });
//     }

//     // CREATE APPLICATION
//     const application = await Application.create({
//       userId: userDoc._id,
//       productId: productDoc._id,
//       amount: Number(amount),
//       status: status || "pending",
//       type: productDoc.category,
//       appliedAt: appliedAt ? new Date(appliedAt) : new Date(),
//     });

//     return res.status(201).json({
//       success: true,
//       data: application,
//     });
//   } catch (error) {
//     console.error("CREATE APPLICATION ERROR:", error);
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


exports.createApplication = async (req, res) => {
  try {
    const application = await Application.create({
      user: req.body.user,
      product: req.body.product,
      amount: Number(req.body.amount),
      status: req.body.status || "pending",
      applied: req.body.appliedAt, // ✅ FIX
    });

    res.status(201).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error("CREATE APPLICATION ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


/* ================= SINGLE APPLICATION ================= */

/* ================= USER APPLICATIONS ================= */

exports.getUserApplications = async (req, res) => {
  try {
    const { user } = req.query; // email expected

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User email is required",
      });
    }

    const userDoc = await User.findOne({ email: user });

    if (!userDoc) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const applications = await Application.find({ userId: userDoc._id })
      .populate("productId", "title category")
      .sort("-createdAt");

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= ADMIN UPDATE STATUS ================= */

exports.updateApplicationStatus = async (req, res, next) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    return next(new ErrorResponse("Application not found", 404));
  }

  application.status = req.body.status;
  application.remarks = req.body.remarks || "";

  await application.save();

  res.status(200).json({
    success: true,
    data: application,
  });
};

/* ================= ADMIN ALL APPLICATIONS ================= */

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort("-createdAt");

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

