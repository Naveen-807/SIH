import React, { useState } from 'react';

const Messages = () => {
  const [messages] = useState([
    {
      id: 1,
      from: 'Singh Mechanicals',
      subject: 'Booking Confirmation - Tractor',
      message: 'Your booking for Mahindra 475 DI has been confirmed for Jan 15-18.',
      time: '2 hours ago',
      read: false,
      type: 'booking'
    },
    {
      id: 2,
      from: 'System',
      subject: 'Weather Alert',
      message: 'Heavy rain expected in your area. Consider postponing field operations.',
      time: '5 hours ago',
      read: true,
      type: 'alert'
    },
    {
      id: 3,
      from: 'Expert Dr. Sharma',
      subject: 'Crop Advisory Response',
      message: 'Based on your soil report, I recommend adjusting nitrogen levels...',
      time: '1 day ago',
      read: false,
      type: 'expert'
    }
  ]);

  return (
    <div className="messages-page enhanced-card">
      <div className="messages-header">
        <h1>📨 Messages & Notifications</h1>
        <p>Stay updated with bookings, alerts, and expert advice</p>
      </div>
      
      <div className="messages-content">
        <div className="messages-filters">
          <button className="filter-btn active">All Messages</button>
          <button className="filter-btn">Bookings</button>
          <button className="filter-btn">Alerts</button>
          <button className="filter-btn">Expert Advice</button>
        </div>

        <div className="messages-list">
          {messages.map(message => (
            <div key={message.id} className={`message-item ${!message.read ? 'unread' : ''}`}>
              <div className="message-icon">
                {message.type === 'booking' && '📅'}
                {message.type === 'alert' && '⚠️'}
                {message.type === 'expert' && '👨‍🔬'}
              </div>
              <div className="message-content">
                <div className="message-header">
                  <span className="message-from">{message.from}</span>
                  <span className="message-time">{message.time}</span>
                </div>
                <h4 className="message-subject">{message.subject}</h4>
                <p className="message-preview">{message.message}</p>
              </div>
              <div className="message-actions">
                <button className="btn btn-sm">Reply</button>
                <button className="btn btn-sm">Mark Read</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
