require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const ejs = require("ejs");

const User = require("./models/user.model");

const saltRounds = 10;
require("./config/database");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require("./config/passport");


// product route
app.use('/product', productRouter) 

// Home, login, register route

app.use('/', userRouter)

// Not available route

app.use((req, res, next) => {
    res.send("Route not found");
});

// Server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.send("Server error");
});

module.exports = app;