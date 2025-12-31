const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
} = require('../controllers/productController');

const router = express.Router();

// const { protect, authorize } = require('../middleware/auth');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getProducts)
  .post(protect, adminOnly, createProduct);

router.route('/:id')
  .get(getProduct)
  .put(protect, adminOnly, updateProduct)
  .delete(protect, adminOnly, deleteProduct);

router.get('/category/:category', getProductsByCategory);

module.exports = router;