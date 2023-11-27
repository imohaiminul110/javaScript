require("dotenv").config()
const express = require("express");
const app  = express();
const da = require("./config/database")
const router = require("./routes/routes")
const cors = require("cors")

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/', router)

module.exports = app;