require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require("./models/user.model");
const { redirect } = require("statuses");
const saltRounds = 10;
require("./config/database")


app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(passport.initialize());

require("./config/passport")

//home route

app.get("/", (req,res)=>{
    res.send("welcome home")
})

//register route

app.post("/register", async (req,res)=>{
    const user = await User.findOne({username: req.body.username})
    if(user) return res.send("user exixts")

    bcrypt.hash(req.body.password, saltRounds, async (err, hash)=> {
        const newUser =  new User({
            username : req.body.username,
            password : hash
        })
        await newUser
            .save()
            .then((user)=>{
            res.send({
                success : true,
                message : "user created",
                user: {
                    id : user.id,
                    username : user.username,

                }
            })
        })
        .catch((error)=>{
            res.send("save fail")
        })

    });    
})

//login route

app.post("/login", async (req,res)=>{
   const user = await User.findOne({username: req.body.username})
   if(!user){
    return res.send({
        success: false,
        message : "user not found"
    })
   }
   if(!bcrypt.compareSync(req.body.password, user.password)){
    return res.send({
        success : false,
        message : "incorrect password"
    })
   }

   const payload = {
    id : user.id,
    username : user.username,
   }
   const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "2d",
   })
   
 res.redirect("/profile")
//    return res.send({
//     success: true,
//     message : "logged in",
//     token: "Bearer "+token
//    })
})

//profile protected route

app.get('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        return res.send({
            success: true,
            user: {
                id: req.user._id,
                username : req.user.username,
            }
           })
      
    }
);

// not available route

app.use((req,res,next)=>{
    res.send("route not found")
})

//server error

app.use((err, req, res, next)=>{
    res.send("server error")
})





module.exports = app;