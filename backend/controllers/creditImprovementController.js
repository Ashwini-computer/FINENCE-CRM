const ErrorResponse = require('../utils/errorResponse');
const CreditImprovement = require('../models/CreditImprovement');
const Kyc = require('../models/Kyc');
const Product = require('../models/Product');

// @desc    Get credit improvement plan for user
// @route   GET /api/credit-improvement/user/:id
// @access  Private
exports.getCreditImprovementPlan = async (req, res, next) => {
  try {
    // Check if user has CIBIL score
    const kyc = await Kyc.findOne({ userId: req.user.id });
    
    if (!kyc || !kyc.cibilScore) {
      return next(new ErrorResponse('Please check your CIBIL score first', 400));
    }
    
    // Get or create improvement plan
    let improvement = await CreditImprovement.findOne({ userId: req.user.id });
    
    if (!improvement) {
      // Generate suggestions based on credit score
      const cibilScore = kyc.cibilScore;
      const suggestions = [];
      
      if (cibilScore < 750) {
        suggestions.push({
          title: 'Pay bills on time',
          description: 'Set up automatic payments or reminders to ensure you pay all your bills on time.',
          priority: 'high'
        });
        
        suggestions.push({
          title: 'Reduce credit utilization',
          description: 'Try to keep your credit card balances below 30% of your credit limit.',
          priority: 'high'
        });
      }
      
      if (cibilScore < 700) {
        suggestions.push({
          title: 'Clear outstanding dues',
          description: 'Pay off any pending bills or dues to improve your credit score.',
          priority: 'high'
        });
        
        suggestions.push({
          title: 'Avoid multiple loan applications',
          description: 'Multiple loan applications in a short period can negatively impact your score.',
          priority: 'medium'
        });
      }
      
      suggestions.push({
        title: 'Monitor your credit report regularly',
        description: 'Check your credit report periodically to ensure it is accurate and up-to-date.',
        priority: 'medium'
      });
      
      suggestions.push({
        title: 'Maintain a good credit mix',
        description: 'Having a mix of secured and unsecured loans can positively impact your score.',
        priority: 'low'
      });
      
      // Find recommended products based on CIBIL score
      const recommendedProducts = await Product.find({
        minCibilScore: { $lte: cibilScore },
        isActive: true
      }).limit(5).select('_id');
      
      // Create improvement plan
      improvement = await CreditImprovement.create({
        userId: req.user.id,
        currentScore: cibilScore,
        targetScore: Math.min(850, cibilScore + 100),
        suggestions,
        recommendedProducts: recommendedProducts.map(p => p._id),
        plan: {
          startDate: Date.now(),
          endDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000) // 6 months plan
        }
      });
    }
    
    // Populate recommended products
    await improvement.populate('recommendedProducts');
    
    res.status(200).json({
      success: true,
      data: improvement
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update suggestion status
// @route   PUT /api/credit-improvement/suggestion/:id
// @access  Private
exports.updateSuggestionStatus = async (req, res, next) => {
  try {
    const { suggestionId, completed } = req.body;
    
    const improvement = await CreditImprovement.findOne({ userId: req.user.id });
    
    if (!improvement) {
      return next(new ErrorResponse('Credit improvement plan not found', 404));
    }
    
    // Find and update the suggestion
    const suggestion = improvement.suggestions.id(suggestionId);
    
    if (!suggestion) {
      return next(new ErrorResponse('Suggestion not found', 404));
    }
    
    suggestion.completed = completed;
    improvement.updatedAt = Date.now();
    
    await improvement.save();
    
    res.status(200).json({
      success: true,
      data: improvement
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update credit score
// @route   PUT /api/credit-improvement/score
// @access  Private
exports.updateCreditScore = async (req, res, next) => {
  try {
    const { score } = req.body;
    
    if (!score || score < 300 || score > 850) {
      return next(new ErrorResponse('Please provide a valid CIBIL score between 300 and 850', 400));
    }
    
    // Update KYC CIBIL score
    const kyc = await Kyc.findOne({ userId: req.user.id });
    
    if (!kyc) {
      return next(new ErrorResponse('KYC not found', 404));
    }
    
    const previousScore = kyc.cibilScore;
    kyc.cibilScore = score;
    await kyc.save();
    
    // Update credit improvement plan
    let improvement = await CreditImprovement.findOne({ userId: req.user.id });
    
    if (!improvement) {
      return next(new ErrorResponse('Credit improvement plan not found', 404));
    }
    
    // Add to monthly tracking
    improvement.monthlyTracking.push({
      date: Date.now(),
      score,
      change: score - previousScore
    });
    
    improvement.currentScore = score;
    improvement.updatedAt = Date.now();
    
    await improvement.save();
    
    res.status(200).json({
      success: true,
      data: improvement
    });
  } catch (err) {
    next(err);
  }
};