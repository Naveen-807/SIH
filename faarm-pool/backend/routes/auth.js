const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticate = require('../middleware/auth');

let client = null;
if (process.env.TWILIO_SID && process.env.TWILIO_SID !== 'your_twilio_sid' && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_AUTH_TOKEN !== 'your_auth_token') {
  client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
}

// Login with phone (no OTP)
router.post('/login', async (req, res) => {
  const { phone, name, role } = req.body;

  try {
    let user = await User.findOne({ where: { phone } });
    if (!user) {
      user = await User.create({ phone, name: name || 'User', role: role || 'renter' });
    }

    const token = jwt.sign({ id: user.id, phone: user.phone }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Update user profile
router.put('/profile', authenticate, async (req, res) => {
  const { name, role, location, language } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.name = name || user.name;
    user.role = role || user.role;
    user.location = location || user.location;
    user.language = language || user.language;
    await user.save();

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Update failed' });
  }
});

module.exports = router;
