const mongoose = require('mongoose');

const preOrderSchema = new mongoose.Schema({
  rollNumber: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cart: {
    type: Array,
    required: true
  },
  totalWithGST: {
    type: Number,
    required: true
  },
  orderCode: {
    type: String,
    required: true
  },
  paymentType: {
    type: String,
    required: true // 'Cash' or 'Card'
  },
  completed: {
    type: Boolean,
    default: false // Default to not completed
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PreOrder', preOrderSchema);
