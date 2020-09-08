const multer = require("multer")

const uploadPath = __dirname + "/../client/public/uploads/images"

const upload = multer({
    dest: uploadPath
})

const imgFileUpload = upload.single(("img-upload"))

module.exports = imgFileUpload
