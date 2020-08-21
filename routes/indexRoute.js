const route = require("express").Router()
const { indexController } = require("../controllers/indexController")

route.get("/", indexController)

module.exports = route
