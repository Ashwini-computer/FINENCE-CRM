const ErrorResponse = require('../utils/errorResponse');
const VideoKyc = require('../models/VideoKyc');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const sendSMS = require('../utils/sendSMS');

// @desc    Schedule video KYC session
// @route   POST /api/kyc/video/schedule
// @access  Private
exports.scheduleVideoKyc = async (req, res, next) => {
  try {
    const { scheduledTime } = req.body;

    const videoKyc = await VideoKyc.create({
      userId: req.user.id,
      sessionId: `VKS${Date.now()}${Math.floor(Math.random() * 1000)}`,
      scheduledTime: new Date(scheduledTime)
    });

    // Send notification
    const user = await User.findById(req.user.id);
    const emailMessage = `Your video KYC session has been scheduled for ${new Date(scheduledTime).toLocaleString()}. Session ID: ${videoKyc.sessionId}`;

    await sendEmail({
      email: user.email,
      subject: 'Video KYC Session Scheduled',
      message: emailMessage,
      html: generateWelcomeEmail
    });

    await sendSMS({
      mobile: user.mobile,
      message: `Your video KYC session is scheduled for ${new Date(scheduledTime).toLocaleString()}. ID: ${videoKyc.sessionId}`
    });

    res.status(201).json({
      success: true,
      data: videoKyc
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Complete video KYC verification
// @route   PUT /api/kyc/video/:sessionId/verify
// @access  Private/Admin
exports.verifyVideoKyc = async (req, res, next) => {
  try {
    const { verificationData, remarks } = req.body;

    const videoKyc = await VideoKyc.findOne({ sessionId: req.params.sessionId });

    if (!videoKyc) {
      return next(new ErrorResponse('Video KYC session not found', 404));
    }

    videoKyc.status = 'completed';
    videoKyc.verificationData = verificationData;
    videoKyc.remarks = remarks;
    videoKyc.verifiedBy = req.user.id;
    videoKyc.updatedAt = Date.now();

    await videoKyc.save();

    // Update user's KYC status
    await User.findByIdAndUpdate(videoKyc.userId, { kycCompleted: true });

    res.status(200).json({
      success: true,
      data: videoKyc
    });
  } catch (err) {
    next(err);
  }
};