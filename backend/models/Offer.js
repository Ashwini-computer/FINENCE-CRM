const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  applicableProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  userTargeting: {
    minCibilScore: Number,
    maxCibilScore: Number,
    ageRange: {
      min: Number,
      max: Number
    },
    incomeRange: {
      min: Number,
      max: Number
    },
    location: [String]
  },
  partnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Partner'
  },
  discountPercentage: {
    type: Number
  },
  cashbackAmount: {
    type: Number
  },
  couponCode: {
    type: String
  },
  startDate: {
    type: Date,
    required: [true, 'Please add a start date']
  },
  expiryDate: {
    type: Date,
    required: [true, 'Please add an expiry date']
  },
  isActive: {
    type: Boolean,
    default: true
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

module.exports = mongoose.model('Offer', OfferSchema);