const ErrorResponse = require('../utils/errorResponse');
const Offer = require('../models/Offer');
const Kyc = require('../models/Kyc');

// @desc    Get all offers
// @route   GET /api/offers
// @access  Public
exports.getOffers = async (req, res, next) => {
  try {
    // Get current date
    const currentDate = new Date();
    
    // Find active offers that haven't expired
    const offers = await Offer.find({
      isActive: true,
      startDate: { $lte: currentDate },
      expiryDate: { $gte: currentDate }
    }).populate('partnerId', 'name logo');
    
    res.status(200).json({
      success: true,
      count: offers.length,
      data: offers
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get personalized offers for user
// @route   GET /api/offers/personalized
// @access  Private
exports.getPersonalizedOffers = async (req, res, next) => {
  try {
    // Get current date
    const currentDate = new Date();
    
    // Get user's KYC and CIBIL score
    const kyc = await Kyc.findOne({ userId: req.user.id });
    
    if (!kyc || !kyc.cibilScore) {
      return next(new ErrorResponse('Please complete KYC and check CIBIL score first', 400));
    }
    
    const cibilScore = kyc.cibilScore;
    
    // Find active offers that match user's profile
    const offers = await Offer.find({
      isActive: true,
      startDate: { $lte: currentDate },
      expiryDate: { $gte: currentDate },
      $or: [
        { 'userTargeting.minCibilScore': { $lte: cibilScore } },
        { 'userTargeting.minCibilScore': { $exists: false } }
      ],
      $or: [
        { 'userTargeting.maxCibilScore': { $gte: cibilScore } },
        { 'userTargeting.maxCibilScore': { $exists: false } }
      ],
      $or: [
        { 'userTargeting.location': kyc.state },
        { 'userTargeting.location': { $exists: false } }
      ]
    }).populate('partnerId', 'name logo').populate('applicableProducts');
    
    res.status(200).json({
      success: true,
      count: offers.length,
      data: offers
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single offer
// @route   GET /api/offers/:id
// @access  Public
exports.getOffer = async (req, res, next) => {
  try {
    const offer = await Offer.findById(req.params.id)
      .populate('partnerId', 'name logo')
      .populate('applicableProducts');
    
    if (!offer) {
      return next(new ErrorResponse(`Offer not found with id of ${req.params.id}`, 404));
    }
    
    res.status(200).json({
      success: true,
      data: offer
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new offer
// @route   POST /api/offers
// @access  Private/Admin
exports.createOffer = async (req, res, next) => {
  try {
    const offer = await Offer.create(req.body);
    
    res.status(201).json({
      success: true,
      data: offer
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update offer
// @route   PUT /api/offers/:id
// @access  Private/Admin
exports.updateOffer = async (req, res, next) => {
  try {
    let offer = await Offer.findById(req.params.id);
    
    if (!offer) {
      return next(new ErrorResponse(`Offer not found with id of ${req.params.id}`, 404));
    }
    
    offer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: offer
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete offer
// @route   DELETE /api/offers/:id
// @access  Private/Admin
exports.deleteOffer = async (req, res, next) => {
  try {
    const offer = await Offer.findById(req.params.id);
    
    if (!offer) {
      return next(new ErrorResponse(`Offer not found with id of ${req.params.id}`, 404));
    }
    
    await offer.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};