const loanFieldConfig = require("../config/loanFieldConfig")
const getMulterUploads = require("./multer")

const DocsUpload = (loanType) =>

    getMulterUploads(loanType).fields(loanFieldConfig[loanType]); // for set foldername and set fields as per loan type


module.exports = DocsUpload;