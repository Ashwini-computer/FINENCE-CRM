const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    phone: {
      type: String,
      required: true,
      unique: true
    },

    address: {
      type: String,
      default: ''
    },

    occupation: {
      type: String,
      default: ''
    },

    company: {
      type: String,
      default: ''
    },

    monthlyIncome: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: ['verified', 'pending', 'blocked'],
      default: 'pending'
    },

    cibilScore: {
      type: Number,
      min: 300,
      max: 900,
      default: null
    },

    totalApplications: {
      type: Number,
      default: 0
    },

    approvedAmount: {
      type: Number,
      default: 0
    },

    lastLogin: {
      type: Date,
      default: null
    },

    profilePicture: {
      type: String,
      default: null
    },

    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true // createdAt = joinDate
  }
);

module.exports = mongoose.model('User', userSchema);
