const jwt = require('jsonwebtoken');
const passport = require('../config/passport');
const product = require("../models/product.model");
const category = require("../models/category.model");
// Modify your Multer configuration in product.controller.js
const multer = require("multer");
//const path = require('path');


//define storage

const Storage = multer.diskStorage({
  destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
  }
})

const upload = multer({
  storage : Storage
}).single('testImage')















// // Define storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '..', 'uploads')); // Adjust the destination path as needed
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   }
// });

// // Create multer instance with the defined storage
// const upload = multer({ storage: storage });

// // Export the upload middleware
// module.exports = upload;





// const multer = require("multer")
// const path = require('path');




// //image upload

// var storage = multer.diskStorage({
  
//   destination: function(req, file, cb){
//     cb(null, path.join(__dirname, '..', 'uploads'));
//   },
//   filename: function (req, file ,cb){
//       cb (null, file.fieldname + "_" + Date.now()+"_"+file.originalname);
//   }
// });

// const upload = multer({ storage: storage });


// module.exports = upload;











//product home
exports.productHome = (req, res) => {
  try {
      // Check if the authenticated user's role is admin or employee
      if (req.user && req.user.role.toLowerCase() === 'admin' || 'employee' ) {
           res.send({
              success: true,
              message: `Product Home`,
          });
      } else {
          return res.status(403).json({ message: 'Permission Denied: Access restricted.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error during product retrieval.' });
  }
};

exports.addProductPost = async (req,res)=> {
  try{
    upload(req,res, async (err)=>{
      if(err){
        console.log(err);
      }
      else
      {
        
  //Check if the provided category exists
        let existingCategory = await category.findOne({ categoryName: category });

        // If the category doesn't exist, create a new category
        if (!existingCategory) {
          console.log("Creating a new category:", category);
          existingCategory = new category({
            categoryName: category,
          });
          await existingCategory.save();
        }

      
          const newProduct = new product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            manufacturer: req.body.manufacturer,
            imageUrl : {
              data: req.file.filename,
              contentType : 'image/png'
  
            },
            createdAt: req.body.createdAt,
            category: existingCategory._id, 
  
          })
          newProduct.save()
          .then(() => res.send("image uploaded"))
          .catch((err) => console.log(err));
        
      
        }
        
      })
  }
  catch{
    res.send("something went wrong");
  }
}



// // Update your product.controller.js
// exports.addProductPost = async (req, res) => {
//   try {
//     upload(req, res, async (err)=>{
//       // Check if the authenticated user's role is admin or employee
//     if (req.user && (req.user.role.toLowerCase() === 'admin' || req.user.role.toLowerCase() === 'employee')) {

//       const { name, description, price, quantity, manufacturer, createdAt, category } = req.body;

//       // Check if the provided category exists
//       let existingCategory = await category.findOne({ categoryName: category });

//       // If the category doesn't exist, create a new category
//       if (!existingCategory) {
//         console.log("Creating a new category:", category);
//         existingCategory = new category({
//           categoryName: category,
//         });
//         await existingCategory.save();
//       }

//       const imageUrl = req.file ? req.file.path : ''; // Get the image URL from the uploaded file

//       const newProduct = new product({
//         name,
//         description,
//         price,
//         quantity,
//         manufacturer,
//         imageUrl,
//         createdAt,
//         category: existingCategory._id,
//       });

//       const savedProduct = await newProduct.save();

//       // Update the category to include the newly created product
//       existingCategory.products.push(savedProduct._id);
//       await existingCategory.save();

//       res.send("Product added");
//     } else {
//       return res.status(403).json({ message: 'Permission Denied: Access restricted.' });
//     }
//     })
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error adding product");
//   }
// }






// // add product ccontroller -- post
// exports.addProductPost = async (req, res) => {

//   try {
//     // Check if the authenticated user's role is admin or employee
//     if (req.user && req.user.role.toLowerCase() === 'admin' || 'employee' ) {
      
//     const { name, description, price,quantity,manufacturer,createdAt,category } = req.body;

//     // Check if the provided category exists
//     let existingCategory = await category.findOne({ categoryName :category });

//     // If the category doesn't exist, create a new category
//     if (!existingCategory) {
//       console.log("Creating a new category:", category);
//       existingCategory = new category({
//         categoryName : category
//       });
//       await existingCategory.save();
//     }
//     const imageUrl = req.file ? req.file.path : ''; // Get the image URL from the uploaded file

//     const newProduct = new product({
//       name,
//       description,
//       price,
//       quantity,
//       manufacturer,
//       imageUrl,
//       createdAt,
//       category: existingCategory._id,
//     });

//     const savedProduct = await newProduct.save();

//     // Update the category to include the newly created product
//     existingCategory.products.push(savedProduct._id);
//     await existingCategory.save();

//     res.send("Product added");
//   } 
//   else{
//     return res.status(403).json({ message: 'Permission Denied: Access restricted.' });
//   }
//   }
//   catch (error) {
//     console.error(error);
//     res.status(500).send("Error adding product");
//   }
// }



 




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





const Category = require('path/to/CategoryModel'); // Import your Category model
const Product = require('path/to/ProductModel'); // Import your Product model

// ...

// Get all products for a given category name
// exports.getAllProductsInCategory = async (req, res) => {
//   const categoryName = req.params.categoryName; // Assuming the category name is in the request parameters

//   try {
//     // Find the category with the specified name
//     const foundCategory = await Category.findOne({ categoryName });

//     if (!foundCategory) {
//       return res.status(404).send('Category not found');
//     }

//     // Retrieve the associated products for the found category
//     const productsInCategory = await Product.find({ category: foundCategory._id });

//     res.json(productsInCategory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(`Error retrieving products in the "${categoryName}" category`);
//   }
// };



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





//i think complexe



// Assign a product to an employee (admin only)
exports.assignProductToEmployee = async (req, res) => {
  try {
    const { adminId, employeeId, productId } = req.body;

    // Check if the requester is an admin
    const admin = await User.findByName(username);
    if (!admin || admin.role !== 'admin') {
      return res.status(403).send('Unauthorized: Only admins can assign products.');
    }

    // Check if the employee exists
    const employee = await User.findById(employeeId);
    if (!employee || employee.role !== 'employee') {
      return res.status(404).send('Employee not found');
    }

    // Create an assignment
    const assignment = new Assignment({
      user: employeeId,
      product: productId,
    });

    // Save the assignment to the database
    await assignment.save();

    res.json({ message: 'Product assigned to employee successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error assigning product to employee');
  }
};

