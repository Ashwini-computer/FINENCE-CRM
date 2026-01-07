const Partner = require("../models/Partner");

// ADD PARTNER
exports.addPartner = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if partner already exists
    const existing = await Partner.findOne({ name });
    if (existing) {
      return res.status(409).json({ success: false, message: "Partner with this name already exists" });
    }

    const partner = await Partner.create(req.body);
    res.status(201).json({ success: true, partner });
  } catch (err) {
    console.error("❌ Add Partner Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// DELETE PARTNER
exports.deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);
    if (!partner) {
      return res.status(404).json({ success: false, message: "Partner not found" });
    }
    res.status(200).json({ success: true, message: "Partner deleted" });
  } catch (err) {
    console.error("❌ Delete Partner Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET ALL PARTNERS
exports.getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json({ success: true, partners });
  } catch (err) {
    console.error("❌ Fetch Partners Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
