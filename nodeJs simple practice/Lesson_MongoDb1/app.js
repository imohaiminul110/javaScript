const express = require('express')
const app = express();

app.get("/", (req, res)=> 
{
    res.send("Get request for home route");
    res.end()
})

app.get("/about", (req,res)=>
{
    res.send("Get request for about route");
    res.end()
})

app.post("/", (req,res)=>
{
    res.send("post request for home route");
    res.end()
})

app.put("/",(req, res) =>
{
    res.send("put request for home route")
    res.end()
} )

app.delete("/", (req, res) =>
{
    res.send("Delete request for home route")
    res.end()

})

module.exports = app;