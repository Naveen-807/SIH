const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Equipment = require('../models/Equipment');
const authenticate = require('../middleware/auth');

// Get bookings for user
router.get('/', authenticate, async (req, res) => {
  const userId = req.user.id;
  const { role } = req.query; // 'owner' or 'renter'

  try {
    let where = {};
    if (role === 'owner') {
      // Get bookings for equipment owned by user
      const equipmentIds = await Equipment.findAll({ where: { ownerId: userId }, attributes: ['id'] });
      where.equipmentId = equipmentIds.map(e => e.id);
    } else {
      where.renterId = userId;
    }

    const bookings = await Booking.findAll({ where, include: [Equipment] });
    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Create booking
router.post('/', authenticate, async (req, res) => {
  const { equipmentId, startDate, endDate } = req.body;
  const renterId = req.user.id;

  try {
    const equipment = await Equipment.findByPk(equipmentId);
    if (!equipment) return res.status(404).json({ error: 'Equipment not found' });

    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const totalPrice = days * parseFloat(equipment.pricePerDay);

    const booking = await Booking.create({
      equipmentId,
      renterId,
      startDate,
      endDate,
      totalPrice,
    });

    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Update booking status (owner only)
router.put('/:id', authenticate, async (req, res) => {
  const { status } = req.body;
  const bookingId = req.params.id;
  const userId = req.user.id;

  try {
    const booking = await Booking.findByPk(bookingId, { include: [Equipment] });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    if (booking.Equipment.ownerId !== userId) return res.status(403).json({ error: 'Not authorized' });

    booking.status = status;
    await booking.save();

    res.json({ booking });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update booking' });
  }
});

module.exports = router;
