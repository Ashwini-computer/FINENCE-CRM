const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, default: "Bank" },
    contactPerson: String,
    email: String,
    phone: String,
    commission: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Partner ||
  mongoose.model("Partner", partnerSchema);
