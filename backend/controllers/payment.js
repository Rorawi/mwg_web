// controllers/paymentController.js
const Payment = require('../models/payment');

exports.createPayment = async (req, res) => {
  try {
    const { email, amount, firstName, lastName, reference } = req.body;

    // Perform necessary validation

    // Create payment record
    const payment = await Payment.create({
      email,
      amount,
      firstName,
      lastName,
      reference,
      status: 'pending', // Set initial status
    });

    // Return payment details to the frontend
    res.json({ payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
