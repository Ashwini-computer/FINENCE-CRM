const express = require("express");
const {
  checkCibilScore,
  getCreditImprovement,
  shareCibilReport,
  getCibilKycDetails,
  downloadreport,
} = require("../controllers/cibilController");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/check", protect, checkCibilScore);
router.post("/CibilKycDetails", protect, getCibilKycDetails);
router.get("/improvement", protect, getCreditImprovement);
router.get("/getcibilreport/:userId", protect, shareCibilReport);
router.get("/credit-report/:id/download", downloadreport);

module.exports = router;
