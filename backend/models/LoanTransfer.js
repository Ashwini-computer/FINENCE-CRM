const mongoose = require('mongoose');

const LoanTransferSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please add a user']
  },
  loanType: {
    type: String,
    required: [true, 'Please add loan type'],
    enum: ['home', 'personal', 'business', 'education', 'car', 'other']
  },
  currentLoanDetails: {
    bankName: String,
    accountNumber: String,
    outstandingAmount: Number,
    rateOfInterest: Number,
    remainingTenure: Number,
    emiAmount: Number
  },
  transferDetails: {
    partnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Partner'
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    newRateOfInterest: Number,
    newTenure: Number,
    newEmiAmount: Number,
    savingsPerMonth: Number,
    totalSavings: Number,
    processingFee: Number
  },
  documents: {
    type: Map,
    of: String
  },
  status: {
    type: String,
    enum: ['pending', 'under_review', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  remarks: {
    type: String
  },
  applicationNumber: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Generate application number before saving
LoanTransferSchema.pre('save', function(next) {
  if (!this.applicationNumber) {
    const prefix = 'LT';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.applicationNumber = `${prefix}${timestamp}${random}`;
  }
  next();
});

module.exports = mongoose.model('LoanTransfer', LoanTransferSchema);