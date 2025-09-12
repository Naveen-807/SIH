import React, { useState } from 'react';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [cropAdvice, setCropAdvice] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [location, setLocation] = useState('Punjab, India');

  useEffect(() => {
    // Simulate weather data
    setCurrentWeather({
      temperature: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      pressure: 1013,
      uvIndex: 6,
      visibility: 10,
      dewPoint: 20,
      icon: '⛅',
      lastUpdated: new Date().toLocaleTimeString()
    });

    // 7-day forecast
    setForecast([
      { day: 'Today', icon: '⛅', high: 28, low: 18, rain: 20, condition: 'Partly Cloudy' },
      { day: 'Tomorrow', icon: '🌧️', high: 25, low: 16, rain: 80, condition: 'Heavy Rain' },
      { day: 'Friday', icon: '🌦️', high: 24, low: 15, rain: 60, condition: 'Light Rain' },
      { day: 'Saturday', icon: '☀️', high: 30, low: 20, rain: 10, condition: 'Sunny' },
      { day: 'Sunday', icon: '☀️', high: 32, low: 22, rain: 5, condition: 'Clear Sky' },
      { day: 'Monday', icon: '⛅', high: 29, low: 19, rain: 15, condition: 'Partly Cloudy' },
      { day: 'Tuesday', icon: '🌧️', high: 26, low: 17, rain: 70, condition: 'Showers' }
    ]);

    // Crop advice based on weather
    setCropAdvice([
      {
        id: 1,
        crop: 'Wheat',
        stage: 'Harvesting',
        advice: 'Perfect weather for harvesting! Clear skies expected this weekend.',
        priority: 'high',
        action: 'Harvest immediately',
        icon: '🌾'
      },
      {
        id: 2,
        crop: 'Rice',
        stage: 'Transplanting',
        advice: 'Heavy rain tomorrow - ideal for rice transplanting operations.',
        priority: 'medium',
        action: 'Prepare for transplanting',
        icon: '🌾'
      },
      {
        id: 3,
        crop: 'Cotton',
        stage: 'Flowering',
        advice: 'High humidity may increase pest risk. Monitor closely.',
        priority: 'medium',
        action: 'Pest monitoring',
        icon: '🌸'
      },
      {
        id: 4,
        crop: 'Sugarcane',
        stage: 'Growing',
        advice: 'Adequate moisture levels. Continue regular irrigation schedule.',
        priority: 'low',
        action: 'Maintain irrigation',
        icon: '🎋'
      }
    ]);

    // Weather alerts
    setAlerts([
      {
        id: 1,
        type: 'warning',
        title: 'Heavy Rainfall Alert',
        message: 'Expected 50-80mm rainfall tomorrow. Postpone spraying activities.',
        validUntil: 'Tomorrow 6 PM',
        icon: '⚠️'
      },
      {
        id: 2,
        type: 'info',
        title: 'UV Index High',
        message: 'UV index 8+ expected. Use sun protection during field work.',
        validUntil: 'Today 6 PM',
        icon: '☀️'
      }
    ]);
  }, []);

  const getConditionIcon = (condition) => {
    const icons = {
      'Sunny': '☀️',
      'Clear Sky': '☀️',
      'Partly Cloudy': '⛅',
      'Cloudy': '☁️',
      'Light Rain': '🌦️',
      'Heavy Rain': '🌧️',
      'Showers': '🌧️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Fog': '🌫️'
    };
    return icons[condition] || '⛅';
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  const getAlertClass = (type) => {
    switch(type) {
      case 'warning': return 'alert-warning';
      case 'danger': return 'alert-danger';
      case 'info': return 'alert-info';
      default: return 'alert-info';
    }
  };

  if (!currentWeather) {
    return (
      <div className="weather-loading">
        <div className="spinner"></div>
        <p>Loading weather data...</p>
      </div>
    );
  }

  return (
    <div className="weather-page">
      {/* Header */}
      <div className="weather-header">
        <div className="weather-title">
          <h1>🌤️ Agricultural Weather Center</h1>
          <p>Real-time weather insights for smart farming decisions</p>
        </div>
        <div className="location-selector">
          <span className="location-icon">📍</span>
          <select 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            className="location-dropdown"
          >
            <option value="Punjab, India">Punjab, India</option>
            <option value="Haryana, India">Haryana, India</option>
            <option value="Uttar Pradesh, India">Uttar Pradesh, India</option>
            <option value="Maharashtra, India">Maharashtra, India</option>
            <option value="Gujarat, India">Gujarat, India</option>
            <option value="Rajasthan, India">Rajasthan, India</option>
          </select>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="weather-alerts">
          {alerts.map(alert => (
            <div key={alert.id} className={`weather-alert ${getAlertClass(alert.type)}`}>
              <div className="alert-icon">{alert.icon}</div>
              <div className="alert-content">
                <h4>{alert.title}</h4>
                <p>{alert.message}</p>
                <small>Valid until: {alert.validUntil}</small>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Current Weather */}
      <div className="current-weather">
        <div className="weather-main">
          <div className="weather-icon-large">{currentWeather.icon}</div>
          <div className="weather-temp">
            <span className="temp-value">{currentWeather.temperature}°</span>
            <span className="temp-unit">C</span>
          </div>
          <div className="weather-condition">
            <h3>{currentWeather.condition}</h3>
            <p>Last updated: {currentWeather.lastUpdated}</p>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="weather-detail-item">
            <span className="detail-icon">💧</span>
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{currentWeather.humidity}%</span>
          </div>
          <div className="weather-detail-item">
            <span className="detail-icon">💨</span>
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{currentWeather.windSpeed} km/h</span>
          </div>
          <div className="weather-detail-item">
            <span className="detail-icon">🌡️</span>
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{currentWeather.pressure} hPa</span>
          </div>
          <div className="weather-detail-item">
            <span className="detail-icon">☀️</span>
            <span className="detail-label">UV Index</span>
            <span className="detail-value">{currentWeather.uvIndex}</span>
          </div>
          <div className="weather-detail-item">
            <span className="detail-icon">👁️</span>
            <span className="detail-label">Visibility</span>
            <span className="detail-value">{currentWeather.visibility} km</span>
          </div>
          <div className="weather-detail-item">
            <span className="detail-icon">💦</span>
            <span className="detail-label">Dew Point</span>
            <span className="detail-value">{currentWeather.dewPoint}°C</span>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="forecast-section">
        <h2>📅 7-Day Forecast</h2>
        <div className="forecast-grid">
          {forecast.map((day, index) => (
            <div key={index} className="forecast-card">
              <div className="forecast-day">{day.day}</div>
              <div className="forecast-icon">{day.icon}</div>
              <div className="forecast-condition">{day.condition}</div>
              <div className="forecast-temps">
                <span className="temp-high">{day.high}°</span>
                <span className="temp-low">{day.low}°</span>
              </div>
              <div className="forecast-rain">
                <span className="rain-icon">🌧️</span>
                <span className="rain-chance">{day.rain}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crop Advice */}
      <div className="crop-advice-section">
        <h2>🌾 Crop Advisory</h2>
        <p>Weather-based recommendations for your crops</p>
        <div className="crop-advice-grid">
          {cropAdvice.map(advice => (
            <div key={advice.id} className={`crop-advice-card ${getPriorityColor(advice.priority)}`}>
              <div className="advice-header">
                <div className="crop-icon">{advice.icon}</div>
                <div className="crop-info">
                  <h4>{advice.crop}</h4>
                  <span className="crop-stage">{advice.stage}</span>
                </div>
                <div className={`priority-badge ${getPriorityColor(advice.priority)}`}>
                  {advice.priority.toUpperCase()}
                </div>
              </div>
              <p className="advice-text">{advice.advice}</p>
              <div className="advice-action">
                <strong>Recommended Action:</strong> {advice.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Tools */}
      <div className="weather-tools">
        <h2>🛠️ Agricultural Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">📊</div>
            <h3>Irrigation Calculator</h3>
            <p>Calculate optimal irrigation based on weather forecast</p>
            <button className="btn tool-btn">Calculate</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🌱</div>
            <h3>Planting Calendar</h3>
            <p>Get the best planting dates for your crops</p>
            <button className="btn tool-btn">View Calendar</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🔬</div>
            <h3>Disease Predictor</h3>
            <p>Predict disease risk based on weather conditions</p>
            <button className="btn tool-btn">Check Risk</button>
          </div>
          <div className="tool-card">
            <div className="tool-icon">📈</div>
            <h3>Yield Estimator</h3>
            <p>Estimate crop yield based on weather patterns</p>
            <button className="btn tool-btn">Estimate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
