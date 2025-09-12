const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('owner', 'renter'),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
  language: {
    type: DataTypes.STRING,
    defaultValue: 'en',
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  otp: {
    type: DataTypes.STRING,
  },
  otpExpires: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
});

module.exports = User;
