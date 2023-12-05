const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/imageTest")
.then(() => 
{
    console.log("db connected")
})
.catch(()=>
{
console.log("db fucked");
})
