const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const twilio = require("twilio");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const { otpStore, generateOtp } = require("../utils/otp");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_WHATAPPS_NUMBER;
// for check user session is expired or not
exports.checkAuth = async (req, res) => {
  try {
    res.status(200).json({ authenticated: true, user: req.user }); // user session check in protect middleware here just we return authenticate or not
  } catch (error) {
    console.log(error);
  }
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Create user
    const user = await User.create({
      name,
      email,
      mobile,
      password,
    });

    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return next(
        new ErrorResponse("Please provide an email and password", 400)
      );
    }

    // Check for user
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update user details
// @route   PUT /api/auth/updatedetails
// @access  Private
exports.updateDetails = async (req, res, next) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
    };

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update password
// @route   PUT /api/auth/updatepassword
// @access  Private
exports.updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("+password");

    // Check current password
    if (!(await user.matchPassword(req.body.currentPassword))) {
      return next(new ErrorResponse("Password is incorrect", 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc    Logout user / clear cookie
// @route   GET /api/auth/logout
// @access  Private
exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true, // same as when it was set
    sameSite: "strict", // important if you had this while setting the cookie
  });

  res.status(200).json({ success: true, message: "Logged out successfully" });
};

// Helper function to get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).json({
    success: true,
    token,
  });
};

exports.googleAuth = async (req, res) => {
  console.log("hiii");
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload(); // name, email, picture, etc.
    res.json({ success: true, user: payload });
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

exports.sendOtp = async (req, res) => {
  try {
    const { mobile, method = "sms" } = req.body;

    if (!mobile) {
      return res
        .status(400)
        .json({ success: false, message: "Mobile number is required." });
    }

    // Validate mobile number format
    if (!/^\+?[1-9]\d{7,14}$/.test(mobile)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid mobile number format." });
    }
    await twilioClient.verify.v2
      .services(process.env.TWILIO_SERVICE_SID)
      .verifications.create({ to: `${mobile}`, channel: `${method}` });
    res.status(200).json({ success: true });

    //   // Generate OTP
    //   const otp = generateOtp();
    //   otpStore[mobile] = otp;

    //   const messageBody = `${otp} is your verification code. For your security, do not share this code.`;

    //   // Send OTP via WhatsApp
    //   if (method === "whatsapp") {
    //     if (!TWILIO_WHATSAPP_NUMBER) {
    //       return res.status(500).json({ success: false, message: 'Twilio WhatsApp number is not configured properly.' });
    //     }

    //     // Send WhatsApp message
    //     const response = await twilioClient.messages.create({
    //       body: messageBody,
    //       from: `whatsapp:${TWILIO_WHATSAPP_NUMBER}`,
    //       to: `whatsapp:${mobile}`,
    //     });

    //     console.log("WhatsApp OTP sent:", response.sid);
    //   }
    //   // Send OTP via Call (Voice)
    //   else if (method === "call") {
    //     if (!TWILIO_PHONE_NUMBER) {
    //       return res.status(500).json({ success: false, message: 'Twilio phone number is not configured properly.' });
    //     }

    //     // Create TwiML response to send via voice call
    //     const twimlResponse = `<Response><Say>Your verification code is ${otp}. Please do not share it with anyone for security purposes.</Say></Response>`;

    //     // Make the call and provide the TwiML response
    //     const call = await twilioClient.calls.create({
    //       twiml: twimlResponse,
    //       from: TWILIO_PHONE_NUMBER,
    //       to: mobile,
    //     });

    //     console.log("Voice OTP call sent:", call.sid);
    //   }
    //   // Send OTP via SMS
    //   else {
    //     await twilioClient.messages.create({
    //       body: messageBody,
    //       from: TWILIO_PHONE_NUMBER,
    //       to: mobile,
    //     });
    //   }

    //   console.log(`OTP ${otp} sent to ${mobile} via ${method}`);
    //   res.json({ success: true, message: `OTP sent via ${method}.` });
  } catch (error) {
    console.log("some error", error);
    console.error("Error sending OTP:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please try again.",
    });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { mobile, otp, userinfo } = req.body;
    console.log(mobile, otp, userinfo);

    console.log("userinfo", userinfo);

    if (!mobile || !otp) {
      return res.status(400).json({
        success: false,
        message: "Mobile number and OTP are required.",
      });
    }

    // Check if user exists
    const result = await twilioClient.verify.v2
      .services(process.env.TWILIO_SERVICE_SID)
      .verificationChecks.create({ to: `${mobile}`, code: otp });

    if (result.status === "approved") {
      let user = await User.findOne({ mobile });

      if (!user) {
        user = await User.create({
          mobile,
          email: userinfo?.email,
          name: userinfo?.name,
          picture: userinfo?.picture,
        });
      }

      console.log("user already exist user=>", user);

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 40 * 60 * 1000, // 40 minutes
        })
        .json({ success: true });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error.message);
    res.status(500).json({ success: false, message: "Failed to verify OTP." });
  }
};
