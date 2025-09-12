const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Equipment = require('../models/Equipment');
const authenticate = require('../middleware/auth');

// Get all equipment
router.get('/', async (req, res) => {
  const { type, location, minPrice, maxPrice } = req.query;
  const where = {};
  if (type) where.type = type;
  if (location) where.location = { [Op.iLike]: `%${location}%` };
  if (minPrice) where.pricePerDay = { ...where.pricePerDay, [Op.gte]: minPrice };
  if (maxPrice) where.pricePerDay = { ...where.pricePerDay, [Op.lte]: maxPrice };

  try {
    const equipment = await Equipment.findAll({ where });
    res.json({ equipment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch equipment' });
  }
});

// Get equipment by ID
router.get('/:id', async (req, res) => {
  try {
    const equipment = await Equipment.findByPk(req.params.id);
    if (!equipment) return res.status(404).json({ error: 'Equipment not found' });
    res.json({ equipment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch equipment' });
  }
});

// Create equipment (owner only)
router.post('/', authenticate, async (req, res) => {
  const { name, type, description, pricePerDay, location, availability, photos } = req.body;
  const ownerId = req.user.id;

  try {
    const equipment = await Equipment.create({
      ownerId,
      name,
      type,
      description,
      pricePerDay,
      location,
      availability,
      photos,
    });
    res.status(201).json({ equipment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create equipment' });
  }
});

// Update equipment (owner only)
router.put('/:id', authenticate, async (req, res) => {
  const { name, type, description, pricePerDay, location, availability, photos, status } = req.body;
  const equipmentId = req.params.id;
  const ownerId = req.user.id;

  try {
    const equipment = await Equipment.findOne({ where: { id: equipmentId, ownerId } });
    if (!equipment) return res.status(404).json({ error: 'Equipment not found or not owned by you' });

    equipment.name = name || equipment.name;
    equipment.type = type || equipment.type;
    equipment.description = description || equipment.description;
    equipment.pricePerDay = pricePerDay || equipment.pricePerDay;
    equipment.location = location || equipment.location;
    equipment.availability = availability || equipment.availability;
    equipment.photos = photos || equipment.photos;
    equipment.status = status || equipment.status;
    await equipment.save();

    res.json({ equipment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update equipment' });
  }
});

// Delete equipment (owner only)
router.delete('/:id', authenticate, async (req, res) => {
  const equipmentId = req.params.id;
  const ownerId = req.user.id;

  try {
    const equipment = await Equipment.findOne({ where: { id: equipmentId, ownerId } });
    if (!equipment) return res.status(404).json({ error: 'Equipment not found or not owned by you' });

    await equipment.destroy();
    res.json({ message: 'Equipment deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete equipment' });
  }
});

module.exports = router;
