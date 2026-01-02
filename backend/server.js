const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const path = require("path");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

// Load env
dotenv.config();

// Connect DB
connectDB();

const app = express();

/* =========================
   GLOBAL MIDDLEWARE
========================= */

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());

/* =========================
   VIEW ENGINE
========================= */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

/* =========================
   API ROUTES
========================= */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/kyc", require("./routes/kycRoutes"));
app.use("/api/kyc/video", require("./routes/videoKycRoutes"));
app.use("/api/cibil", require("./routes/cibilRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/partners", require("./routes/partnerRoutes")); // ✅ FIXED
app.use("/api/offers", require("./routes/offerRoutes"));
app.use("/api/credit-improvement", require("./routes/creditImprovementRoutes"));
app.use("/api/loan", require("./routes/loanRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/recommendations", require("./routes/recommendationRoutes"));
app.use("/api/whatsapp", require("./routes/WhatsAppRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));

/* =========================
   BASE ROUTE
========================= */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to FinancesBazar API 🚀",
  });
});

/* =========================
   ERROR HANDLER
========================= */
app.use(errorHandler);

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

/* =========================
   HANDLE UNHANDLED ERRORS
========================= */
process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});
