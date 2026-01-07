const express = require("express");
const router = express.Router();

const {
  getPartners,
  addPartner,
  deletePartner,
} = require("../controllers/partnerController");

router.get("/", getPartners);
router.post("/", addPartner);
router.delete("/:id", deletePartner);

module.exports = router;
