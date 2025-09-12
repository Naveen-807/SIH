const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Equipment = sequelize.define('Equipment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false, // tractor, harvester, etc.
  },
  description: {
    type: DataTypes.TEXT,
  },
  pricePerDay: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.JSON, // array of dates or calendar
  },
  photos: {
    type: DataTypes.JSON, // array of photo URLs
  },
  status: {
    type: DataTypes.ENUM('available', 'booked', 'maintenance'),
    defaultValue: 'available',
  },
}, {
  timestamps: true,
});

module.exports = Equipment;
