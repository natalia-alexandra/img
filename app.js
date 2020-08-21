const express = require("express")
const mongoose = require("mongoose")
const {cors} = require("./middleware/cors")
const indexRoute = require("./routes/indexRoute")
const imgFileRoute = require("./routes/imgFileRoute")

const app = express()

// database
mongoose.connect("mongodb://localhost:27017/files-db", {
    userNewUrlParser: true,
    userCreateIndex: true,
    userUnifiedTopology: true
})
mongoose.connection.on("error", (err) => console.log(err))
mongoose.connection.on("open", () => console.log("database connected"))

// middleware
app.use(express.json()) // parse body
app.use(cors)

// routes
app.use("/", indexRoute)
app.use("/images", imgFileRoute)

// server listen
const port = 5000
app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})
