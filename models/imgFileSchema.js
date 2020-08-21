const mongoose = require("mongoose")
const { Schema } = mongoose

const ImgFileSchema = new Schema({
    title: { type: String, required: true },
    cover: { type: String },
    alt: { type: String },
    imgPath: { type: String },
    imgType: { type: String },
    likes: { type: Number, default: 0 },
    uploadOn: {type: Date,default: Date.now}
})

module.exports = mongoose.model("ImgFile", ImgFileSchema)
