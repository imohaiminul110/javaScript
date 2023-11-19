const express = require("express")
const cors = require("cors")
const ejs = require("ejs")
const app = express();
require("./config/database")
require("./config/passport")
require("dotenv").config();
const User= require("./models/user.model")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const passport = require("passport");
const session = require("express-session")
const MongoStore = require("connect-mongo")

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  Store: MongoStore.create({
    mongoUrl:  process.env.MONGO_URL,
    collectionName: "sessions",
  })
 // cookie: { secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())


//base url 
app.get("/", (req, res)=>
{
    res.render("index")
})

// register get

app.get("/register", (req, res)=>
{
    res.render("register")
})

//register post
app.post("/register", async (req, res)=>
{
    console.log("1")
    try{
        console.log("2");
        const user = await User.findOne({username: req.body.username})
        console.log("3")
        if(user) return res.status(400).send("user existes")
        console.log("4")
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            const newUser = new User ({
                username : req.body.username,
                password : hash
            });
        console.log("5")
        await newUser.save();
        res.status(201).redirect("/login")
        });
        
    } catch(error) {
        res.status(500).send(error.message);
    }
})


// login get

app.get("/login", (req, res)=>
{
    res.render("login")
})

//login post
app.post('/login', 
  passport.authenticate('local', { 
    failureRedirect: '/login',
    successsRedirect: "/profile" })
 
  )
  



//profile protected route
app.get("/profile", (req, res)=>
{
    res.render("profile")
})

// logout 
app.get("/logout", (req, res)=>
{
    res.redirect("/")
})


module.exports = app;