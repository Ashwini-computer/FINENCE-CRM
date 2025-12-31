const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const ErrorResponse = require("../utils/errorResponse");
const Payment = require("../models/Payment");
const CreditReport = require("../models/CreditReport");
const razorpay = require("../utils/razorpay");
const crypto = require("crypto");
const cibilkycs = require("../models/cibilkycs");
const { getTransUnionReport } = require("../config/getTransUnionReport ");
const User = require("../models/User");
// @desc    Create payment intent
// @route   POST /api/payments/create-intent
// @access  Private
exports.createPaymentIntent = async (req, res, next) => {
  try {
    const { amount, currency, paymentMethod } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: currency || "inr",
      payment_method_types: ["card"],
      metadata: {
        userId: req.user.id,
        paymentMethod,
      },
    });

    const payment = await Payment.create({
      userId: req.user.id,
      amount,
      currency,
      paymentMethod,
      stripePaymentId: paymentIntent.id,
    });

    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Confirm payment and generate credit report
// @route   POST /api/payments/confirm/:paymentId
// @access  Private
exports.confirmPayment = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.paymentId);

    if (!payment) {
      return next(new ErrorResponse("Payment not found", 404));
    }

    // Update payment status
    payment.status = "completed";
    await payment.save();

    // Generate credit report
    const creditReport = await CreditReport.create({
      userId: req.user.id,
      reportType: "detailed",
      cibilScore: Math.floor(Math.random() * (850 - 300 + 1)) + 300,
      reportData: {
        // Mock credit report data
        personalInfo: {
          name: req.user.name,
          dob: "1990-01-01",
          pan: "ABCDE1234F",
        },
        accounts: [
          {
            type: "Credit Card",
            bank: "HDFC Bank",
            status: "Active",
            limit: 100000,
            balance: 25000,
          },
        ],
        inquiries: [
          {
            date: new Date(),
            institution: "ABC Bank",
            type: "Credit Card",
          },
        ],
      },
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days validity
    });

    // Link credit report to payment
    payment.creditReport = creditReport._id;
    await payment.save();

    res.status(200).json({
      success: true,
      data: {
        payment,
        creditReport,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Download credit report
// @route   GET /api/payments/report/:reportId
// @access  Private
exports.downloadReport = async (req, res, next) => {
  try {
    const report = await CreditReport.findById(req.params.reportId);

    if (!report) {
      return next(new ErrorResponse("Report not found", 404));
    }

    if (report.userId.toString() !== req.user.id) {
      return next(
        new ErrorResponse("Not authorized to access this report", 401)
      );
    }

    // Generate PDF report
    const pdfBuffer = await generatePDFReport(report);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=credit-report-${report._id}.pdf`
    );
    res.send(pdfBuffer);
  } catch (err) {
    next(err);
  }
};

// Helper function to generate PDF report
const generatePDFReport = async (report) => {
  // Mock PDF generation
  return Buffer.from("PDF content");
};

// All Razorpay Controllers

exports.createPaymentOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    if (!amount) {
      return res.status(401).json({ message: "amount not provide " });
    }
    const options = {
      amount: amount * 100, // amount in paisa
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating Razorpay order");
  }
};

exports.verifyPaymentOrder = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
    } = req.body.paymentDetails;

    // Step 1: Verify Signature
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generated_signature = hmac.digest("hex");

    if (generated_signature !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature" });
    }

    // Step 2: Update Payment Status
    await User.findOneAndUpdate(
      { userId },
      {
        "paymentStatus.status": "successful",
        "paymentStatus.razorpayOrderId": razorpay_order_id,
        "paymentStatus.razorpayPaymentId": razorpay_payment_id,
        "paymentStatus.razorpaySignature": razorpay_signature,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Payment verified",
    });
  } catch (error) {
    console.error("Payment verification or report generation failed:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
