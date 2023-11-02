const expresss = require('express')
const app = expresss();
const userRouter = require('./router/users.route')

app.use("", userRouter)

app.get("/", (req, res)=>
{
    // res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html")
    // res.status(200).json({
    //     message: "this is home",
    //     statusCode:200,
    // })
    // res.send ("this is home get")
})

app.use((req, res)=>
{
    res.send ("this is error get")
})

app.use("/sign",(req, res)=>
{
    
    res.send("this is sign get")
})


module.exports = app