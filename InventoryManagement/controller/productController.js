const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require('../config/passport');


const saltRounds = 10;



const product = require("../models/product.model");
const category = require("../models/category.model")

//product home
exports.productHome = (req, res) => {
  try {
      // Check if the authenticated user's role is admin
      if (req.user && req.user.role.toLowerCase() === 'admin') {
          return res.send({
              success: true,
              message: `Access to product details granted for product with ID ${req.params.productId}`,
          });
      } else {
          return res.status(403).json({ message: 'Permission Denied: Access restricted.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error during product retrieval.' });
  }
};



// exports.productHome = (req,res)=>{
//     res.send("abc")
//     console.log("product home");
// }


//add product controller
exports.addProduct =  (req,res)=>{
    res.send("add product")
    console.log("add product");
}

// add product ccontroller -- post


exports.addProductPost = async (req, res) => {
  try {
    const { productName, productQuantity, categoryName } = req.body;

    // Check if the provided category exists
    let existingCategory = await category.findOne({ categoryName });

    // If the category doesn't exist, create a new category
    if (!existingCategory) {
      console.log("Creating a new category:", categoryName);
      existingCategory = new category({
        categoryName,
      });
      await existingCategory.save();
    }

    const newProduct = new product({
      productName,
      productQuantity,
      category: existingCategory._id,
    });

    const savedProduct = await newProduct.save();

    // Update the category to include the newly created product
    existingCategory.products.push(savedProduct._id);
    await existingCategory.save();

    res.send("Product added");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding product");
  }
};



// Get all categories with associated products


// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await category.find()
    res.json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving all categories');
  }
};

// Get all products where category name is "food"
exports.getAllProductsInCategory = async (req, res) => {
  try {
    // Find the category with the specified name
    const foodCategory = await category.findOne({ categoryName: 'food' });

    if (!foodCategory) {
      return res.status(404).send('Category not found');
    }

    // Retrieve the associated products for the found category
    const productsInFoodCategory = await product.find({ category: foodCategory._id });

    res.json(productsInFoodCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving products in the "food" category');
  }
};

// Get all products based on the provided category name
exports.getAllProductsInCategoryPost = async (req, res) => {
  try {
    const { categoryName } = req.body;

    // Find the category with the specified name
    const targetCategory = await category.findOne({ categoryName });

    if (!targetCategory) {
      return res.status(404).send('Category not found');
    }

    // Retrieve the associated products for the found category
    const productsInCategory = await product.find({ category: targetCategory._id });

    res.json(productsInCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving products in the specified category');
  }
};

// Get all products with associated category
exports.getAllProductsWithCategory = async (req, res) => {
  try {
    const productsWithCategory = await product.find().populate({
      path: 'category',
      select: 'categoryName',
    });
    res.json(productsWithCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving products with category');
  }
};


// Update a product by searching for it based on the productName
exports.updateProductByName = async (req, res) => {
  try {
    const { productName, updatedData } = req.body;

    // Use findOneAndUpdate
    const updatedProduct = await product.findOneAndUpdate(
      { productName },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating the product');
  }
};




// Delete a product by name
exports.deleteProductByName = async (req, res) => {
  try {
    const { productName } = req.body;

    // Check if the product with the given name exists
    const existingProduct = await product.findOne({ productName });
    if (!existingProduct) {
      return res.status(404).send('Product not found');
    }

    // Remove the product from the database
    await product.deleteOne({ productName });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting the product');
  }
};





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