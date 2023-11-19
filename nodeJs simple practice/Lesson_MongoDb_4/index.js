const express = require("express")
const mongoose = require("mongoose")
const app = express();
const port = 3000;

const proScema = new mongoose.Schema({
    title: String,
})

const product = mongoose.model("products", proScema)


mongoose.connect("mongodb://localhost:27017/test2")
.then(()=>
{
    console.log("db connected")
})
.catch(()=>
{
    console.log("db facked");
})
app.listen(port, ()=>
{
    console.log("server on");
})