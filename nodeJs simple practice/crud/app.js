require("dotenv").config()
const express = require("express");
const app  = express();
const da = require("./config/database")
const router = require("./routes/routes")
const cors = require("cors")
const ejs = require("ejs")
const multer = require("multer");

app.set("view engine", "ejs")
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('uploads'))

app.use('/', router)

module.exports = app;