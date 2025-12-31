const express = require('express');
const {
  getCreditImprovementPlan,
  updateSuggestionStatus,
  updateCreditScore
} = require('../controllers/creditImprovementController');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.get('/user/:id', protect, getCreditImprovementPlan);
router.put('/suggestion/:id', protect, updateSuggestionStatus);
router.put('/score', protect, updateCreditScore);

module.exports = router;