// index.js
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const uploadRoutes = require("./uploadRoutes");
const db =  require("./db")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", uploadRoutes);

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});









// const express = require("express");
// const mongoose = require('mongoose');
// const app = express()
// const port = 5000;

// const db =  require("./db")
// const Image = require("./dbModel")
// const multer = require('multer')
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// //storage
// const Storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req,file, cb) => {
//         cb(null, file.originalname);
//     }
// })

// const upload = multer({
//     storage: Storage
// }).single('testImage')



// app.post("/upload", (req,res)=>
// {
//     try{
//         upload (req, res, (err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                const newImage = new Image({
//                     name: req.body.name,
//                     Image:{
//                         data: req.file.filename,
//                         contentType: 'image/png'
//                     }
//                  })
//                  newImage.save()
//                  .then(()=> res.send("image uploaded"))
//                  .catch((err) => console.log(err));
//                 }
            
              
//         })
//     }
//     catch{
//         res.send("something fucked")
//     }
// })

// app.listen(port, ()=>{
//     console.log("server on")
// })