const mongoose = require('mongoose');

const KycSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  panNumber: {
    type: String,
    required: [true, 'Please add a PAN number'],
    match: [
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      'Please add a valid PAN number'
    ]
  },
  aadhaarNumber: {
    type: String,
    required: [true, 'Please add an Aadhaar number'],
    match: [
      /^\d{12}$/,
      'Please add a valid 12-digit Aadhaar number'
    ]
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please add date of birth']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  city: {
    type: String,
    required: [true, 'Please add a city']
  },
  state: {
    type: String,
    required: [true, 'Please add a state']
  },
  pincode: {
    type: String,
    required: [true, 'Please add a pincode'],
    match: [
      /^\d{6}$/,
      'Please add a valid 6-digit pincode'
    ]
  },
  cibilScore: {
    type: Number,
    default: null
  },
  uploadedDocs: {
    panCard: {
      type: String
    },
    aadhaarFront: {
      type: String
    },
    aadhaarBack: {
      type: String
    },
    bankStatement: {
      type: String
    },
    salarySlip: {
      type: String
    }
  },
  verified: {
    type: Boolean,
    default: false
  },
  remarks: {
    type: String
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

module.exports = mongoose.model('Kyc', KycSchema);