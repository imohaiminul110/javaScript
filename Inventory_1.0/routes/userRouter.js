const express = require('express');
const router = express.Router();


router.get("/", (req,res)=>{
    res.send("abc")
})

router.post("/register", (req,res)=>{
    res.send("abc")
})
// Define user routes
//router.post('/register', );
router.post('/login', );
router.patch('/approve/:userId', /* Your admin approval controller */);
router.get('/profile', /* Your user profile controller */);
router.patch('/profile', /* Your update user profile controller */);
router.post('/logout', /* Your logout controller */);


module.exports = router;

