function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// In-memory storage (use Redis or DB in production)
const otpStore = {};

module.exports = {
    generateOtp,
    otpStore
};
