const express = require('express')
const router = express.Router();
const User = require('../models/user.model')
const multer = require("multer");
const { route } = require('../app');

//image upload

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads")
    },
    filename: function (req, file ,cb){
        cb (null, file.filename + "_" + Date.now()+"_"+file.originalname);
    }
});
var upload = multer({
    storage: storage,
}).single('image');

//
router.post('/demo', (req,res) => {
    console.log("demo")
    res.send("sdfasd")
})

// insrt user
console.log("object1");
router.post("/add", upload, (req, res)=> {
    console.log("object");
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.filename,
    })
    user.save((err)=>{
        if(err){
            res.json({message:"something wrong"})
        }
        else{
            res.send("addes")
        }
    })
})

router.get("/", (req,res) => {
    res.send("homee page")
})

module.exports = router;