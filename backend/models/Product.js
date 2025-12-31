const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
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
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['loan', 'credit_card', 'insurance', 'investment']
  },
  subCategory: {
    type: String,
    required: [true, 'Please add a sub-category']
  },
  interestRate: {
    type: Number,
    required: function() {
      return this.category === 'loan' || this.category === 'investment';
    }
  },
  processingFee: {
    type: Number,
    default: 0
  },
  minAmount: {
    type: Number,
    required: function() {
      return this.category === 'loan' || this.category === 'investment';
    }
  },
  maxAmount: {
    type: Number,
    required: function() {
      return this.category === 'loan' || this.category === 'investment';
    }
  },
  tenure: {
    type: [Number],
    required: function() {
      return this.category === 'loan';
    }
  },
  minCibilScore: {
    type: Number,
    default: 650
  },
  eligibility: {
    type: String,
    required: [true, 'Please add eligibility criteria']
  },
  documents: {
    type: [String],
    required: [true, 'Please add required documents']
  },
  partnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Partner',
    required: [true, 'Please add a partner']
  },
  offers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer'
  }],
  features: [String],
  benefits: [String],
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

module.exports = mongoose.model('Product', ProductSchema);