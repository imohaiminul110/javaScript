require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const ejs = require("ejs");

const User = require("./models/user.model");

const saltRounds = 10;
require("./config/database");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require("./config/passport");


// Home route
app.use('/product', productRouter) 
app.use('/', userRouter)



// Register route - GET
//app.use("/register", userRouter)

// app.get("/register", (req, res) => {
//     res.render("register");
// });

// Register route - POST

//app.use("/")

// app.post("/register", async (req, res) => {
//     try {
//         const existingUser = await User.findOne({ username: req.body.username });
//         if (existingUser) {
//             return res.status(400).send("Username already taken");
//         }

//         const hash = await bcrypt.hash(req.body.password, saltRounds);
//         const newUser = new User({
//             username: req.body.username,
//             password: hash,
//             role: req.body.role,
//         });

//         const user = await newUser.save();
//         res.send({
//             success: true,
//             message: "User created",
//             user: {
//                 id: user.id,
//                 username: user.username,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server error during registration: " + error.message);
//     }
// });

// Login route - GET

//app.use("/login", userRouter)

// app.get("/login", (req, res) => {
//     res.render("login");
// });

// Login route - POST

// app.post("/login", async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.body.username });

//         if (!user) {
//             return res.send({
//                 success: false,
//                 message: "User not found",
//             });
//         }

//         if (!bcrypt.compareSync(req.body.password, user.password)) {
//             return res.send({
//                 success: false,
//                 message: "Incorrect password",
//             });
//         }

//         const payload = {
//             id: user.id,
//             username: user.username,
//             role: user.role,
//         };

//         const token = jwt.sign(payload, process.env.SECRET_KEY, {
//             expiresIn: "2d",
//         });
//          console.log("3");
//         //res.redirect (`/profile/${user.role.toLowerCase()}/${user.username.toLowerCase()}`)
      
//          console.log("4");
//         res.send({
//             success: true,
//             message: `Logged in as ${user.role}`,
//             token: "Bearer " + token,
//             redirect: `/profile/${user.role.toLowerCase()}/${user.username.toLowerCase()}`, // Dynamic redirection
//         });
//     } 
//     catch (error) {
//         console.error(error);
//         res.status(500).send("Server error during login: " + error.message);
//     }
// });


// device profile route
// app.get('/profile/device/:username', passport.authenticate('jwt', { session: false }), (req, res) => {
//     if (req.user.role.toLowerCase() === 'device' &&
//         req.params.username.toLowerCase() === req.user.username.toLowerCase()) {
//         res.send({
//             success: true,
//             message: `device profile for ${req.params.username}`,
//             user: {
//                 id: req.user._id,
//                 username: req.user.username,
//                 role: req.user.role,
//             },
//         });
//     } else {
//         res.status(403).json({ message: 'Permission Denied: Access restricted.' });
//     }
// });

// IT profile route
// app.get('/profile/it/:username', passport.authenticate('jwt', { session: false }), (req, res) => {
//     if (req.user.role.toLowerCase() === 'it' &&
//         req.params.username.toLowerCase() === req.user.username.toLowerCase()) {
//         res.send({
//             success: true,
//             message: `IT profile for ${req.params.username}`,
//             user: {
//                 id: req.user._id,
//                 username: req.user.username,
//                 role: req.user.role,
//             },
//         });
//     } else {
//         res.status(403).json({ message: 'Permission Denied: Access restricted.' });
//     }
// });

// Not available route

app.use((req, res, next) => {
    res.send("Route not found");
});

// Server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.send("Server error");
});

module.exports = app;