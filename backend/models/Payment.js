const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'inr'
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['card', 'upi', 'netbanking']
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  stripePaymentId: {
    type: String
  },
  stripeCustomerId: {
    type: String
  },
  creditReport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CreditReport'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', PaymentSchema);