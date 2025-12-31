// const express = require('express');
// const {
//   createApplication,
//   getUserApplications,
//   getApplication,
//   updateApplicationStatus,
//   getAllApplications
// } = require('../controllers/applicationController');

// const router = express.Router();

// const { protect, authorize } = require('../middleware/auth');
// const upload = require('../middleware/upload');

// // Set up multer for document uploads
// const documentUpload = upload.fields([
//   { name: 'documents', maxCount: 10 }
// ]);

// router.route('/')
//   .post(protect, documentUpload, createApplication);

// router.get('/user', protect, getUserApplications);
// router.get('/admin', protect, authorize('admin'), getAllApplications);

// router.route('/:id')
//   .get(protect, getApplication);

// router.put('/:id/status', protect, authorize('admin'), updateApplicationStatus);

// module.exports = router;




const express = require("express");
const {
  createApplication,
  getUserApplications,
  getApplication,
  updateApplicationStatus,
  getAllApplications,
} = require("../controllers/applicationController");


console.log("DEBUG CONTROLLERS:", {
  getUserApplications,
  getAllApplications,
  getApplication,
});

const { protect, authorize } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// router.post("/", protect, upload.any(), createApplication);
// router.get("/user", protect, getUserApplications);
// router.get("/admin", protect, authorize("admin"), getAllApplications);
// router.get("/:id", protect, getApplication);
// router.put("/:id/status", protect, authorize("admin"), updateApplicationStatus);



// Create application
router.post("/", upload.any(), createApplication);

// Get user applications (now open)
router.get("/user", getUserApplications);

// Get all applications (admin check removed)
router.get("/admin", getAllApplications);

// Get single application
// router.get("/:id", getApplication);

// Update status (admin check removed)
// router.put("/:id/status", updateApplicationStatus);




module.exports = router;
