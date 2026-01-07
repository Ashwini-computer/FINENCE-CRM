const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: String,
    phone: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Partner", partnerSchema);
