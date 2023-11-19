const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique: true,
    },
    password : {
        type : String,
        require : true,
    },
})

//model

const User = mongoose.model("Users",userSchema);
module.exports = User;
