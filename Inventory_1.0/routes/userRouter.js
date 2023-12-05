const express = require('express');
const router = express.Router();
const userController = require ("../controllers/userController")
const mongoose = require("mongoose");

router.get("/", userController.home)
router.post("/register", userController.registerUser)

router.post('/login', userController.loginUser );
router.patch('/approve/:userId',  );
router.get('/profile', );
router.patch('/profile', );
router.post('/logout', );


module.exports = router;

