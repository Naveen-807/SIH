const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Booking = require('../models/Booking');
const Equipment = require('../models/Equipment');
const authenticate = require('../middleware/auth');

// Owner dashboard
router.get('/owner', authenticate, async (req, res) => {
  const ownerId = req.user.id;

  try {
    const equipment = await Equipment.findAll({ where: { ownerId } });
    const equipmentIds = equipment.map(e => e.id);

    const bookings = await Booking.findAll({
      where: { equipmentId: equipmentIds },
      include: [Equipment],
    });

    const totalEarnings = bookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + parseFloat(b.totalPrice), 0);

    const activeBookings = bookings.filter(b => b.status === 'confirmed').length;

    res.json({
      equipmentCount: equipment.length,
      totalEarnings,
      activeBookings,
      recentBookings: bookings.slice(0, 5),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Renter dashboard
router.get('/renter', authenticate, async (req, res) => {
  const renterId = req.user.id;

  try {
    const bookings = await Booking.findAll({
      where: { renterId },
      include: [Equipment],
    });

    const totalSpent = bookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + parseFloat(b.totalPrice), 0);

    const activeBookings = bookings.filter(b => b.status === 'confirmed').length;

    res.json({
      totalSpent,
      activeBookings,
      bookingHistory: bookings.slice(0, 10),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

module.exports = router;
