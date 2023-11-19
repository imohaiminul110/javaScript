require("dotenv").config();
//const model = require("../models/user.model")
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("db is connected");
})
.catch((error)=>
{
    console.log(error.message);
})