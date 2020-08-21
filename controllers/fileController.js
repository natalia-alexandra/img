const ImgFile = require("../models/imgFileSchema")

// get / read
// get all images
exports.getImgFiles = async(req, res, next) => {
    try {
        const images = await ImgFile.find()
        res.json({success: true, images: images})
    }
    catch (err) {
        next(err)
    }
}

// get an image
exports.getImgFile = async (req, res, next) => {
    const {id} = req.params
    try {
        const image = await ImgFile.findById(id)
        if (!image) throw res.status(404)
        res.json({success: true,image: image})
    } catch (err) {
        next(err)
    }
}

// post / create
exports.postImgFile = async(req, res, next) => {
    try {
        const image = new ImgFile(req.body)
        await image.save()
        res.json({success: true,image: image})
    } catch (err) {
        next(err)
    }
}

// put / update
exports.putImgFile = async (req, res, next) => {
    const { id } = req.params
    const image = req.body
    try {
        const updateImg = await ImgFile.findByIdAndUpdate(id, image, {new:true})
        if (!image) throw res.status(404)
        res.json({success: true, image: updateImg})
    } catch (err) {
        next(err)
    }
}

// delete
exports.deleteImgFile = async (req, res, next) => {
    const {id} = req.params
    try {
        const image = await ImgFile.findByIdAndDelete(id)
        if (!image) throw res.status(404)
        res.json({ success: true, image: image })
    } catch (err) {
        next(err)
    }
}
