const express = require ("express");
const mongoose = require ("mongoose");

const app = express();
const port = 3000;

//create product schema

// const productsSchema = new mongoose.Schema({
//     title : String,
//     price: Number,
//     description : String
// })

// // create product model

// const product = mongoose.model("")


//connect with mongoose database

const connectDB = async() =>
{
    try
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/books')
        console.log("db connected")
    }
    catch (error)
    {
        console.log("db not connected")
        console.log(error.message)
        process.exit(1)
    }
}




app.listen(port, async() =>
    {
        console.log("server running");
        await connectDB()
    })

app.get("/", (req, res)=>
    {
        res.send("srfg")
    })
