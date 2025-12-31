const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"
    },
  name: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: String, // Use `Date` if you want actual date type
    required: true
  },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true
//   },
//   mobile: {
//     type: String,
//     required: true,
//     trim: true
//   },
  address: {
    type: String,
    required: true,
    trim: true
  },
  pinCode: {
    type: String,
    required: true,
    trim: true
  },
  panNumber: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  employmentType: {
    type: String,
    enum: ['Salaried', 'Self-Employed', 'Unemployed'], // update as per your logic
    required: true
  },
  employerName: {
    type: String,
    trim: true
  },
  monthlyIncome: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Userprofile', UserProfileSchema);
