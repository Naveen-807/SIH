# 🌾 Farm Equipment Rental Platform

A comprehensive agricultural equipment rental platform built with React.js, featuring modern UI design and complete farm management tools.

## 🚀 Features

### 🏪 **Marketplace**
- Browse and search agricultural equipment
- Advanced filtering by category, location, and price
- Detailed equipment specifications and ratings
- Real-time availability status

### 🚜 **Equipment Management**
- 24+ types of farm equipment (tractors, harvesters, irrigation systems)
- Detailed specifications with technical data
- Multiple pricing tiers (daily/weekly/monthly)
- Owner information and contact details

### 📊 **Dashboard & Analytics**
- Revenue tracking and business metrics
- Equipment utilization statistics
- User growth analytics
- Interactive charts and visualizations

### 📅 **Booking System**
- Calendar-based booking management
- Real-time booking status tracking
- Payment integration
- Booking history and management

### 🌤️ **Weather Integration**
- Current weather conditions
- 7-day agricultural forecasts
- Farming alerts and recommendations
- Weather-based equipment suggestions

### 👥 **Community Features**
- Farmer forums and discussions
- Expert advice and knowledge sharing
- Agricultural news and updates
- Community-driven content

### 👤 **User Management**
- Profile management with farm details
- Message system for bookings and support
- Notification preferences
- Privacy and security settings

## 🎨 Design Features

- **Modern Glassmorphism UI** with smooth animations
- **Responsive Design** for mobile and desktop
- **Professional Color Scheme** with agricultural themes
- **Interactive Elements** with hover effects and transitions
- **Accessibility** with proper focus states and navigation

## 🛠️ Technology Stack

- **Frontend**: React.js with React Router
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Emoji-based icon system
- **Fonts**: Google Fonts (Poppins)
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 Project Structure

```
faarm-pool/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── database.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Booking.js
│   │   ├── Equipment.js
│   │   └── User.js
│   └── routes/
│       ├── auth.js
│       ├── booking.js
│       ├── dashboard.js
│       ├── equipment.js
│       └── payment.js
└── frontend/
    ├── package.json
    ├── public/
    └── src/
        ├── App.js
        ├── App.css
        ├── components/
        ├── pages/
        │   ├── Analytics.js
        │   ├── Bookings.js
        │   ├── Community.js
        │   ├── Dashboard.js
        │   ├── EquipmentList.js
        │   ├── Login.js
        │   ├── Marketplace.js
        │   ├── Messages.js
        │   ├── News.js
        │   ├── Profile.js
        │   ├── Settings.js
        │   └── Weather.js
        ├── services/
        │   └── api.js
        └── utils/
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/farm-equipment-rental.git
   cd farm-equipment-rental
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Start the Development Servers**

   **Frontend (React):**
   ```bash
   cd frontend
   npm start
   ```
   Runs on: http://localhost:3000

   **Backend (Node.js):**
   ```bash
   cd backend
   npm start
   ```
   Runs on: http://localhost:5000

## 🎯 Available Pages

1. **🏪 Marketplace** - Browse and purchase farm products
2. **🚜 Equipment** - Comprehensive equipment rental catalog
3. **📊 Dashboard** - Business analytics and overview
4. **📅 Bookings** - Manage equipment reservations
5. **👥 Community** - Forums and expert advice
6. **🌤️ Weather** - Agricultural weather forecasts
7. **📈 Analytics** - Detailed business metrics
8. **📰 News** - Agricultural industry updates
9. **👤 Profile** - User account management
10. **💬 Messages** - Communication system
11. **⚙️ Settings** - Preferences and configuration

## 🎨 UI Features

- **Glassmorphism Design**: Modern translucent effects with backdrop blur
- **Smooth Animations**: CSS transitions and hover effects
- **Responsive Layout**: Mobile-first design approach
- **Interactive Cards**: Equipment cards with detailed specifications
- **Modal Dialogs**: Detailed views with overlay system
- **Form Components**: Styled inputs with focus states
- **Navigation System**: Active states with visual indicators

## 🔧 Customization

### Color Scheme
The project uses CSS variables for easy theming:
```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  /* ... more variables */
}
```

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 📱 Mobile Support

The platform is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1200px+)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Team

- **Developer**: Your Name
- **Design**: UI/UX Team
- **Project**: Smart India Hackathon 2025

## 🙏 Acknowledgments

- React.js community for the amazing framework
- Google Fonts for typography
- Agricultural community for domain expertise
- Smart India Hackathon organizers

## 📧 Contact

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

**Built with ❤️ for farmers and agricultural communities**
