const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a partner name'],
    unique: true,
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  type: {
    type: String,
    required: [true, 'Please add a partner type'],
    enum: ['bank', 'nbfc', 'insurer', 'investment', 'other']
  },
  logo: {
    type: String
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  contactInfo: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  apiEndpoint: {
    type: String
  },
  apiKey: {
    type: String
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

module.exports = mongoose.model('Partner', PartnerSchema);