const twilio = require('twilio');
const { generateOtp, otpStore } = require('../utils/otp');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Initialize Twilio client with your Twilio SID and Auth Token
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_WHATAPPS_NUMBER;

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

// Send OTP Function
exports.sendOtp = async (req, res) => {
    try {
        const { mobile, method = "sms" } = req.body;

        if (!mobile) {
            return res.status(400).json({ success: false, message: 'Mobile number is required.' });
        }

        // Validate mobile number format
        if (!/^\+?[1-9]\d{7,14}$/.test(mobile)) {
            return res.status(400).json({ success: false, message: 'Invalid mobile number format.' });
        }

        // Generate OTP
        const otp = generateOtp();
        otpStore[mobile] = otp;

        const messageBody = `${otp} is your verification code. For your security, do not share this code.`;

        // Send OTP via WhatsApp
        if (method === "whatsapp") {
            if (!TWILIO_WHATSAPP_NUMBER) {
                return res.status(500).json({ success: false, message: 'Twilio WhatsApp number is not configured properly.' });
            }

            // Send WhatsApp message
            const response = await twilioClient.messages.create({
                body: messageBody,
                from: `whatsapp:${TWILIO_WHATSAPP_NUMBER}`,
                to: `whatsapp:${mobile}`,
            });

            console.log("WhatsApp OTP sent:", response.sid);
        }
        // Send OTP via Call (Voice)
        else if (method === "call") {
            if (!TWILIO_PHONE_NUMBER) {
                return res.status(500).json({ success: false, message: 'Twilio phone number is not configured properly.' });
            }

            // Create TwiML response to send via voice call
            const twimlResponse = `<Response><Say>Your verification code is ${otp}. Please do not share it with anyone for security purposes.</Say></Response>`;

            // Make the call and provide the TwiML response
            const call = await twilioClient.calls.create({
                twiml: twimlResponse,
                from: TWILIO_PHONE_NUMBER,
                to: mobile,
            });

            console.log("Voice OTP call sent:", call.sid);
        }
        // Send OTP via SMS
        else {
            await twilioClient.messages.create({
                body: messageBody,
                from: TWILIO_PHONE_NUMBER,
                to: mobile,
            });
        }

        console.log(`OTP ${otp} sent to ${mobile} via ${method}`);
        res.json({ success: true, message: `OTP sent via ${method}.` });

    } catch (error) {
        console.error('Error sending OTP:', error.message);
        res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
    }
};

// Verify OTP Function
exports.verifyOtp = async (req, res) => {
    try {
        const { mobile, otp } = req.body;

        if (!mobile || !otp) {
            return res.status(400).json({ success: false, message: 'Mobile number and OTP are required.' });
        }

        const storedOtp = otpStore[mobile];
        if (!storedOtp) {
            return res.status(400).json({ success: false, message: 'No OTP sent to this number.' });
        }

        if (storedOtp !== otp) {
            return res.status(400).json({ success: false, message: 'Invalid OTP.' });
        }

        // OTP is valid, now remove it
        delete otpStore[mobile];

        // Check if user exists
        let user = await User.findOne({ mobile });

        // If not, create new user
        if (!user) {
            user = await User.create({ mobile });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, mobile: user.mobile }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });

        return res.json({ success: true, message: 'OTP verified successfully.', token });
    } catch (error) {
        console.error('Error verifying OTP:', error.message);
        res.status(500).json({ success: false, message: 'Failed to verify OTP.' });
    }
};