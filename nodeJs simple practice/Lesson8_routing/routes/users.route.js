const express = require('express')
const router = express.Router();


router.get("/register", (req,res)=>
{
    res.send("<h1>Get request for register route <h1/> ")
})
router.get("/login", (req,res)=>
{
    res.send("<h1>Get request for login route<h1/> ")
});

module.exports= router