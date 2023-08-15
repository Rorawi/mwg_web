// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  email: String,
  amount: Number,
  firstName: String,
  lastName: String,
  reference: String,
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;