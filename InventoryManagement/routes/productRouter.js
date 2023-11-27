const express = require("express")
const productRouter = express.Router();
require("../config/database");
const productController = require("../controller/productController")


//product home route
productRouter.get('/', productController.productHome)

//add product route -- get 
productRouter.get('/addProduct',  productController.addProduct)

//add product route -- post
productRouter.post('/addProduct', productController.addProductPost)

//catagory route -- POST
productRouter.post('/addCategory' , productController.addCategoryPost)

module.exports = productRouter;