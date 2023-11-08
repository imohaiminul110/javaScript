const express = require("express");
const app = express();
const port = 3000;

app.get("/products/:id([0-9]{3})", (req, res)=>
{
    res.send(`id = ${req.params.id}`)
})
app.get("/products/:name([a-zA-Z0-9]+)", (req, res)=>
{
    res.send(`title = ${req.params.name}`)
})


app.use("*",(req, res)=>
{
    res.status(404).send(
        {
            message : "not valid",
        }
    )
})

app.listen(port, ()=>
{
    console.log("server is fucking")
})