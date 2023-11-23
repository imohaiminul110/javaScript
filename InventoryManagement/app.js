require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require("ejs");

const User = require("./models/user.model");
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")



app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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