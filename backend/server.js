const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const cookieParser = require("cookie-parser");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "https://financesbazar.com",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
// Define routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/kyc", require("./routes/kycRoutes"));
app.use("/api/kyc/video", require("./routes/videoKycRoutes"));
app.use("/api/cibil", require("./routes/cibilRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/partners", require("./routes/partnerRoutes"));
app.use("/api/offers", require("./routes/offerRoutes"));
app.use("/api/credit-improvement", require("./routes/creditImprovementRoutes"));
app.use("/api/loan", require("./routes/loanRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/recommendations", require("./routes/recommendationRoutes"));
app.use("/api/whatsapp", require("./routes/WhatsAppRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));
// Base route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to financesbazar API" });
});
// dummy data
app.get("/generate-report", (req, res) => {
  res.render("creditReport", {
    name: "NITIN",
    score: 726,
    loans: { count: 2, total: "9,48,670", outstanding: "8,31,147" },
    cards: { count: 0, totalLimit: 0, outstanding: 0 },
    overdue: 0,
    age: "16 years 4 months",
    enquiries: 4,
  });
  res.json({ message: "Welcome to financesbazar API this our new api" });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});
