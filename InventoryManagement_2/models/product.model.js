const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
    description: {
        type: String,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        default: 0,
      },
      manufacturer: {
        type: String,
        trim: true,
      },
      imageUrl: {
        type: String,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
      },
});
const product = mongoose.model("product", productSchema)
module.exports = product;