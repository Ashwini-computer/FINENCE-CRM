const mongoose = require('mongoose');

const CibilKycSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  mobile: {
    type: String,
    required: true,
    match: [/^\+91\d{10}$/, 'Mobile must be in +91XXXXXXXXXX format']
  },
  dob: {
    type: String,
    required: true,
    match: [/^\d{4}-\d{2}-\d{2}$/, 'DOB must be in YYYY-MM-DD format']
  },
  panNumber: {
    type: String,
    required: true,
    match: [/^[A-Z]{5}[0-9]{4}[A-Z]$/, 'Invalid PAN format']
  },
  pinCode: {
    type: String,
    required: true,
    match: [/^\d{6}$/, 'Pincode must be 6 digits']
  },
  iskyc: {
    type: Boolean,
    default: true
  },

  paymentStatus: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  },

  razorpayOrderId: {
    type: String,
    default: null
  },

  razorpayPaymentId: {
    type: String,
    default: null
  },

  razorpaySignature: {
    type: String,
    default: null
  }

}, { timestamps: true });

module.exports = mongoose.model('CibilKyc', CibilKycSchema);

