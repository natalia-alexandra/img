const route = require("express").Router()
const {getImgFiles, getImgFile, postImgFile, putImgFile, deleteImgFile} = require("../controllers/imgFileController")
const imgFileUpload = require("../middleware/imgFileUpload")

route.get("/", getImgFiles)
route.get("/:id", getImgFile)
route.post("/upload", imgFileUpload, postImgFile)
route.put("/:id/:filename", imgFileUpload, putImgFile)
route.delete("/:id/:filename", deleteImgFile)

module.exports = route
