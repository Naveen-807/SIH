import React, { useState } from 'react';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    // Load bookings data
    setBookings([
      {
        id: 'BK001',
        equipment: 'Mahindra 475 DI Tractor',
        customer: 'Rajesh Kumar',
        contact: '+91 98765 43210',
        location: 'Ludhiana, Punjab',
        startDate: '2024-01-15',
        endDate: '2024-01-18',
        duration: '4 days',
        amount: 12000,
        status: 'confirmed',
        paymentStatus: 'paid',
        equipmentImage: '🚜',
        purpose: 'Field Preparation',
        notes: 'Need early morning delivery at 6 AM'
      },
      {
        id: 'BK002',
        equipment: 'John Deere 5050E',
        customer: 'Priya Patel',
        contact: '+91 87654 32109',
        location: 'Ahmedabad, Gujarat',
        startDate: '2024-01-16',
        endDate: '2024-01-20',
        duration: '5 days',
        amount: 15000,
        status: 'pending',
        paymentStatus: 'pending',
        equipmentImage: '🚜',
        purpose: 'Harvesting',
        notes: 'Customer will arrange fuel'
      },
      {
        id: 'BK003',
        equipment: 'Class Lexion 780 Harvester',
        customer: 'Suresh Singh',
        contact: '+91 76543 21098',
        location: 'Amritsar, Punjab',
        startDate: '2024-01-17',
        endDate: '2024-01-19',
        duration: '3 days',
        amount: 45000,
        status: 'in-progress',
        paymentStatus: 'paid',
        equipmentImage: '🌾',
        purpose: 'Wheat Harvesting',
        notes: 'Experienced operator required'
      },
      {
        id: 'BK004',
        equipment: 'Swaraj 855 FE',
        customer: 'Meera Sharma',
        contact: '+91 65432 10987',
        location: 'Jaipur, Rajasthan',
        startDate: '2024-01-18',
        endDate: '2024-01-22',
        duration: '5 days',
        amount: 18000,
        status: 'completed',
        paymentStatus: 'paid',
        equipmentImage: '🚜',
        purpose: 'Plowing',
        notes: 'Very satisfied with service'
      },
      {
        id: 'BK005',
        equipment: 'New Holland 3600-2',
        customer: 'Amit Verma',
        contact: '+91 54321 09876',
        location: 'Meerut, UP',
        startDate: '2024-01-20',
        endDate: '2024-01-23',
        duration: '4 days',
        amount: 14000,
        status: 'cancelled',
        paymentStatus: 'refunded',
        equipmentImage: '🚜',
        purpose: 'Cultivation',
        notes: 'Cancelled due to weather conditions'
      },
      {
        id: 'BK006',
        equipment: 'Kubota M7040',
        customer: 'Sunita Devi',
        contact: '+91 43210 98765',
        location: 'Faridabad, Haryana',
        startDate: '2024-01-21',
        endDate: '2024-01-24',
        duration: '4 days',
        amount: 16000,
        status: 'confirmed',
        paymentStatus: 'partial',
        equipmentImage: '🚜',
        purpose: 'Seeding',
        notes: 'Advance payment received'
      }
    ]);
  }, []);

  useEffect(() => {
    // Filter bookings based on status
    if (filterStatus === 'all') {
      setFilteredBookings(bookings);
    } else {
      setFilteredBookings(bookings.filter(booking => booking.status === filterStatus));
    }
  }, [bookings, filterStatus]);

  const getStatusColor = (status) => {
    const colors = {
      'confirmed': '#10B981',
      'pending': '#F59E0B',
      'in-progress': '#3B82F6',
      'completed': '#8B5CF6',
      'cancelled': '#EF4444'
    };
    return colors[status] || '#6B7280';
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      'paid': '#10B981',
      'pending': '#F59E0B',
      'partial': '#3B82F6',
      'refunded': '#6B7280'
    };
    return colors[status] || '#6B7280';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const renderCalendarView = () => {
    // Simple calendar representation
    const daysInMonth = 31;
    const startDay = 1; // Monday
    const calendarDays = [];

    // Add empty cells for days before month start
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add days with bookings
    for (let day = 1; day <= daysInMonth; day++) {
      const dayBookings = bookings.filter(booking => {
        const bookingDate = new Date(booking.startDate);
        return bookingDate.getDate() === day;
      });

      calendarDays.push(
        <div key={day} className={`calendar-day ${dayBookings.length > 0 ? 'has-bookings' : ''}`}>
          <span className="day-number">{day}</span>
          {dayBookings.map((booking, index) => (
            <div 
              key={index} 
              className="calendar-booking"
              style={{ backgroundColor: getStatusColor(booking.status) }}
              title={`${booking.equipment} - ${booking.customer}`}
            >
              <span className="booking-time">
                {booking.equipment.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="calendar-container">
        <div className="calendar-header">
          <h3>📅 January 2024</h3>
          <div className="calendar-nav">
            <button className="nav-btn">‹</button>
            <button className="nav-btn">›</button>
          </div>
        </div>
        
        <div className="calendar-weekdays">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        
        <div className="calendar-grid">
          {calendarDays}
        </div>
        
        <div className="calendar-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#10B981' }}></div>
            <span>Confirmed</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#F59E0B' }}></div>
            <span>Pending</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#3B82F6' }}></div>
            <span>In Progress</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#8B5CF6' }}></div>
            <span>Completed</span>
          </div>
        </div>
      </div>
    );
  };

  const renderBookingsList = () => (
    <div className="bookings-list">
      <div className="list-header">
        <h3>📋 All Bookings</h3>
        <div className="list-filters">
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className="btn btn-primary" onClick={() => setShowBookingModal(true)}>
            ➕ New Booking
          </button>
        </div>
      </div>

      <div className="bookings-grid">
        {filteredBookings.map(booking => (
          <div key={booking.id} className="booking-card">
            <div className="booking-header">
              <div className="booking-id">#{booking.id}</div>
              <div className="booking-status">
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(booking.status) }}
                >
                  {booking.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </div>

            <div className="booking-equipment">
              <span className="equipment-icon">{booking.equipmentImage}</span>
              <div className="equipment-details">
                <h4>{booking.equipment}</h4>
                <p>{booking.purpose}</p>
              </div>
            </div>

            <div className="booking-customer">
              <div className="customer-info">
                <span className="customer-icon">👤</span>
                <div>
                  <strong>{booking.customer}</strong>
                  <p>📍 {booking.location}</p>
                  <p>📞 {booking.contact}</p>
                </div>
              </div>
            </div>

            <div className="booking-dates">
              <div className="date-range">
                <span className="date-label">📅 Duration:</span>
                <span className="date-value">{booking.startDate} to {booking.endDate}</span>
                <span className="duration">({booking.duration})</span>
              </div>
            </div>

            <div className="booking-payment">
              <div className="amount">
                <span className="amount-label">Amount:</span>
                <span className="amount-value">{formatCurrency(booking.amount)}</span>
              </div>
              <div className="payment-status">
                <span 
                  className="payment-badge"
                  style={{ backgroundColor: getPaymentStatusColor(booking.paymentStatus) }}
                >
                  {booking.paymentStatus.toUpperCase()}
                </span>
              </div>
            </div>

            {booking.notes && (
              <div className="booking-notes">
                <span className="notes-icon">📝</span>
                <p>{booking.notes}</p>
              </div>
            )}

            <div className="booking-actions">
              <button className="action-btn view">👁️ View</button>
              <button className="action-btn edit">✏️ Edit</button>
              {booking.status === 'pending' && (
                <button className="action-btn confirm">✅ Confirm</button>
              )}
              {booking.status === 'confirmed' && (
                <button className="action-btn start">🚀 Start</button>
              )}
              {booking.status === 'in-progress' && (
                <button className="action-btn complete">🏁 Complete</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStatusOverview = () => {
    const statusCounts = bookings.reduce((acc, booking) => {
      acc[booking.status] = (acc[booking.status] || 0) + 1;
      return acc;
    }, {});

    const totalRevenue = bookings
      .filter(b => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + b.amount, 0);

    const pendingRevenue = bookings
      .filter(b => b.paymentStatus === 'pending')
      .reduce((sum, b) => sum + b.amount, 0);

    return (
      <div className="status-overview">
        <h3>📊 Booking Overview</h3>
        
        <div className="overview-stats">
          <div className="stat-card total">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <span className="stat-value">{bookings.length}</span>
              <span className="stat-label">Total Bookings</span>
            </div>
          </div>

          <div className="stat-card revenue">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <span className="stat-value">{formatCurrency(totalRevenue)}</span>
              <span className="stat-label">Confirmed Revenue</span>
            </div>
          </div>

          <div className="stat-card pending-revenue">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <span className="stat-value">{formatCurrency(pendingRevenue)}</span>
              <span className="stat-label">Pending Revenue</span>
            </div>
          </div>
        </div>

        <div className="status-breakdown">
          <h4>Status Breakdown</h4>
          <div className="status-items">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="status-item">
                <div 
                  className="status-indicator"
                  style={{ backgroundColor: getStatusColor(status) }}
                ></div>
                <span className="status-name">{status.replace('-', ' ')}</span>
                <span className="status-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderBookingModal = () => {
    if (!showBookingModal) return null;

    return (
      <div className="modal-overlay">
        <div className="booking-modal">
          <div className="modal-header">
            <h3>➕ Create New Booking</h3>
            <button 
              className="close-btn"
              onClick={() => setShowBookingModal(false)}
            >
              ✕
            </button>
          </div>
          
          <div className="modal-content">
            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Customer Name</label>
                  <input type="text" placeholder="Enter customer name" />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Equipment</label>
                  <select>
                    <option>Select Equipment</option>
                    <option>Mahindra 475 DI Tractor</option>
                    <option>John Deere 5050E</option>
                    <option>Class Lexion 780 Harvester</option>
                    <option>Swaraj 855 FE</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Purpose</label>
                  <select>
                    <option>Select Purpose</option>
                    <option>Field Preparation</option>
                    <option>Harvesting</option>
                    <option>Plowing</option>
                    <option>Seeding</option>
                    <option>Cultivation</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="date" />
                </div>
              </div>

              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Enter complete address" />
              </div>

              <div className="form-group">
                <label>Special Notes</label>
                <textarea placeholder="Any special requirements or notes"></textarea>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowBookingModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bookings-page">
      <div className="bookings-header">
        <h1>📅 Booking Management</h1>
        <p>Manage all your equipment bookings and schedules</p>
      </div>

      <div className="bookings-tabs">
        <button 
          className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          📅 Calendar View
        </button>
        <button 
          className={`tab-btn ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          📋 List View
        </button>
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Overview
        </button>
      </div>

      <div className="bookings-content">
        {activeTab === 'calendar' && renderCalendarView()}
        {activeTab === 'list' && renderBookingsList()}
        {activeTab === 'overview' && renderStatusOverview()}
      </div>

      {renderBookingModal()}
    </div>
  );
};

export default Bookings;
