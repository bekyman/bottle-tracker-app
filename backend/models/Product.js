const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ['soft_drink', 'beer'] },
  requiresBottleReturn: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', ProductSchema);