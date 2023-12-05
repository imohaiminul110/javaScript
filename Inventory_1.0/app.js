require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//const mongoose = require("mongoose");
const db = require("./config/database")



const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const transactionRouter = require('./routes/transactionRouter');
const categoryRouter = require('./routes/categoryRouter');
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');


app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/transactions', transactionRouter);
app.use('/categories', categoryRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);



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