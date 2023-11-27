const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    email: {
        type: String,
        require : true,
    },
    image: {
        type : String,
        require : true,

    },
    created : {
        type: Date,
        require : true,
        default : Date.now
    }
})

const User = mongoose.model("user", userSchema);
module.exports = User;