const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get("/register",(req, res)=>
{
    res.sendFile(__dirname + "/index.html");   
})

app.post("/register",(req, res)=>
{
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`Name ${fullName} and age ${age}`);   
})


app.listen(port, ()=>
{
    console.log(`server is running at http://localhost:${port}`)
})