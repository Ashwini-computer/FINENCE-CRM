// models/CreditReport.js
const mongoose = require("mongoose");

const CreditReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    pdfBuffer: { type: Buffer, required: true },
    pdfMimeType: { type: String, default: "application/pdf" },
    cibilScore: Number,
    reportDate: Date,
    panNumber: String,
    name: String,
    rawJson: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreditReportpdf", CreditReportSchema);
