const mongoose = require('mongoose');

const ProductRecommendationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recommendations: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    score: Number,
    reason: String,
    isPersonalized: Boolean
  }],
  userProfile: {
    cibilScore: Number,
    income: Number,
    employmentType: String,
    existingProducts: [{
      type: String,
      provider: String
    }]
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProductRecommendation', ProductRecommendationSchema);