const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const sequelize = require('./config/database');

// Test database connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Models
const User = require('./models/User');
const Equipment = require('./models/Equipment');
const Booking = require('./models/Booking');

// Associations
User.hasMany(Equipment, { foreignKey: 'ownerId' });
Equipment.belongsTo(User, { foreignKey: 'ownerId' });
Equipment.hasMany(Booking, { foreignKey: 'equipmentId' });
Booking.belongsTo(Equipment, { foreignKey: 'equipmentId' });
User.hasMany(Booking, { foreignKey: 'renterId' });
Booking.belongsTo(User, { foreignKey: 'renterId' });

// Sync database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Faarm Pool API' });
});

// Auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Equipment routes
const equipmentRoutes = require('./routes/equipment');
app.use('/api/equipment', equipmentRoutes);

// Booking routes
const bookingRoutes = require('./routes/booking');
app.use('/api/booking', bookingRoutes);

// Payment routes
const paymentRoutes = require('./routes/payment');
app.use('/api/payment', paymentRoutes);

// Dashboard routes
const dashboardRoutes = require('./routes/dashboard');
app.use('/api/dashboard', dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
