const mongoose = require('mongoose');

const personalLoanSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  employmentType: { type: String, required: true },
  incomeRange: { type: String, required: true },
  primaryBank: { type: String, required: true },
  companyName: { type: String, required: true },
  residenceCity: { type: String, required: true },
  annualIncome: { type: Number, required: true },
  loanAmount: { type: Number, required: true },
  currentEMI: { type: Number, required: true },
  mobile: { type: Number},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("personal-loan", personalLoanSchema);
