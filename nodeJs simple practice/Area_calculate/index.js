const express = require('express');
const app = express();
const port = 3001;

app.get("/",(req,res)=>
{
    res.sendFile(__dirname+'/index.html')
})

app.listen(port, ()=>
{
    console.log(`server is running at http://localhost:${port}`)
})