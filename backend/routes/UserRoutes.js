// const express = require("express");
// const router = express.Router();

// const userController = require("../controllers/UserController");
// const auth = require("../middlewares/authMiddleware");

// // POST: Add user form data
// router.post("/add-user", userController.submitForm);

// // GET: Get user data (requires valid JWT in Authorization header)
// router.get("/get-user", auth, userController.getUserForm);

// // PUT: Update user data (requires valid JWT in Authorization header)
// // router.put("/update-user", auth, userController.updateUserForm);

// router.put("/updateprofile", userController.updateUserprofile);

// router.post("/createprofile",userController.createProfile);
// router.get("/getprofile/:id",userController.getUserProfile);



// module.exports = router;



const express = require('express');
const router = express.Router();
console.log('✅ userRoute loaded');

const {
  getAllUsers,
  getUserById,
  updateUserStatus,
  deleteUser,
  exportUsers,
  getUserStats,
   createUser 
} = require('../controllers/UserController');

// Middleware (you should create these)
const { protect, adminOnly } = require('../middleware/auth');

// Apply authentication middleware to all routes
// router.use(protect);
// router.use(adminOnly);

// Stats route (place before :id routes)
router.get('/stats', getUserStats);

// Export route
router.get('/export', exportUsers);

// Main CRUD routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.patch('/:id/status', updateUserStatus);
router.delete('/:id', deleteUser);
router.post('/', createUser);

module.exports = router;