const route = require("express").Router()
const {
    getImgFiles, getImgFile, postImgFile, putImgFile, deleteImgFile
} = require("../controllers/imgFileController")

route.get("/", getImgFiles)
route.get("/:id", getImgFile)
route.get("/", postImgFile)
route.get("/:id", putImgFile)
route.get("/:id", deleteImgFile)

module.exports = route
