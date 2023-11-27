const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productQuantity: {
        type: String,
        required : true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
      },
});
const product = mongoose.model("product", productSchema)
module.exports = product;