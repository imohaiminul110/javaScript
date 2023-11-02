const express = require ('express');
const path = require('path');
const router = express.Router();


router.get("/register", (req, res)=>
{
    res.sendFile('register.html', { root: path.join(__dirname, '../views') });   
})

router.get("/login", (req, res)=>
{
    //res.send ("this is login get")
    res.cookie("name", "rup")
    res.cookie("age" ,"27")
    res.clearCookie("name")
    res.append("id", "13000")
    res.end()

})

module.exports = router

