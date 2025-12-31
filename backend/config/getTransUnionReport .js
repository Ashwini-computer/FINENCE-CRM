exports.getTransUnionReport = async ({
  name,
  panNumber,
  dob,
  mobile,
  pinCode,
}) => {
  // You should use Axios or Fetch with your TransUnion credentials and API docs
  // Here's a mocked response structure:
  return {
    reportId: "TRX123456789",
    cibilScore: 768,
    scoreBand: "Excellent",
    address: "123, Main Street, Mumbai",
    accounts: [
      {
        accountType: "Credit Card",
        lenderName: "HDFC Bank",
        accountNumberMasked: "XXXX1234",
        dateOpened: "2021-03-01",
        paymentStartDate: "2021-04-01",
        paymentEndDate: "2023-03-01",
        paymentHistoryRaw: "NNNNNNNDNNNNNNN",
        currentBalance: 12000,
        creditLimit: 50000,
        status: "Active",
      },
    ],
    enquiries: [
      {
        enquiryDate: "2024-12-01",
        purpose: "Personal Loan",
        amount: 200000,
        lender: "Bajaj Finance",
      },
    ],
  };
};
