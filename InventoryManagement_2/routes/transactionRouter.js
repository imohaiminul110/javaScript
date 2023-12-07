const express = require("express");
const transactionRouter = express.Router();
const transactionController = require ("../controller/transactionController")

//transaction HOME route
transactionRouter.get('/', transactionController.transactionHome)

transactionRouter.post('/requestProduct', transactionController.requestProduct )


module.exports = transactionRouter;



