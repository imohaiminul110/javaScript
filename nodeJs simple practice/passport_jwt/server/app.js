const express = require("express")
const cors =  require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const User = require("./models/user.model")

const app = express();
require("./config/database")
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//home route

app.get("/", (req,res)=>
{
    
    res.send("home")
})

//register route

app.get("/register", async (req,res)=>
{
    const user = await User.findOne({username: req.body.username});
    if(user) 
    return res.send("user exist")

    bcrypt.hash(req.body.password,saltRounds,
        function(err,hash){
                const newUser = new User({  
                username : req.body.username,
                password : req.body.password

        })
    
    })
})

//login route

app.get("/", (req,res)=>
{
    res.send("login")
})


//resource not found

app.use((req, res, next)=>
{
    res.status(404).json({
        message: "route not found"
    })
})

//server error

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })









module.exports = app; 