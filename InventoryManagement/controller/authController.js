const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require("../models/user.model");

const saltRounds = 10;



//home controller
exports.index = (req,res)=>{
        res.render("index");
}

//register controller -- GET
exports.getRegisterUser = (req, res) => {
       res.render("register");
}

//register controller -- POST
exports.registerUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).send("Username already taken");
        }

        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = new User({
            username: req.body.username,
            password: hash,
            role: req.body.role,
        });

        const user = await newUser.save();
        res.send({
            success: true,
            message: "User created",
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error during registration: " + error.message);
    }
};

//login controller -- GET
exports.GetloginUser = (req, res)=> {
    res.render("login")
}

//login controller -- POST
exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.send({
                success: false,
                message: "User not found",
            });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.send({
                success: false,
                message: "Incorrect password",
            });
        }

        const payload = {
            id: user.id,
            username: user.username,
            role: user.role,
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "2d",
        });

        res.send({
            success: true,
            message: `Logged in as ${user.role}`,
            token: "Bearer " + token,
            redirect: `/profile/${user.role.toLowerCase()}/${user.username.toLowerCase()}`, // Dynamic redirection
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error during login: " + error.message);
    }
};


// protected profile controller for device
exports.deviceProfile = (req, res) => {
    if (req.user.role.toLowerCase() === 'device' &&
        req.params.username.toLowerCase() === req.user.username.toLowerCase()) {
        res.send({
            success: true,
            message: `Device profile for ${req.params.username}`,
            user: {
                id: req.user._id,
                username: req.user.username,
                role: req.user.role,
            },
        });
    } else {
        res.status(403).json({ message: 'Permission Denied: Access restricted.' });
    }
};


// protected profile controller for It
exports.itProfile = (req, res) => {
    if (req.user.role.toLowerCase() === 'it' &&
        req.params.username.toLowerCase() === req.user.username.toLowerCase()) {
        res.send({
            success: true,
            message: `IT profile for ${req.params.username}`,
            user: {
                id: req.user._id,
                username: req.user.username,
                role: req.user.role,
            },
        });
    } else {
        res.status(403).json({ message: 'Permission Denied: Access restricted.' });
    }
};

//logout controller

exports.logout =  (req, res) => {
    console.log("Logging out...");
    res.clearCookie('token');
    res.redirect('/');
}
