const express = require('express');
const {
  generateRecommendations
} = require('../controllers/recommendationController');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.post('/generate', protect, generateRecommendations);

module.exports = router;