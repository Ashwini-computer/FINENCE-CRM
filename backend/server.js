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

// Load environment variables
dotenv.config();

// Connect to MongoDB
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
   SAFE ROUTE LOADER
   Prevents Router.use crash
========================= */
function safeUseRoute(path, routeFile) {
  try {
    const route = require(routeFile);

    if (typeof route !== "function") {
      console.error(
        `❌ Invalid route export from ${routeFile}. Expected a router function but got:`,
        typeof route
      );
      return;
    }

    app.use(path, route);
    console.log(`✅ Loaded route: ${path}`);
  } catch (err) {
    console.error(`❌ Failed to load route ${routeFile}`, err.message);
  }
}

/* =========================
   API ROUTES
========================= */
safeUseRoute("/api/auth", "./routes/authRoutes");
safeUseRoute("/api/kyc", "./routes/kycRoutes");
safeUseRoute("/api/kyc/video", "./routes/videoKycRoutes");
safeUseRoute("/api/cibil", "./routes/cibilRoutes");
safeUseRoute("/api/products", "./routes/productRoutes");
safeUseRoute("/api/applications", "./routes/applicationRoutes");
safeUseRoute("/api/partners", "./routes/partnerRoutes");
safeUseRoute("/api/offers", "./routes/offerRoutes");
safeUseRoute("/api/credit-improvement", "./routes/creditImprovementRoutes");
safeUseRoute("/api/loan", "./routes/loanRoutes");
safeUseRoute("/api/payments", "./routes/paymentRoutes");
safeUseRoute("/api/recommendations", "./routes/recommendationRoutes");
safeUseRoute("/api/whatsapp", "./routes/WhatsAppRoutes");
safeUseRoute("/api/users", "./routes/UserRoutes");

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
