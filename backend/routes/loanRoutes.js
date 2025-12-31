const express = require('express');
const {
  applyForLoanTransfer,
  getUserLoanTransfers,
  getLoanTransfer,
  updateLoanTransferStatus,
  applyForLoanAgainstCar,
  PersonalLoanApply,
  BussinessLoanApply,
  getPersonalLoanDocuments,
  getBusinessLoanDocuments,
  getHomeLoanDocuments,
  getMortgageLoanDocuments
} = require('../controllers/loanController');

const router = express.Router();

// const { protect, authorize } = require('../middleware/auth');
const { protect, adminOnly} = require('../middleware/auth');

const upload = require('../middleware/upload');
const multiUpload = require('../utils/multiUpload');
const DocsUpload = require('../utils/DocsUpload');

// Set up multer for document uploads
const documentUpload = upload.fields([
  { name: 'documents', maxCount: 10 }
]);

router.post('/transfer', protect, documentUpload, applyForLoanTransfer);
router.get('/transfer/user', protect, getUserLoanTransfers);
router.get('/transfer/:id', protect, getLoanTransfer);
router.put('/transfer/:id/status', protect, adminOnly, updateLoanTransferStatus);
router.post('/against-car', protect, documentUpload, applyForLoanAgainstCar);


router.post('/personal-loan',protect,PersonalLoanApply);
router.post('/bussiness-loan',protect,BussinessLoanApply)

// All routes for document upload

router.post('/personal-loan/upload/docs',DocsUpload("personal"),getPersonalLoanDocuments);
router.post('/business-loan/upload/docs',DocsUpload("business"),getBusinessLoanDocuments);
router.post('/home-loan/upload/docs',DocsUpload("home"),getHomeLoanDocuments);
router.post('/mortgage-loan/upload/docs',DocsUpload("mortgage"),getMortgageLoanDocuments);

module.exports = router;