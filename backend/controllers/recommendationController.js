const ErrorResponse = require('../utils/errorResponse');
const ProductRecommendation = require('../models/ProductRecommendation');
const Product = require('../models/Product');
const Kyc = require('../models/Kyc');

// @desc    Generate AI-powered recommendations
// @route   POST /api/recommendations/generate
// @access  Private
exports.generateRecommendations = async (req, res, next) => {
  try {
    const kyc = await Kyc.findOne({ userId: req.user.id });
    
    if (!kyc || !kyc.cibilScore) {
      return next(new ErrorResponse('Please complete KYC and credit check first', 400));
    }

    // Get all active products
    const products = await Product.find({ isActive: true });

    // AI-based scoring (mock implementation)
    const recommendations = products.map(product => ({
      productId: product._id,
      score: calculateProductScore(product, kyc),
      reason: getRecommendationReason(product, kyc),
      isPersonalized: true
    }));

    // Sort by score
    recommendations.sort((a, b) => b.score - a.score);

    // Save recommendations
    let recommendation = await ProductRecommendation.findOne({ userId: req.user.id });

    if (recommendation) {
      recommendation.recommendations = recommendations;
      recommendation.userProfile = {
        cibilScore: kyc.cibilScore,
        income: kyc.income,
        employmentType: kyc.employmentType
      };
      recommendation.lastUpdated = Date.now();
      await recommendation.save();
    } else {
      recommendation = await ProductRecommendation.create({
        userId: req.user.id,
        recommendations,
        userProfile: {
          cibilScore: kyc.cibilScore,
          income: kyc.income,
          employmentType: kyc.employmentType
        }
      });
    }

    await recommendation.populate('recommendations.productId');

    res.status(200).json({
      success: true,
      data: recommendation
    });
  } catch (err) {
    next(err);
  }
};

// Helper function to calculate product score
const calculateProductScore = (product, kyc) => {
  let score = 0;

  // Basic eligibility
  if (kyc.cibilScore >= product.minCibilScore) {
    score += 50;
  }

  // Score based on CIBIL score margin
  const cibilMargin = kyc.cibilScore - product.minCibilScore;
  if (cibilMargin > 100) score += 30;
  else if (cibilMargin > 50) score += 20;
  else if (cibilMargin > 0) score += 10;

  // Add random factor for demo
  score += Math.random() * 20;

  return Math.min(100, score);
};

// Helper function to generate recommendation reason
const getRecommendationReason = (product, kyc) => {
  if (kyc.cibilScore >= product.minCibilScore + 100) {
    return 'Excellent credit score match';
  } else if (kyc.cibilScore >= product.minCibilScore + 50) {
    return 'Good credit score match';
  } else if (kyc.cibilScore >= product.minCibilScore) {
    return 'Meets minimum requirements';
  }
  return 'Credit score improvement needed';
};