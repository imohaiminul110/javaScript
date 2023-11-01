const express = require('express')
const app = express();
const userRouter = require('./routes/users.route')

app.use("/api/user",userRouter)

app.use("/", (req,res)=>
{
    res.send("<h1> Get request for home route <h1/> ")
})
app.use((req,res)=>
{
    res.send("<h1> URL not found <h1/>")
})
module.exports = app