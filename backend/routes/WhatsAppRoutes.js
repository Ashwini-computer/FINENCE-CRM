const express = require("express");
const router = express.Router();

const {
  sendOfferMessage,
  bulkWhatsappMessage,
} = require("../controllers/whatsappController");

/**
 * =========================
 * WhatsApp Routes
 * Base path: /api/whatsapp
 * =========================
 */

// Health check
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "WhatsApp API is running ✅",
  });
});

// Send single offer message
// POST /api/whatsapp/send-offer
router.post("/send-offer", sendOfferMessage);

// Send bulk WhatsApp messages
// POST /api/whatsapp/bulk
router.post("/bulk", bulkWhatsappMessage);

module.exports = router;
