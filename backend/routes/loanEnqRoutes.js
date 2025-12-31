// loan enquiry routes

const { Router } = require("express");
const { PersonalLoanEnq, BussinessLoanenq } = require("../controllers/loanEnquiryControllers");
const router=Router();

router.post('/personal-loan',PersonalLoanEnq);
router.post('/bussiness-loan',BussinessLoanenq)

module.exports=router;