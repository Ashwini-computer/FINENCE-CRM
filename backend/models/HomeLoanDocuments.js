const mongoose = require('mongoose');

const HomeLoanDocuments = new mongoose.Schema({
  userId: String,
  pancard: String,
  adharcard: String,
  photo: String,
  salarySlips: [String],
  form16: String,
  bankStatements: [String],
  propertyDocs: [String],
}, { timestamps: true });

module.exports = mongoose.model("HomeLoanDocuments", HomeLoanDocuments);

