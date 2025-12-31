// const mongoose = require('mongoose');

// const ApplicationSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: [true, 'Please add a user']
//   },
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: [true, 'Please add a product']
//   },
//   type: {
//     type: String,
//     required: [true, 'Please add application type'],
//     enum: ['loan', 'credit_card', 'insurance', 'investment']
//   },
//   amount: {
//     type: Number,
//     required: function() {
//       return this.type === 'loan' || this.type === 'investment';
//     }
//   },
//   tenure: {
//     type: Number,
//     required: function() {
//       return this.type === 'loan';
//     }
//   },
//   documents: {
//     type: Map,
//     of: String
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'under_review', 'approved', 'rejected', 'disbursed'],
//     default: 'pending'
//   },
//   remarks: {
//     type: String
//   },
//   applicationNumber: {
//     type: String,
//     unique: true
//   },
//   emiAmount: {
//     type: Number
//   },
//   interestRate: {
//     type: Number
//   },
//   processingFee: {
//     type: Number
//   },
//   totalPayable: {
//     type: Number
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Generate application number before saving
// ApplicationSchema.pre('save', function(next) {
//   if (!this.applicationNumber) {
//     const prefix = this.type.charAt(0).toUpperCase() + 'A';
//     const timestamp = Date.now().toString().slice(-8);
//     const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
//     this.applicationNumber = `${prefix}${timestamp}${random}`;
//   }
//   next();
// });

// module.exports = mongoose.model('Application', ApplicationSchema);




const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(

 {
    user: {
      type: String,
      required: true, // name or email
      trim: true,
    },

    product: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    applied: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);





module.exports = mongoose.model("Application", ApplicationSchema);
