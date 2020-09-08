const mongoose = require("mongoose")
const { Schema } = mongoose

const ImgFileSchema = new Schema({
    originName: { type: String },
    uploadName: {type: String},
    imgPath: {type: String},
    // alt: { type: String },
    mimeType: { type: String },
    likes: { type: Number, default: 0 },
    uploadOn: {type: Date,default: Date.now}
})

module.exports = mongoose.model("ImgFile", ImgFileSchema)
