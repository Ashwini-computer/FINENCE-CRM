const mongoose = require("mongoose");

const PersonalLoanDocuments = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  pancard: String,
  adharcard: String,
  salarySlips: [String],
  bankStatements: [String],
  photo: String,
  form16: String,
  offerLetter: String,
  cibilReport: String,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PersonalLoanDocuments", PersonalLoanDocuments);
