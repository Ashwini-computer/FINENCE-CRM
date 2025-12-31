const express = require("express");
const {
  register,
  login,
  getMe,
  updateDetails,
  updatePassword,
  logout,
  googleAuth,
  sendOtp,
  verifyOtp,
  checkAuth,
} = require("../controllers/authController");

const router = express.Router();

const { protect } = require("../middleware/auth");
router.get("/check-auth", protect, checkAuth);
router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/updatedetails", protect, updateDetails);
router.put("/updatepassword", protect, updatePassword);
router.post("/logout", logout);
router.post("/google", googleAuth);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;
