const mongoose = require('mongoose');

const BottleLedgerSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shopOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  associatedOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  quantityOwed: { type: Number, required: true, default: 0 },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' }, // Reminders trigger based on this status
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BottleLedger', BottleLedgerSchema);