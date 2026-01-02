const Partner = require("../models/Partner");

// GET all partners
exports.getPartners = async (req, res) => {
  try {
    const partners = await Partner.find().sort({ createdAt: -1 });
    res.json(partners);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
};

// ADD partner
exports.addPartner = async (req, res) => {
  try {
    const partner = new Partner(req.body);
    await partner.save();
    res.status(201).json(partner);
  } catch (err) {
    res.status(500).json({ message: "Add failed" });
  }
};

// DELETE partner
exports.deletePartner = async (req, res) => {
  try {
    await Partner.findByIdAndDelete(req.params.id);
    res.json({ message: "Partner deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
