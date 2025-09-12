import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EquipmentList from './pages/EquipmentList';
import Marketplace from './pages/Marketplace';
import Weather from './pages/Weather';
import Community from './pages/Community';
import Analytics from './pages/Analytics';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import News from './pages/News';
import Settings from './pages/Settings';
import './App.css';

function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/marketplace', icon: '🏪', label: 'Marketplace', badge: 'Hot' },
    { path: '/equipment', icon: '🚜', label: 'Equipment', badge: null },
    { path: '/dashboard', icon: '📊', label: 'Dashboard', badge: null },
    { path: '/bookings', icon: '📅', label: 'Bookings', badge: '3' },
    { path: '/community', icon: '👥', label: 'Community', badge: 'New' },
    { path: '/weather', icon: '🌤️', label: 'Weather', badge: null },
    { path: '/analytics', icon: '📈', label: 'Analytics', badge: null },
    { path: '/news', icon: '📰', label: 'News', badge: '5' }
  ];

  return (
    <div className="nav-container">
      <div className="nav-tabs">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`nav-tab ${location.pathname === item.path || (item.path === '/marketplace' && location.pathname === '/') ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge && (
              <span className={`nav-badge ${item.badge === 'Hot' || item.badge === 'New' ? 'nav-badge-special' : 'nav-badge-count'}`}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
      
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-label">{item.label}</span>
                {item.badge && <span className="mobile-nav-badge">{item.badge}</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NotificationBell() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New booking request for John Deere 5050D", time: "2 min ago", type: "booking", unread: true },
    { id: 2, message: "Weather alert: Heavy rain expected tomorrow", time: "1 hour ago", type: "weather", unread: true },
    { id: 3, message: "Payment received: ₹2,500 from Rajesh Kumar", time: "3 hours ago", type: "payment", unread: false },
    { id: 4, message: "New review: 5 stars for your Mahindra Tractor", time: "1 day ago", type: "review", unread: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'booking': return '📅';
      case 'weather': return '🌦️';
      case 'payment': return '💰';
      case 'review': return '⭐';
      default: return '🔔';
    }
  };

  return (
    <div className="notification-container">
      <button 
        className="notification-bell"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        🔔
        {unreadCount > 0 && (
          <span className="notification-count">{unreadCount}</span>
        )}
      </button>
      
      {showNotifications && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h3>Notifications</h3>
            <button onClick={() => setNotifications(notifications.map(n => ({ ...n, unread: false })))}>
              Mark All Read
            </button>
          </div>
          <div className="notification-list">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`notification-item ${notif.unread ? 'unread' : ''}`}
                onClick={() => markAsRead(notif.id)}
              >
                <div className="notification-icon">{getNotificationIcon(notif.type)}</div>
                <div className="notification-content">
                  <p>{notif.message}</p>
                  <span className="notification-time">{notif.time}</span>
                </div>
                <button 
                  className="notification-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setNotifications(notifications.filter(n => n.id !== notif.id));
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function UserProfile() {
  const [user] = useState({
    name: "Rajesh Kumar",
    location: "Punjab, India",
    avatar: "�‍🌾",
    farmSize: "25 acres",
    crops: ["Wheat", "Rice", "Corn"],
    rating: 4.8,
    totalBookings: 127
  });

  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="user-profile-container">
      <button 
        className="user-profile-btn"
        onClick={() => setShowProfile(!showProfile)}
      >
        <span className="user-avatar">{user.avatar}</span>
        <span className="user-name">{user.name}</span>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {showProfile && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <div className="profile-avatar">{user.avatar}</div>
            <div className="profile-info">
              <h4>{user.name}</h4>
              <p>📍 {user.location}</p>
              <p>🌾 {user.farmSize} • {user.crops.join(', ')}</p>
              <p>⭐ {user.rating} ({user.totalBookings} bookings)</p>
            </div>
          </div>
          <div className="profile-menu">
            <Link to="/profile" className="profile-menu-item">
              👤 My Profile
            </Link>
            <Link to="/settings" className="profile-menu-item">
              ⚙️ Settings
            </Link>
            <Link to="/messages" className="profile-menu-item">
              💬 Messages
            </Link>
            <div className="profile-menu-item logout">
              🚪 Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Online/Offline detection
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <Router>
      <div className="App">
        {/* Offline Banner */}
        {!isOnline && (
          <div className="offline-banner">
            🚫 You're offline. Some features may not work properly.
          </div>
        )}
        
        <header>
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">🌾</div>
              <div>
                <h1>Faarm Pool</h1>
                <div className="tagline">India's Leading Agricultural Equipment Marketplace</div>
              </div>
            </div>
          </div>
          
          <div className="header-actions">
            <NotificationBell />
            <UserProfile />
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>
        
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/equipment" element={<EquipmentList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/community" element={<Community />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        
        {/* Floating Action Buttons */}
        <div className="floating-actions">
          <button className="fab fab-primary" title="Quick Book">
            📅
          </button>
          <button className="fab fab-secondary" title="Help & Support">
            💬
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
