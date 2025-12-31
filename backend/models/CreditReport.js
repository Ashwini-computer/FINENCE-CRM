// CibilReportSchema.js
const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    accountType: String,
    lenderName: String,
    accountNumberMasked: String,
    dateOpened: Date,
    paymentStartDate: Date,
    paymentEndDate: Date,
    paymentHistoryRaw: String,
    currentBalance: Number,
    creditLimit: Number,
    status: String,
  },
  { _id: false }
);

const EnquirySchema = new mongoose.Schema(
  {
    enquiryDate: Date,
    purpose: String,
    amount: Number,
    lender: String,
  },
  { _id: false }
);

const CibilReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    reportId: String,
    reportDate: Date,

    panNumber: String,
    name: String,
    dob: Date,
    mobile: String,
    address: String,

    cibilScore: Number,
    scoreBand: String,

    accounts: [AccountSchema],
    enquiries: [EnquirySchema],

    rawResponse: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = mongoose.model("CibilReport", CibilReportSchema);
