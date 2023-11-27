const express = require("express");
const Router = express.Router();
const authController = require("../controller/authController");
const passport = require('passport');


//home route
Router.get('/', authController.index )

// Register route - GET
 Router.get("/register", authController.getRegisterUser);

// Register route - POST
Router.post("/register", authController.registerUser);

//login route - GET
Router.get("/login", authController.GetloginUser)

// Login route - POST
Router.post("/login", authController.loginUser);

// Device profile route
Router.get('/device/:username', passport.authenticate('jwt', { session: false }), authController.deviceProfile);

// IT profile route
Router.get('/it/:username', passport.authenticate('jwt', { session: false }), authController.itProfile);

// Logout route
Router.get('/logout' , authController.logout);

module.exports = Router;
