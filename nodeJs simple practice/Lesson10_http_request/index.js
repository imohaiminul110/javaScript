const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/user",(req, res)=>
{
    const name= req.body.name;
    const id= req.body.id;
    res.send(`welcome ${name} and id ${id}`);
    

})

//====through header

app.get("/",(req,res)=>
{
    const name = req.header("name");
    const id = req.header("id");
    res.send(`My name: ${name} my id ${id}`);
})


//====route parameter

// app.get("/name/:name/id/:id", (req,res)=>
// {
//     const name = req.params.name;
//     const id = req.params.id;
//     res.send(`My name ${name} my id ${id}`);
// })

//======query parameter
// app.get("/", (req, res)=>
// {
//     // const name = req.query.name;
//     // const id = req.query.id;
//     const {id, name}= req.query;
//     res.send(`my name is: ${name}, <br/> my id is : ${id} `);
// })

app.listen(port, ()=>
{
    console.log(`server is running at http://localhost:${port}`)
})