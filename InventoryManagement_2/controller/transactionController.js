const Transaction = require('../models/transaction.model')
const User = require("../models/user.model")
const Product = require("../models/product.model")


exports.transactionHome = async (req, res) => { 
    res.send("abc")
    console.log("object");
  };



  exports.requestProduct = async (req, res) => {
    try {
      // Find the existing user by username
      let existingUser = await User.findOne({ username: req.body.username });
      console.log("username :", existingUser);
  
      if (!existingUser) {
        return res.status(404).send("User not found");
      }
  
      // Find the existing product by name (assuming product name is unique, adjust as needed)
      let existingProduct = await Product.findOne({ name: req.body.product });
      console.log("product : ", existingProduct);
  
      if (!existingProduct) {
        return res.status(404).send("Product not found");
      }
  
      // Create a new Transaction
      const newTransaction = new Transaction({
        username: existingUser._id,
        product: existingProduct._id,
        quantity: req.body.quantity,
        type: 'request', // Assuming you want to hardcode the type as 'request'
        specification: req.body.specification,
        remarks: req.body.remarks,
        requestStatus: 'pending', // Assuming you want to set the requestStatus as 'pending' initially
        timestamp: req.body.timestamp,
      });
  
      // Populate the user and product fields
      //await newTransaction.populate('username product').execPopulate();
  
      // Save the newTransaction
      await newTransaction.save();
  
      res.status(200).send("Transaction created successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };









// exports.requestProduct = async (req, res) =>{
//     try {
//         let existingUser = await User.findOne({username : User})
//         console.log("username :" , existingUser );
//         if(!existingUser){
//             res.send("user not found")
//         }
//         await existingUser.save()
//         let existingProduct = await Product.findOne({product : Product})  
//         console.log("product : " , existingProduct);
//         if(!existingProduct){
//             res.send("product not found")
//             console.log("object");
//             await existingProduct.save()
//             const newTransaction = new Transaction({
//                     username: existingUser._id, 
//                     product : existingProduct._id,
//                     quantity : req.body.quantity,
//                     type : request,
//                     specification : req.body.specification,
//                     remarks : req.body.remarks,
//                     requestStatus : pending,   
//                     timestamp : req.body.timestamp,
//             })
//             await newTransaction.populate('User Product').execPopulate();
//             newTransaction.save()
            
//             .then(()=> res.send("uploaded"))
//             .catch((err)=> console.log(err))
        
        
        
//         }
//             }
        
//     catch (error) {
//         console.log(error)
//     }
// }





//   exports.requestProduct = async (req, res) => {
//     try {
//         const { userName, productName, quantity, type, specification, remarks } = req.body;

//       // You might want to add validation for the input data here

//       // Find the corresponding User and Product by name
//       const user = await User.findOne({ username: userName });
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       const product = await Product.findOne({ name: productName }); 
//        if (!product) {
//         return res.status(404).json({ error: ' product not found' });
//       }

//       // Create a new transaction with the found user and product IDs
//       const newTransaction = new Transaction({
//         username: user._id,
//         product: product._id,
//         quantity,
//         type : "request",
//         specification,
//         remarks,
//         requestStatus: 'pending',
//         returnStatus: null,
//       });

//       // Save the transaction to the database
//       await newTransaction.save();

//       // Populate the username and product fields before sending the response
//       let k = await newTransaction.populate('username', 'product');
// console.log(k);
//       res.status(201).json({ message: 'Transaction requested successfully', transaction: newTransaction });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//     }
        


