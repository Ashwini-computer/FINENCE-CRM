const mongoose = require('mongoose');

const BussinessLoan = new mongoose.Schema({
  employmentType: {
    type: String,
    required: true,
  },
  desiredLoanAmount: {
    type: String,
    required: true,
  },
  annualTurnOver: {
    type: String,
    required: true,
  },
  bussinessCity: {
    type: String,
    required: true,
    trim: true,
  },
  bussinessYearExprience: {
    type: String,
    // required: true,
  },
  profession: {
    type: String,
    // required: true,
    trim: true,
  },
  mobileNo: {
    type: String,
    // required: true,
    match: [/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'],
    unique: true, // Optional: ensures no duplicate numbers
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('BussinessLoan', BussinessLoan);
