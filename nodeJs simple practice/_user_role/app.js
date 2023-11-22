require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const passport = require('passport');
const ejs = require("ejs")

const User = require("./models/user.model");

const saltRounds = 10;
require("./config/database")

app.set("view engine", "ejs")
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(passport.initialize());

require("./config/passport")

//home route

app.get("/", (req,res)=>{
    res.render("index")
})

//register route get

app.get("/register", (req,res)=>{
    res.render("register")
})

//register route post

app.post("/register", async (req,res)=>{
    
    const user = await User.findOne({username: req.body.username})
    if(user) return res.send("user exixts")

    bcrypt.hash(req.body.password, saltRounds, async (err, hash)=> {
        const newUser =  new User({
            username : req.body.username,
            password : hash,
            role : req.body.role
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
                    role : user.role

                }
            })
        })
        .catch((error)=>{
            res.send("save fail")
        })

    });    
})

//login route get

app.get("/login", (req,res)=>{
    res.render("login")
})

//login route post

app.post("/login", async (req,res)=>{
   const user = await User.findOne({username: req.body.username})
   console.log(user);
//    const roleStudent = await User.findOne({name: req.body.username, role: "student"})
//    const roleteacher =await User.findOne({name: req.body.username, role: "teacher"})
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
    role: user.role
   }
   const token = jwt.sign(payload, process.env.SECRET_KEY,
    {
    expiresIn: "2d",
   })
console.log(user);
   // student role
   if (user.role === 'student') {
    res.send({
        success: true,
        message : "Logged in as student",
        token: "Bearer " + token,
        redirect: '/profile/student'
    });
} else if (user.role === 'teacher') {
    //res.redirect ("/profile/teacher")
    res.send({
        success: true,
        message : "Logged in as teacher",
        token: "Bearer " + token,
        redirect: '/profile/teacher'
    });
} else {
    res.send({
        success: false,
        message: "error role"
    });
}
});

//    app.use(isStudent) 
//    app.use(isTeacher) 
   
 //res.redirect("/profile")
//    return res.send({
//     success: true,
//     message : "logged in",
//     token: "Bearer "+token
//    })




// Middleware to check if user is a student
// const isStudent = (req, res, next)=> {
//     if (req.user.role === 'student') {
//         res.send("student")
//     return next();
//     }
//     res.status(403).json({ message: 'Permission Denied: Students only.' });
//   }

  // Middleware to check if user is a teacher
// const isTeacher = (req, res, next) =>{
//     if (req.user.role === 'teacher') {
//         res.send("teacher")
//      return next();
//     }
//    res.status(403).json({ message: 'Permission Denied: Teachers only.' });
//   }

//profile protected route

// app.get('/profile', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         return res.send({
//             success: true,
//             user: {
//                 id: req.user._id,
//                 username : req.user.username,
//             }
//            })
      
//     }
// );


// Middleware to check if user is a teacher
const isTeacher = (req, res, next) => {
    if (req.user.role === 'teacher') {
        return next();
    }
    res.status(403).json({ message: 'Permission Denied: Teachers only.' });
};

// Middleware to check if user is a student
const isStudent = (req, res, next) => {
    console.log(req);
    if (req.user.role === 'student') {
        return next();
    }
    res.status(403).json({ message: 'Permission Denied: Students only.' });
};



// Protected route for students
app.get('/profile/student', passport.authenticate('jwt', { session: false }), isStudent, (req, res) => {
    res.send({
        success: true,
        message: "Student profile",
        user: {
            id: req.user._id,
            username: req.user.username,
            role: req.user.role
        }
    });
});

// Protected route for teachers
app.get('/profile/teacher', passport.authenticate('jwt', { session: false }), isTeacher, (req, res) => {
    res.send({
        success: true,
        message: "Teacher profile",
        user: {
            id: req.user._id,
            username: req.user.username,
            role: req.user.role
        }
    });
});





// not available route

app.use((req,res,next)=>{
    res.send("route not found")
})

//server error

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.send("server error")
})





module.exports = app;