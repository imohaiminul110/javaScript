const express = require("express")
const productRouter = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const ejs = require("ejs");

const User = require("../models/user.model");


const saltRounds = 10;
require("../config/database");

// app.set("view engine", "ejs");
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(passport.initialize());

require("../config/passport");

console.log("product router : 1");

productRouter.get('/', (req,res)=>{
    //res.send("abc")
    res.send("abc")
    console.log("object");
})


module.exports = productRouter;