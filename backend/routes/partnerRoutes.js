const express = require("express");
const {
  getPartners,
  addPartner,
  deletePartner,
} = require("../controllers/partnerController");

const router = express.Router();

router.get("/", getPartners);
router.post("/", addPartner);
router.delete("/:id", deletePartner);

module.exports = router; // ✅ IMPORTANT
