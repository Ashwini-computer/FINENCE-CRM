const mongoose = require('mongoose');
const MortgageLoanDocuments = new mongoose.Schema({
  userId: String,
  pancard: String,
  adharcard: String,
  photo: String,
  propertyDocs: [String],
  loanSanctionLetter: String,
}, { timestamps: true });

module.exports = mongoose.model("MortgageLoanDocuments", MortgageLoanDocuments);
