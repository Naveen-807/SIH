import React from 'react';

const Profile = () => {
  return (
    <div className="profile-page enhanced-card">
      <div className="profile-header">
        <h1>👤 User Profile</h1>
        <p>Manage your account and preferences</p>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue="Rajesh Kumar" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="rajesh.kumar@email.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" defaultValue="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" defaultValue="Ludhiana, Punjab" />
          </div>
        </div>

        <div className="profile-section">
          <h3>Farm Information</h3>
          <div className="form-group">
            <label>Farm Size (Acres)</label>
            <input type="number" defaultValue="25" />
          </div>
          <div className="form-group">
            <label>Primary Crops</label>
            <input type="text" defaultValue="Wheat, Rice, Cotton" />
          </div>
          <div className="form-group">
            <label>Farming Experience</label>
            <select defaultValue="5-10">
              <option value="0-2">0-2 years</option>
              <option value="2-5">2-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn btn-primary">Save Changes</button>
          <button className="btn btn-secondary">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
