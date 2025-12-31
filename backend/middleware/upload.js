const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const ErrorResponse = require('../utils/errorResponse');

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: process.env.MAX_FILE_SIZE || 5000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|pdf/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new ErrorResponse('Error: Invalid file type! Only JPEG, PNG, and PDF allowed.', 400));
  }
}

module.exports = upload;