const express = require('express');
const {
  getOffers,
  getOffer,
  createOffer,
  updateOffer,
  deleteOffer,
  getPersonalizedOffers
} = require('../controllers/offerController');

const router = express.Router();

// const { protect, authorize } = require('../middleware/auth');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getOffers)
  .post(protect, adminOnly, createOffer);

router.get('/personalized', protect, getPersonalizedOffers);

router.route('/:id')
  .get(getOffer)
  .put(protect, adminOnly, updateOffer)
  .delete(protect, adminOnly, deleteOffer);

module.exports = router;