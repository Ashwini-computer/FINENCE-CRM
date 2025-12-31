const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary')

const getMulterUploads=(foldername)=>{

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: foldername, // optional folder name
        allowed_formats: ["jpg", "png", "pdf", "jpeg"],
        // transformation: [{ width: 1000, height: 1000, crop: "limit" }],
    },
})

return multer({ storage });
}
module.exports = getMulterUploads;
