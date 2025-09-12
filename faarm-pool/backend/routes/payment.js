const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Booking = require('../models/Booking');
const authenticate = require('../middleware/auth');

let razorpay = null;
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID !== 'your_razorpay_key' && process.env.RAZORPAY_KEY_SECRET && process.env.RAZORPAY_KEY_SECRET !== 'your_secret') {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

// Create payment order
router.post('/create-order', authenticate, async (req, res) => {
  const { bookingId } = req.body;

  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    if (razorpay) {
      const options = {
        amount: booking.totalPrice * 100, // Razorpay expects amount in paisa
        currency: 'INR',
        receipt: `receipt_${bookingId}`,
      };

      const order = await razorpay.orders.create(options);
      res.json({ order });
    } else {
      // Mock order
      const order = {
        id: `mock_order_${bookingId}`,
        amount: booking.totalPrice * 100,
        currency: 'INR',
      };
      res.json({ order });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Verify payment
router.post('/verify', authenticate, async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

  try {
    if (razorpay) {
      const sign = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(sign.toString())
        .digest('hex');

      if (razorpay_signature === expectedSign) {
        const booking = await Booking.findByPk(bookingId);
        booking.paymentStatus = 'paid';
        await booking.save();

        res.json({ message: 'Payment verified successfully' });
      } else {
        res.status(400).json({ error: 'Invalid signature' });
      }
    } else {
      // Mock verification
      const booking = await Booking.findByPk(bookingId);
      booking.paymentStatus = 'paid';
      await booking.save();

      res.json({ message: 'Payment verified successfully (mock)' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Verification failed' });
  }
});

module.exports = router;
