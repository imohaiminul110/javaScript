const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017/Login")

//check database connection

connect.then(()=>
{
    console.log("database connected")
})
.catch(()=>
{
    console.log("database fucked")
})

//create schema

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})


//collection part

const collection = new mongoose.model("Users", LoginSchema)

module.exports= collection;