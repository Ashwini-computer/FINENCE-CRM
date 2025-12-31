const ErrorResponse = require("../utils/errorResponse");
const Kyc = require("../models/Kyc");
const CreditImprovement = require("../models/CreditImprovement");
const CreditReport = require("../models/CreditReport");
const cibilkycs = require("../models/cibilkycs");
const User = require("../models/User");
const { getTransUnionReport } = require("../config/getTransUnionReport ");
const path = require("path");
const puppeteer = require("puppeteer");
const ejs = require("ejs");
const CreditReportpdf = require("../models/CreditReportpdf");

function classifyDetailedCIBIL(report) {
  const score = report.cibilScore || 0;

  // Step 1: Extract payment issue codes from accounts
  const paymentIssues = (report.accounts || [])
    .flatMap((acc) => acc.paymentHistoryRaw?.split("") || [])
    .filter((code) => code !== "0" && code !== "N"); // "N" = No data, assume "0" = good

  // Step 2: Utilisation and account age
  const utilisation = report.utilisationPercent ?? 50; // fallback if not provided
  const avgAgeStr = report.averageAge || "0Y";
  const avgAgeYears = parseInt(avgAgeStr.split("Y")[0], 10) || 0;

  // Step 3: Enquiry count
  const enquiriesCount = (report.enquiries || []).length;

  // Step 4: Scoring
  const scorePoints = score >= 750 ? 2 : score >= 680 ? 1 : 0;
  const paymentPoints =
    paymentIssues.length === 0 ? 2 : paymentIssues.length <= 2 ? 1 : 0;
  const utilisationPoints = utilisation <= 30 ? 2 : utilisation <= 60 ? 1 : 0;
  const agePoints = avgAgeYears >= 5 ? 2 : avgAgeYears >= 2 ? 1 : 0;
  const enquiryPoints = enquiriesCount <= 2 ? 2 : enquiriesCount <= 4 ? 1 : 0;

  const total =
    scorePoints + paymentPoints + utilisationPoints + agePoints + enquiryPoints;

  // Step 5: Final classification
  if (total >= 9) return "Upper A";
  if (total >= 7) return "Lower A";
  if (total >= 5) return "Upper B";
  if (total >= 3) return "Lower B";
  if (total >= 1) return "Upper C";
  return "Lower C";
}

const generateCreditReportPDF = async (userId, reportData) => {
  try {
    console.log("Report Data in generateCreditReportPDF", reportData);
    // 1. Render EJS to HTML
    const html = await ejs.renderFile(
      path.join(__dirname, "../templates/creditReport.ejs"),
      reportData
    );

    // 2. Generate PDF in memory (not saving to disk)
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      timeout: 60000,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load", timeout: 60000 });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // 3. Save to MongoDB
    const newReport = new CreditReportpdf({
      userId,
      pdfBuffer: Buffer.from(pdfBuffer),
      cibilScore: reportData.score,
      reportDate: new Date(),
      panNumber: reportData.pan,
      name: reportData.name,
      rawJson: reportData,
    });

    await newReport.save();

    console.log(" PDF generated and saved to MongoDB");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

// @desc    Check CIBIL score
// @route   POST /api/cibil/check
// @access  Private

exports.checkCibilScore = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({ message: "User ID is required", success: false });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    if (user?.iskyc !== true && user?.iskyc !== "true") {
      return res
        .status(401)
        .json({ message: "User KYC is not completed", success: false });
    }

    const reportData = await getTransUnionReport({
      name: user.name,
      panNumber: user.panNumber,
      dob: user.dob,
      mobile: user.mobile,
      pinCode: user.pinCode,
    });

    if (!reportData || !reportData.cibilScore || !reportData.reportId) {
      return res
        .status(500)
        .json({ message: "Invalid CIBIL report data", success: false });
    }

    // Prepare full report for DB
    const fullReport = new CreditReport({
      userId,
      reportId: reportData.reportId,
      reportDate: new Date(),
      name: user.name,
      panNumber: user.panNumber,
      dob: user.dob,
      mobile: user.mobile,
      address: reportData.address,
      cibilScore: reportData.cibilScore,
      scoreBand: reportData.scoreBand,
      accounts: reportData.accounts,
      enquiries: reportData.enquiries,
      rawResponse: reportData,
    });

    const savedReport = await fullReport.save();
    const catInputData = {
      cibilScore: savedReport.cibilScore,
      accounts: savedReport.accounts,
      enquiries: savedReport.enquiries,
      utilisationPercent: 28, // Must be calculated or fetched from API
      averageAge: "3Y 6M", // Optional, estimate if API does not return
    };
    console.log("reportData=>", reportData);
    const data = {
      name: "NITIN",
      score: 726,
      loans: { count: 2, total: "9,48,670", outstanding: "8,31,147" },
      cards: { count: 0, totalLimit: 0, outstanding: 0 },
      overdue: 0,
      age: "16 years 4 months",
      enquiries: 4,
    };
    const genaratepdf = generateCreditReportPDF(userId, data);
    const selectedCAT = classifyDetailedCIBIL(catInputData);

    await User.findByIdAndUpdate(userId, { CAT: selectedCAT }, { new: true });

    return res.status(200).json({
      success: true,
      message: "CIBIL report stored and classified successfully",
      report: savedReport,
      CAT: selectedCAT,
    });
  } catch (err) {
    console.error("CIBIL Score Error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while processing CIBIL score",
      error: err.message,
    });
  }
};

