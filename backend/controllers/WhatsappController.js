// =========================
// Send Single WhatsApp Offer Message
// =========================
const sendOfferMessage = async (req, res) => {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({
        success: false,
        message: "phone and message are required",
      });
    }

    // 🔹 Demo response (later you can integrate WhatsApp API)
    console.log("📩 Sending WhatsApp Offer:", { phone, message });

    return res.status(200).json({
      success: true,
      message: "Offer message sent successfully ✅",
    });
  } catch (error) {
    console.error("❌ sendOfferMessage Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send offer message",
    });
  }
};

// =========================
// Send Bulk WhatsApp Messages
// =========================
const bulkWhatsappMessage = async (req, res) => {
  try {
    const { users, message } = req.body;

    if (!Array.isArray(users) || users.length === 0 || !message) {
      return res.status(400).json({
        success: false,
        message: "users array and message are required",
      });
    }

    console.log("📩 Sending Bulk WhatsApp:", {
      totalUsers: users.length,
      message,
    });

    // 🔹 Demo response
    return res.status(200).json({
      success: true,
      message: "Bulk WhatsApp messages sent successfully ✅",
      total: users.length,
    });
  } catch (error) {
    console.error("❌ bulkWhatsappMessage Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send bulk WhatsApp messages",
    });
  }
};

// ✅ VERY IMPORTANT
module.exports = {
  sendOfferMessage,
  bulkWhatsappMessage,
};
