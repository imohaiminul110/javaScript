const express = require ('express')
const pasth = require("path")
const bcrypt = require ("bcrypt")
const collection = require("./config");
const { log } = require('console');

const app = express();

//convert data into json formate

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')

const port  = 3000;

app.listen (port, ()=>
{
    console.log("server on")

})

app.get("/", (req,res)=>
{
    res.render("login")
})

app.get ("/signup", (req,res)=>
{
    res.render("signup")
})

app.post("/signup", async(req,res)=>
{
    const data ={
        name: req.body.username,
        password: req.body.password
    }

    //check if user exist

    const existiongUser = await collection.findOne({name: data.name})
    if(existiongUser)
    {
        res.send("user exist")
    }
    else
    {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
        const userdata = await collection.insertMany(data)
        console.log(userdata)
        res.render("home")
    }
})

app.post("/login", async(req,res) =>
{
    try
    {
        console.log("1");
        const check = await collection.findOne({name: req.body.username})
        console.log("2");

        if(!check){
            res.send("user not found")
            return
        }
        console.log("3");

        //compare hash pass with form pass

        console.log("4");
        console.log("4");
        console.log("4");
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
       console.log(isPasswordMatch);
        if(isPasswordMatch){
            console.log("5");
            res.render("home")
        }
        else{
            console.log("6");
            res.send("worng pass");
        }
        
        console.log("7");
    }
    catch{
        res.send("someting wrong");
    }
})

