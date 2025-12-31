const express = require('express');
const {
  createPaymentIntent,
  confirmPayment,
  downloadReport,
  createPaymentOrder,
  verifyPaymentOrder
} = require('../controllers/paymentController');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.post('/create-intent', protect, createPaymentIntent);
router.post('/confirm/:paymentId', protect, confirmPayment);
router.get('/report/:reportId', protect, downloadReport);
router.post('/create-order',protect,createPaymentOrder);
router.post('/verify-order',protect,verifyPaymentOrder)

module.exports = router;