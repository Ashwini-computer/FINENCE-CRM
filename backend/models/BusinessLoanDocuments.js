const mongoose = require('mongoose');

const BusinessLoanDocuments = new mongoose.Schema({
  userId: String,
  pancard: String,
  adharcard: String,
  photo: String,
  salarySlips: [String],
  form16: String,
  bankStatements: [String],
  gstReturn: String,
  itrDocs: [String],
}, { timestamps: true });

module.exports = mongoose.model("BusinessLoanDocuments", BusinessLoanDocuments);