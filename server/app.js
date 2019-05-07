require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const cors = require("cors")

mongoose.connect("mongodb://localhost/mini-wp", { 
    useNewUrlParser: true,
    useCreateIndex: true
    })
let db = mongoose.connection

db.on("error", console.error.bind(console, "Connection error!"))
db.once("open", function () {
    console.log("mongoose is connected!")
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/index'))

app.listen(port, () => {
    console.log(`server is running at port 3000`)
})

