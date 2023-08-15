// routes/api.js
const express = require('express');
const paymentController = require('../controllers/payment');

const router = express.Router();

// Create a new payment
router.post('/payments', paymentController.createPayment);

module.exports = router;
