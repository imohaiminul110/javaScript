require("dotenv").config();
const mongoose = require("mongoose");
console.log("1");

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("db is connected");
})
.catch((error)=>
{
    console.log(error.message);
})