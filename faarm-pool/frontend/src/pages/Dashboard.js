import React, { useEffect, useState } from 'react';
// import api from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [role, setRole] = useState('renter');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        // Enhanced mock data for demo
        if (role === 'owner') {
          setData({
            equipmentCount: 24,
            totalEarnings: 285000,
            activeBookings: 12,
            monthlyIncome: 65000,
            recentBookings: [
              { 
                id: 1, 
                Equipment: { name: 'John Deere 5050D Tractor' }, 
                status: 'confirmed',
                renterName: 'Rajesh Kumar',
                duration: '3 days',
                amount: 7500
              },
              { 
                id: 2, 
                Equipment: { name: 'Kubota Combine Harvester' }, 
                status: 'pending',
                renterName: 'Suresh Patel',
                duration: '2 days',
                amount: 9600
              },
              { 
                id: 3, 
                Equipment: { name: 'Mahindra Rice Transplanter' }, 
                status: 'completed',
                renterName: 'Vikram Singh',
                duration: '1 day',
                amount: 2800
              },
              { 
                id: 4, 
                Equipment: { name: 'Krone Big Pack Baler' }, 
                status: 'confirmed',
                renterName: 'Amit Sharma',
                duration: '2 days',
                amount: 6400
              },
              { 
                id: 5, 
                Equipment: { name: 'Mahindra Sugar Cane Harvester' }, 
                status: 'pending',
                renterName: 'Deepak Yadav',
                duration: '4 days',
                amount: 24000
              },
            ]
          });
        } else {
          setData({
            totalSpent: 87500,
            activeBookings: 5,
            totalBookings: 18,
            savedAmount: 15000,
            bookingHistory: [
              { 
                id: 1, 
                Equipment: { name: 'Farmtrac 60 Tractor' }, 
                status: 'confirmed',
                ownerName: 'Harpreet Singh',
                duration: '3 days',
                amount: 7800,
                date: '2025-09-15'
              },
              { 
                id: 2, 
                Equipment: { name: 'Claas Crop Sprayer' }, 
                status: 'completed',
                ownerName: 'Ravi Chandra',
                duration: '1 day',
                amount: 1500,
                date: '2025-09-10'
              },
              { 
                id: 3, 
                Equipment: { name: 'VST Shakti Reaper' }, 
                status: 'completed',
                ownerName: 'Mohan Lal',
                duration: '2 days',
                amount: 4800,
                date: '2025-09-08'
              },
              { 
                id: 4, 
                Equipment: { name: 'Indo Farm Laser Land Leveler' }, 
                status: 'pending',
                ownerName: 'Deepak Kumar',
                duration: '1 day',
                amount: 1100,
                date: '2025-09-18'
              },
              { 
                id: 5, 
                Equipment: { name: 'Shaktiman Potato Planter' }, 
                status: 'confirmed',
                ownerName: 'Ramesh Patel',
                duration: '2 days',
                amount: 2800,
                date: '2025-09-20'
              },
            ]
          });
        }
        setTimeout(() => setLoading(false), 800);
      } catch (error) {
        console.error('Failed to fetch dashboard');
        setLoading(false);
      }
    };
    fetchDashboard();
  }, [role]);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">
          <div className="spinner"></div>
          Loading dashboard...
        </div>
      </div>
    );
  }

  if (!data) return <div>Error loading dashboard</div>;

  return (
    <div className="dashboard">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button 
          onClick={() => setRole('renter')} 
          className={`btn ${role === 'renter' ? 'btn-primary' : 'btn-secondary'}`}
        >
          🚛 Renter Dashboard
        </button>
        <button 
          onClick={() => setRole('owner')} 
          className={`btn ${role === 'owner' ? 'btn-primary' : 'btn-secondary'}`}
        >
          🏭 Owner Dashboard
        </button>
      </div>
      
      <h2>📊 {role === 'owner' ? 'Equipment Owner' : 'Farmer Renter'} Dashboard</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        {role === 'owner' 
          ? 'Monitor your equipment performance and earnings' 
          : 'Track your rental history and upcoming bookings'
        }
      </p>
      
      {role === 'owner' ? (
        <div>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>🚜 Total Equipment</h3>
              <p className="stat-number">{data.equipmentCount}</p>
            </div>
            <div className="stat-card">
              <h3>💰 Total Earnings</h3>
              <p className="stat-number">₹{data.totalEarnings.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <h3>📅 Active Bookings</h3>
              <p className="stat-number">{data.activeBookings}</p>
            </div>
            <div className="stat-card">
              <h3>📈 Monthly Income</h3>
              <p className="stat-number">₹{data.monthlyIncome.toLocaleString()}</p>
            </div>
          </div>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>🔔 Recent Bookings</h3>
          <ul>
            {data.recentBookings.map(booking => (
              <li key={booking.id}>
                <div>
                  <strong>{booking.Equipment.name}</strong>
                  <br />
                  <small style={{ color: '#666' }}>
                    Renter: {booking.renterName} • {booking.duration} • ₹{booking.amount}
                  </small>
                </div>
                <span className={`status ${booking.status}`}>{booking.status}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>💳 Total Spent</h3>
              <p className="stat-number">₹{data.totalSpent.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <h3>📅 Active Bookings</h3>
              <p className="stat-number">{data.activeBookings}</p>
            </div>
            <div className="stat-card">
              <h3>📊 Total Bookings</h3>
              <p className="stat-number">{data.totalBookings}</p>
            </div>
            <div className="stat-card">
              <h3>💡 Money Saved</h3>
              <p className="stat-number">₹{data.savedAmount.toLocaleString()}</p>
            </div>
          </div>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>📋 Booking History</h3>
          <ul>
            {data.bookingHistory.map(booking => (
              <li key={booking.id}>
                <div>
                  <strong>{booking.Equipment.name}</strong>
                  <br />
                  <small style={{ color: '#666' }}>
                    Owner: {booking.ownerName} • {booking.duration} • {booking.date}
                  </small>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className={`status ${booking.status}`}>{booking.status}</span>
                  <br />
                  <small style={{ fontWeight: 'bold', color: '#38a169' }}>₹{booking.amount}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
