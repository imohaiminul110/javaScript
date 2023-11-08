const express = require ("express")
const app = express()
const port  = 3000;


const myMiddleware = (req, res, next)=>
{
    console.log("this is middle ware")

    req.currentTime = new Date(Date.now())
    next(); 
}
app.use(myMiddleware);

// app.use((req,res,next)=>
// {
//     res.send("404 bad url")
// })

 
app.get("/", (req, res)=>
{
    console.log("home console" + req.currentTime)
    res.send("this is home route")
})

app.get("/about", (req, res)=>
{
    console.log("about console" + req.currentTime)
    res.send("this is about route" + req.currentTime)
})

app.use((req, res, next)=>
{
    res.status(404).json(
        {
            message: "not found"
        }
    )

})

app.use((err,res,next)=>
{
    res.status(500).send("something wrong");
})

app.listen(port, ()=>
{
    console.log("server is running")
})


