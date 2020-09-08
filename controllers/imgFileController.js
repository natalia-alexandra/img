const ImgFile = require("../models/imgFileSchema");
const fs = require("fs");

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
exports.postImgFile = async (req, res, next) => {
    try {
        const image = new ImgFile({
            originName: req.file.originalname,
            uploadName: req.file.filename,
            imgPath:  "/uploads/images/"+req.file.filename,
            mimeType: req.file.mimetype
        })
        await image.save()
        res.json({success: true,image: image})
    } catch (err) {
        next(err)
    }
}

// put / update
exports.putImgFile = async (req, res, next) => {
    const { id, filename } = req.params
    // delete old image from upload folder
    const filePath = __dirname + "/../client/public/uploads/images/" + filename

    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`file was deleted`);
    });

    try {
        const image = {
            originName: req.file.originalname,
            uploadName: req.file.filename,
            imgPath: "/uploads/images/" + req.file.filename,
            mimeType: req.file.mimetype
        }

        const updateImg = await ImgFile.findByIdAndUpdate(id, image, { new: true })
        // const updateImg = await ImgFile.update({ _id: id }, image, { new: true })
        await updateImg.save()

        if (!updateImg) throw res.status(404)
        res.json({success: true, image: updateImg})
    } catch (err) {
        next(err)
    }
}

// delete
exports.deleteImgFile = async (req, res, next) => {
    const { id, filename } = req.params
    const filePath = __dirname + "/../client/public/uploads/images/" + filename

    // delete image from database
    try {
        const image = await ImgFile.findByIdAndDelete(id)
        if (!image) throw res.status(404)
         // delete image from folder
         fs.unlink(filePath, (err) => {
            if (err) throw err;
            console.log(`file was deleted`);
         });
        res.json({ success: true, image: image })
    } catch (err) {
        next(err)
    }
}
