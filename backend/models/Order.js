const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shopOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true },
  bottlesExchangedImmediately: { type: Boolean, required: true }, // Logic from pdf
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);