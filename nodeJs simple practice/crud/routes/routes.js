const express = require('express')
const router = express.Router();
const User = require('../models/user.model')
const multer = require("multer");
app.use(express.static('uploads'))


//image upload

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./upload")
    },
    filename: function (req, file ,cb){
        cb (null, file.fieldname + "_" + Date.now()+"_"+file.originalname);
    }
});
var upload = multer({
    storage: storage,
}).single('image');


// insrt user
router.post("/add_users", upload,  async(req, res)=> {
    console.log("object");
    try{
        const user = new User({
            name: req.body.name,
            email: req.body.Email,
            phone: req.body.phone,
            image: req.file.filename,
        })
        await user.save();
        res.redirect("/show_users")
    }
    catch(err){
        res.send ("u r fucked")
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render("index" , { title: 'All Users', users: users });
    } catch (err) {
        res.send("Something went wrong");
    }
});

router.get('/show_users', async (req, res) => {
    try {
        const users = await User.find();
        res.render('show_users', { title: 'All Users', users: users });
    } catch (err) {
        res.status(500).send('Something went wrong');
    }
});

// router.get("/", (req,res) =>{
//     res.render("index")
// })
// app.get("/", (req,res)=>{
//     res.render("index")
// })


router.get("/add_users", (req,res)=>{
    res.render("add_users", {title : 'add users'})
})


module.exports = router;