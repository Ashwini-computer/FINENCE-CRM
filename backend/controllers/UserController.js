// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const cibilkycs = require("../models/cibilkycs");

// const JWT_SECRET = process.env.JWT_SECRET;
// const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

// // POST /api/form - Submit form and create user if not existing
// exports.submitForm = async (req, res) => {
//   try {
//     const { email, phone } = req.body;

//     const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists." });
//     }

//     const data = new User(req.body);
//     const savedData = await data.save();

//     const token = jwt.sign({ id: savedData._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

//     res.status(201).json({
//       message: "Form data saved successfully.",
//       id: savedData._id,
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({
//       error: "Failed to save form data.",
//       details: err,
//     });
//   }
// };
 
// // GET /api/form - Get user data (protected)
// exports.getUserForm = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({
//       error: "Failed to fetch form data.",
//       details: err,
//     });
//   }
// };

// // PUT /api/form - Update user data (protected)
// // exports.updateUserForm = async (req, res) => {
// //   try {
// //     const user = await User.findByIdAndUpdate(req.user.id, req.body, {
// //       new: true,
// //       runValidators: true,
// //     });

// //     if (!user) return res.status(404).json({ error: "User not found" });

// //     res.status(200).json({
// //       message: "User data updated successfully",
// //       data: user,
// //     });
// //   } catch (err) {
// //     res.status(500).json({
// //       error: "Failed to update form data.",
// //       details: err,
// //     });
// //   }
// // };

// // Helper function to parse DD-MM-YYYY string to Date object
// function parseDob(dobStr) {
//   if (!dobStr) return null;
//   const parts = dobStr.split("-");
//   if (parts.length !== 3) return null;
//   const [day, month, year] = parts;
//   return new Date(year, month - 1, day);
// }

// exports.updateUserprofile = async (req, res) => {
//   try {
//     const {userId, email, address, employmentType, employerName, monthlyIncome } = req?.body?.updateData;
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       {
//         email,
//         address,
//         employmentType,
//         employerName,
//         monthlyIncome
//       },
//       { new: true, runValidators: true }  
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     res.status(200).json({ success: true, user: updatedUser });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }

// };

// // create user profile first time 

// exports.createProfile = async (req, res) => {
//   const { formData } = req.body;
//   try {
//     if (formData) {
//       return res.status(401).json({ success: false, message: "User Data Not Provoded" })
//     }
//     console.log(formData);
//   } catch (error) {

//   }

// }

// exports.getUserProfile = async (req, res) => {
//   const { id } = req?.params;
//   try {
//     if (!id) {
//       return res.status(401).json({ message: "UserId is not Provided", success: false });
//     }
//     const userprofiledata = await cibilkycs.findOne({ userId:id });
//     if (!userprofiledata) {
//       return res.status(401).json({ message: "User not Found", success: false });
//     }
//     return res.status(200).json({ message: "User Dashboard Data Found Successfully", userprofiledata });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal Server Error", error });
//   }
// }




const User = require('../models/User');


// @desc    Create new user (Admin)
// @route   POST /api/users
// @access  Admin
exports.createUser = async (req, res) => {
  console.log('🔥 POST /api/users HIT', req.body);

  try {
    const {
      name,
      email,
      phone,
      status,
      cibilScore,
      totalApplications,
      approvedAmount
    } = req.body;

    const user = await User.create({
      name,
      email,
      phone,
      status,
      cibilScore,
      totalApplications,
      approvedAmount
    });

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};









// @desc    Get all users with filters
// @route   GET /api/users
// @access  Admin
exports.getAllUsers = async (req, res) => {
  try {
    const { search, status, page = 1, limit = 10, sortBy = 'createdAt', order = 'desc' } = req.query;

    // Build query
    let query = {};

    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    // Status filter
    if (status && status !== 'all') {
      query.status = status;
    }

    // Execute query with pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sortOrder = order === 'desc' ? -1 : 1;

    const users = await User.find(query)
      .select('-password')
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await User.countDocuments(query);

    res.status(200).json({
      success: true,
      data: users,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalUsers: total,
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message
    });
  }
};

// @desc    Get single user by ID
// @route   GET /api/users/:id
// @access  Admin
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user',
      error: error.message
    });
  }
};

// @desc    Update user status (block/unblock)
// @route   PATCH /api/users/:id/status
// @access  Admin
exports.updateUserStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['verified', 'pending', 'blocked'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: `User ${status} successfully`,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating user status',
      error: error.message
    });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Admin
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting user',
      error: error.message
    });
  }
};

// @desc    Export users to CSV
// @route   GET /api/users/export
// @access  Admin
exports.exportUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');

    // Convert to CSV format
    const csvData = [
      ['Name', 'Email', 'Phone', 'Status', 'CIBIL Score', 'Total Applications', 'Approved Amount', 'Join Date'].join(','),
      ...users.map(user => [
        user.name,
        user.email,
        user.phone,
        user.status,
        user.cibilScore || 'N/A',
        user.totalApplications,
        user.approvedAmount,
        user.createdAt.toLocaleDateString()
      ].join(','))
    ].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=users.csv');
    res.status(200).send(csvData);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error exporting users',
      error: error.message
    });
  }
};

// @desc    Get user statistics
// @route   GET /api/users/stats
// @access  Admin
exports.getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const verifiedUsers = await User.countDocuments({ status: 'verified' });
    const pendingUsers = await User.countDocuments({ status: 'pending' });
    const blockedUsers = await User.countDocuments({ status: 'blocked' });

    res.status(200).json({
      success: true,
      data: {
        total: totalUsers,
        verified: verifiedUsers,
        pending: pendingUsers,
        blocked: blockedUsers
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics',
      error: error.message
    });
  }
};
