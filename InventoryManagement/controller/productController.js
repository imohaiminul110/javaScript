const product = require("../models/product.model");
const category = require("../models/category.model")

//product home
exports.productHome = (req,res)=>{
    res.send("abc")
    console.log("product home");
}


//add product controller
exports.addProduct =  (req,res)=>{
    res.send("add product")
    console.log("add product");
}

// add product ccontroller -- post
exports.addProductPost = async (req, res) => {
    try {
      const { productName, productQuantity, category: categoryName } = req.body;
  
      // Check if the provided category exists
      const existingCategory = await category.findOne({ categoryName });
      if (!existingCategory) {
        return res.status(404).send("Category not found");
      }
  
      const newProduct = new product({
        productName,
        productQuantity,
        category: existingCategory, // Use the category ID from the existing category
      });
  
      const savedProduct = await newProduct.save();
      res.send("Product added");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error adding product");
    }
  };



// exports.addProductPost = async (req,res)=>{
//     try{
//         const newProduct = new product({
//             productName : req.body.productName,
//             productQuantity : req.body.productQuantity,
//             category: req.body.category,
//         })
//         const savedproduct = await newProduct.save();
//         res.send("product added")
//     }
//     catch(error){
//         console.log(error)
//         console.log("product fucked")
//     }
// }


//add catagory --POST
exports.addCategoryPost = async(req, res)=>{
    try{
        const existingCategory = await category.findOne({categoryName: req.body.categoryName})
        if(existingCategory){
            return res.send("category exist")
        }

        const newcategory = new category({
            categoryName : req.body.categoryName,
        })
        const savedcategory = await newcategory.save();
        res.send("category added")
    }
    catch(error){
        console.log(error)
        console.log("category fucked")
    }
}