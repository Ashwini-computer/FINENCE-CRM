const ErrorResponse = require('../utils/errorResponse');
const Partner = require('../models/Partner');

// @desc    Get all partners
// @route   GET /api/partners
// @access  Public
exports.getPartners = async (req, res, next) => {
  try {
    const partners = await Partner.find({ isActive: true }).select('-apiKey -apiEndpoint');
    
    res.status(200).json({
      success: true,
      count: partners.length,
      data: partners
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single partner
// @route   GET /api/partners/:id
// @access  Public
exports.getPartner = async (req, res, next) => {
  try {
    const partner = await Partner.findById(req.params.id).select('-apiKey -apiEndpoint');
    
    if (!partner) {
      return next(new ErrorResponse(`Partner not found with id of ${req.params.id}`, 404));
    }
    
    res.status(200).json({
      success: true,
      data: partner
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new partner
// @route   POST /api/partners
// @access  Private/Admin
exports.createPartner = async (req, res, next) => {
  try {
    const partner = await Partner.create(req.body);
    
    res.status(201).json({
      success: true,
      data: partner
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update partner
// @route   PUT /api/partners/:id
// @access  Private/Admin
exports.updatePartner = async (req, res, next) => {
  try {
    let partner = await Partner.findById(req.params.id);
    
    if (!partner) {
      return next(new ErrorResponse(`Partner not found with id of ${req.params.id}`, 404));
    }
    
    partner = await Partner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: partner
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete partner
// @route   DELETE /api/partners/:id
// @access  Private/Admin
exports.deletePartner = async (req, res, next) => {
  try {
    const partner = await Partner.findById(req.params.id);
    
    if (!partner) {
      return next(new ErrorResponse(`Partner not found with id of ${req.params.id}`, 404));
    }
    
    await partner.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get partners by type
// @route   GET /api/partners/type/:type
// @access  Public
exports.getPartnersByType = async (req, res, next) => {
  try {
    const partners = await Partner.find({ 
      type: req.params.type,
      isActive: true 
    }).select('-apiKey -apiEndpoint');
    
    res.status(200).json({
      success: true,
      count: partners.length,
      data: partners
    });
  } catch (err) {
    next(err);
  }
};