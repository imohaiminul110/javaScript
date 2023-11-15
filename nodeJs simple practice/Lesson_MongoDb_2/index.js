const express = require ("express");
const mongoose = require ("mongoose")
const app = express();

const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//create product schema

const productsSchema =  new mongoose.Schema({
    title:  String,
    price : Number,
    description : String,
    CreatedAt : {
        type : Date,
        default: Date.now
    } 

})


//create product model

const product = mongoose.model("products", productsSchema)


//async await

const connctDB = async() => 
{
    try
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log("db connected")
    }
    catch (error)
    {
        console.log("bd not connected")
        console.log(error.message)
        process.exit(1)

    }
}



/*
//==============then/catch============
mongoose
    .connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log("db is connected"))
    .catch((err) => {
        console.log("db is not connected")
        console.log(error)
        process.exit(1)
    });

*/ 




app.listen(port, async()=>
{
    console.log("server running ")
    await connctDB()
})

app.get("/",(req, res)=>
{
    res.send("I am home page")
})

app.post("/product", async (req, res)=>
{
    try
    {
        const newProduct = new product({
        title : req.body.title,
        price : req.body.price,
        description : req.body.description,
        })

        const productData = await newProduct.save();
        res.status(201).send(productData)



    //     const productData = await product.insertMany([
    //         {
    //         title : "phone",
    //         price  :10,
    //         description : "nice phone "
    //         },
    //         {
    //             title : "tv",
    //             price  :100,
    //             description : "nice tv "
    //             },

    // ]);
      //  res.status(201).send(productData)
    }
    catch(error)
    {
        res.status(500).send({message : error.message})

    }

})