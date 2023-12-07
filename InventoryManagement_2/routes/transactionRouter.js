const express = require("express");
const transactionRouter = express.Router();
const transactionController = require ("../controller/transactionController")

//transaction HOME route
transactionRouter.get('/', transactionController.transactionHome)

//employee request for products
transactionRouter.post('/requestProduct', transactionController.requestProduct )

//admin view request for products
transactionRouter.get('/adminViewRequestedPrpoduct', transactionController.adminViewRequestedPrpoduct)




module.exports = transactionRouter;



