const mongoose = require('mongoose');

const VideoKycSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'failed', 'cancelled'],
    default: 'scheduled'
  },
  scheduledTime: {
    type: Date,
    required: true
  },
  verificationData: {
    panVerified: Boolean,
    aadhaarVerified: Boolean,
    faceMatch: Boolean,
    livenessCheck: Boolean,
    geolocation: {
      latitude: Number,
      longitude: Number
    }
  },
  recording: {
    url: String,
    duration: Number
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  remarks: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('VideoKyc', VideoKycSchema);