// mock api remove after production
// @desc    Get credit improvement suggestions
// @route   GET /api/cibil/improvement
// @access  Private
exports.getCreditImprovement = async (req, res, next) => {
  try {
    // Check if user has submitted KYC
    const kyc = await Kyc.findOne({ userId: req.user.id });

    if (!kyc || !kyc.cibilScore) {
      return next(
        new ErrorResponse("Please check your CIBIL score first", 400)
      );
    }

    const cibilScore = kyc.cibilScore;

    // Generate suggestions based on credit score
    const suggestions = [];

    if (cibilScore < 750) {
      suggestions.push({
        title: "Pay bills on time",
        description:
          "Set up automatic payments or reminders to ensure you pay all your bills on time.",
        priority: "high",
      });

      suggestions.push({
        title: "Reduce credit utilization",
        description:
          "Try to keep your credit card balances below 30% of your credit limit.",
        priority: "high",
      });
    }

    if (cibilScore < 700) {
      suggestions.push({
        title: "Clear outstanding dues",
        description:
          "Pay off any pending bills or dues to improve your credit score.",
        priority: "high",
      });

      suggestions.push({
        title: "Avoid multiple loan applications",
        description:
          "Multiple loan applications in a short period can negatively impact your score.",
        priority: "medium",
      });
    }

    suggestions.push({
      title: "Monitor your credit report regularly",
      description:
        "Check your credit report periodically to ensure it is accurate and up-to-date.",
      priority: "medium",
    });

    suggestions.push({
      title: "Maintain a good credit mix",
      description:
        "Having a mix of secured and unsecured loans can positively impact your score.",
      priority: "low",
    });

    // Save or update credit improvement plan
    let improvement = await CreditImprovement.findOne({ userId: req.user.id });

    if (improvement) {
      improvement.currentScore = cibilScore;
      improvement.suggestions = suggestions;
      improvement.updatedAt = Date.now();

      await improvement.save();
    } else {
      improvement = await CreditImprovement.create({
        userId: req.user.id,
        currentScore: cibilScore,
        targetScore: Math.min(850, cibilScore + 100),
        suggestions,
        plan: {
          startDate: Date.now(),
          endDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 6 months plan
        },
      });
    }

    res.status(200).json({
      success: true,
      data: improvement,
    });
  } catch (err) {
    next(err);
  }
};

exports.shareCibilReport = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res
      .status(400)
      .json({ message: "User ID is required", success: false });
  }

  try {
    const user = await User.findById(userId).lean(); // .lean() for faster access
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    const cibilReport = await CreditReport.findOne({ userId }).lean();

    if (!cibilReport) {
      return res
        .status(404)
        .json({ message: "CIBIL report not found", success: false });
    }

    const paymentStatus = user?.paymentStatus?.status || "created";

    // CASE 1: Paid users get full report
    if (paymentStatus === "successful") {
      return res.status(200).json({
        success: true,
        message: "CIBIL report retrieved successfully for paid user.",
        cibilReport,
      });
    }

    // CASE 2: User exists but not paid – share basic info
    return res.status(200).json({
      success: true,
      message: "Basic CIBIL score shared for unpaid user.",
      cibilScore: cibilReport.cibilScore,
    });
  } catch (error) {
    console.error("shareCibilReport error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
      error: error.message,
    });
  }
};

// @route    POST /api/cibilkyc
// @desc     Save or update CIBIL KYC data
// @access   Private (add auth middleware if needed)

exports.getCibilKycDetails = async (req, res) => {
  try {
    const { userId, name, mobile, dob, panNumber, pinCode } =
      req.body?.formData || {};

    if (!userId || !name || !mobile || !dob || !panNumber || !pinCode) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const existingKyc = await cibilkycs.findOne({ userId });

    if (existingKyc) {
      const updatedKyc = await cibilkycs.findOneAndUpdate(
        { userId },
        { $set: { name, mobile, dob, panNumber, pinCode, iskyc: true } },
        { new: true }
      );

      return res.status(200).json({
        message: "CIBIL KYC updated successfully",
        success: true,
        data: updatedKyc,
      });
    }

    const newKyc = new cibilkycs({
      userId,
      name,
      mobile,
      dob,
      panNumber,
      pinCode,
      iskyc: true,
    });

    const savedKyc = await newKyc.save();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { iskyc: true },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found while updating KYC flag",
        success: false,
      });
    }

    return res.status(200).json({
      message: "CIBIL KYC data saved successfully",
      success: true,
      data: savedKyc,
    });
  } catch (error) {
    console.error("❌ Error in getCibilKycDetails:", error.message);
    return res.status(500).json({
      message: "Server error while saving KYC details",
      success: false,
    });
  }
};

// generateCreditReportPDF("6850086b90476211f80da6e1");

// const CAT = classifyDetailedCIBIL(apiData);
// const offers = offersByCategory[CAT];
// savecreditreport();
exports.downloadreport = async (req, res) => {
  try {
    console.log("⬇️ Entering PDF download API");

    const report = await CreditReportpdf.findOne({ userId: req.params.id }); // for production only

    if (!report || !report.pdfBuffer) {
      return res.status(404).json({ message: "❌ Credit report not found" });
    }

    res.set({
      "Content-Type": report.pdfMimeType || "application/pdf",
      "Content-Disposition": `attachment; filename=credit-report.pdf`,
    });

    res.send(report.pdfBuffer);
  } catch (error) {
    console.error("❌ Download error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
