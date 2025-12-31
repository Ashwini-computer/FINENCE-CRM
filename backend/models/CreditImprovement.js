const mongoose = require('mongoose');

const CreditImprovementSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please add a user']
  },
  currentScore: {
    type: Number,
    required: [true, 'Please add current CIBIL score']
  },
  targetScore: {
    type: Number
  },
  suggestions: [{
    title: String,
    description: String,
    priority: {
      type: String,
      enum: ['high', 'medium', 'low']
    },
    completed: {
      type: Boolean,
      default: false
    }
  }],
  recommendedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  monthlyTracking: [{
    date: Date,
    score: Number,
    change: Number
  }],
  plan: {
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ['active', 'completed', 'abandoned'],
      default: 'active'
    }
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

module.exports = mongoose.model('CreditImprovement', CreditImprovementSchema);