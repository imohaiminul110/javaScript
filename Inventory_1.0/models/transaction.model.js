const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['request', 'return', 'purchase'],
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  requestStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
  },
  returnStatus: {
    type: String,
    enum: ['pending', 'completed'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;