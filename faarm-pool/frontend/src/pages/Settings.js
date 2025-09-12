import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      bookingUpdates: true,
      weatherAlerts: true,
      priceChanges: false,
      expertAdvice: true,
      systemUpdates: false
    },
    preferences: {
      language: 'English',
      currency: 'INR',
      units: 'Metric',
      theme: 'Light'
    },
    privacy: {
      profileVisibility: 'Public',
      contactSharing: false,
      locationSharing: true,
      analyticsOptIn: true
    }
  });

  const handleNotificationChange = (key) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handlePreferenceChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: typeof value === 'boolean' ? value : value
      }
    }));
  };

  return (
    <div className="settings-page enhanced-card">
      <div className="settings-header">
        <h1>⚙️ Settings & Preferences</h1>
        <p>Customize your experience and manage your account settings</p>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h3>🔔 Notification Settings</h3>
          <div className="settings-group">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="setting-item">
                <label className="setting-label">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                <div className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={value} 
                    onChange={() => handleNotificationChange(key)}
                  />
                  <span className="toggle-slider"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="settings-section">
          <h3>🌐 General Preferences</h3>
          <div className="settings-group">
            <div className="setting-item">
              <label className="setting-label">Language</label>
              <select 
                value={settings.preferences.language}
                onChange={(e) => handlePreferenceChange('language', e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
                <option value="Punjabi">ਪੰਜਾਬੀ</option>
                <option value="Gujarati">ગુજરાતી</option>
              </select>
            </div>
            
            <div className="setting-item">
              <label className="setting-label">Currency</label>
              <select 
                value={settings.preferences.currency}
                onChange={(e) => handlePreferenceChange('currency', e.target.value)}
              >
                <option value="INR">Indian Rupee (₹)</option>
                <option value="USD">US Dollar ($)</option>
              </select>
            </div>
            
            <div className="setting-item">
              <label className="setting-label">Units</label>
              <select 
                value={settings.preferences.units}
                onChange={(e) => handlePreferenceChange('units', e.target.value)}
              >
                <option value="Metric">Metric (km, kg, °C)</option>
                <option value="Imperial">Imperial (miles, lbs, °F)</option>
              </select>
            </div>
            
            <div className="setting-item">
              <label className="setting-label">Theme</label>
              <select 
                value={settings.preferences.theme}
                onChange={(e) => handlePreferenceChange('theme', e.target.value)}
              >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Auto">Auto</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>🔐 Privacy & Security</h3>
          <div className="settings-group">
            <div className="setting-item">
              <label className="setting-label">Profile Visibility</label>
              <select 
                value={settings.privacy.profileVisibility}
                onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="Friends">Friends Only</option>
              </select>
            </div>
            
            <div className="setting-item">
              <label className="setting-label">Share Contact Information</label>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.privacy.contactSharing} 
                  onChange={(e) => handlePrivacyChange('contactSharing', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>
            
            <div className="setting-item">
              <label className="setting-label">Location Sharing</label>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.privacy.locationSharing} 
                  onChange={(e) => handlePrivacyChange('locationSharing', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>
            
            <div className="setting-item">
              <label className="setting-label">Analytics & Improvements</label>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.privacy.analyticsOptIn} 
                  onChange={(e) => handlePrivacyChange('analyticsOptIn', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>🔧 Account Management</h3>
          <div className="settings-group">
            <button className="btn btn-secondary">Change Password</button>
            <button className="btn btn-secondary">Export Data</button>
            <button className="btn btn-secondary">Download Report</button>
            <button className="btn btn-warning">Deactivate Account</button>
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn btn-primary">Save All Settings</button>
          <button className="btn btn-secondary">Reset to Defaults</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
