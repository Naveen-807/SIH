import React, { useState } from 'react';

const Marketplace = () => {
  const [stats, setStats] = useState({
    totalEquipment: 2500,
    activeUsers: 15000,
    totalBookings: 45000,
    avgSavings: 35
  });

  const [featuredEquipment, setFeaturedEquipment] = useState([]);
  const [categories, setCategories] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Load featured equipment
    setFeaturedEquipment([
      {
        id: 1,
        name: 'John Deere 5050D Premium',
        type: 'Tractor',
        pricePerDay: 2500,
        rating: 4.9,
        location: 'Punjab',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
        discount: 15,
        featured: true
      },
      {
        id: 2,
        name: 'Kubota Combine Harvester Pro',
        type: 'Harvester',
        pricePerDay: 4800,
        rating: 4.8,
        location: 'Haryana',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
        discount: 20,
        featured: true
      },
      {
        id: 3,
        name: 'Mahindra Smart Seeder',
        type: 'Seeder',
        pricePerDay: 1200,
        rating: 4.7,
        location: 'UP',
        image: 'https://images.unsplash.com/photo-1566754844954-2f1b45b8abc0?w=400&h=300&fit=crop',
        discount: 10,
        featured: true
      }
    ]);

    // Load categories
    setCategories([
      { name: 'Tractors', icon: '🚜', count: 450, trending: true },
      { name: 'Harvesters', icon: '🌾', count: 180, trending: true },
      { name: 'Seeders', icon: '🌱', count: 320, trending: false },
      { name: 'Sprayers', icon: '💧', count: 220, trending: false },
      { name: 'Cultivators', icon: '🔱', count: 290, trending: false },
      { name: 'Ploughs', icon: '🔧', count: 380, trending: false },
      { name: 'Threshers', icon: '⚡', count: 150, trending: true },
      { name: 'Balers', icon: '📦', count: 95, trending: false }
    ]);

    // Load testimonials
    setTestimonials([
      {
        id: 1,
        name: 'Ramesh Patel',
        location: 'Gujarat',
        message: 'Faarm Pool has revolutionized my farming. I save 40% on equipment costs!',
        rating: 5,
        crop: 'Cotton Farmer'
      },
      {
        id: 2,
        name: 'Priya Singh',
        location: 'Punjab',
        message: 'Amazing platform! Found exactly what I needed for my wheat harvest.',
        rating: 5,
        crop: 'Wheat Farmer'
      },
      {
        id: 3,
        name: 'Suresh Kumar',
        location: 'Tamil Nadu',
        message: 'Quick booking, reliable equipment, great owners. Highly recommended!',
        rating: 5,
        crop: 'Rice Farmer'
      }
    ]);
  }, []);

  return (
    <div className="marketplace">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Transform Your Farming with 
                <span className="highlight"> Smart Equipment Sharing</span>
              </h1>
              <p className="hero-subtitle">
                Access premium agricultural machinery from trusted farmers across India. 
                Save money, increase productivity, and grow sustainably.
              </p>
              <div className="hero-actions">
                <button className="btn btn-hero-primary">
                  🚀 Start Renting Now
                </button>
                <button className="btn btn-hero-secondary">
                  📱 List Your Equipment
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-stats-floating">
                <div className="floating-stat">
                  <span className="stat-number">{stats.totalEquipment.toLocaleString()}+</span>
                  <span className="stat-label">Equipment Available</span>
                </div>
                <div className="floating-stat">
                  <span className="stat-number">{stats.activeUsers.toLocaleString()}+</span>
                  <span className="stat-label">Happy Farmers</span>
                </div>
                <div className="floating-stat">
                  <span className="stat-number">{stats.avgSavings}%</span>
                  <span className="stat-label">Average Savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="featured-section">
        <div className="section-header">
          <h2>🔥 Featured Equipment</h2>
          <p>Hand-picked premium machinery with exclusive discounts</p>
        </div>
        <div className="featured-grid">
          {featuredEquipment.map(item => (
            <div key={item.id} className="featured-card">
              <div className="featured-image">
                <img src={item.image} alt={item.name} />
                <div className="featured-badge">Featured</div>
                {item.discount && (
                  <div className="discount-badge">{item.discount}% OFF</div>
                )}
              </div>
              <div className="featured-content">
                <div className="featured-header">
                  <h3>{item.name}</h3>
                  <span className="featured-type">{item.type}</span>
                </div>
                <div className="featured-rating">
                  <span className="stars">{'⭐'.repeat(Math.floor(item.rating))}</span>
                  <span className="rating-number">{item.rating}</span>
                </div>
                <div className="featured-location">📍 {item.location}</div>
                <div className="featured-price">
                  <span className="current-price">₹{item.pricePerDay.toLocaleString()}/day</span>
                  {item.discount && (
                    <span className="original-price">
                      ₹{Math.round(item.pricePerDay / (1 - item.discount/100)).toLocaleString()}
                    </span>
                  )}
                </div>
                <button className="btn btn-featured">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-header">
          <h2>🛠️ Browse by Category</h2>
          <p>Find the right equipment for your farming needs</p>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">{category.count} available</p>
              {category.trending && <span className="trending-badge">🔥 Trending</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-banner">
        <div className="stats-content">
          <div className="stat-item">
            <div className="stat-icon">🚜</div>
            <div className="stat-info">
              <span className="stat-number">{stats.totalEquipment.toLocaleString()}+</span>
              <span className="stat-label">Equipment Listed</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👨‍🌾</div>
            <div className="stat-info">
              <span className="stat-number">{stats.activeUsers.toLocaleString()}+</span>
              <span className="stat-label">Active Farmers</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <span className="stat-number">{stats.totalBookings.toLocaleString()}+</span>
              <span className="stat-label">Successful Bookings</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <span className="stat-number">{stats.avgSavings}%</span>
              <span className="stat-label">Average Savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-header">
          <h2>🎯 How It Works</h2>
          <p>Get started in just 3 simple steps</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">🔍</div>
            <h3>Search & Browse</h3>
            <p>Find the perfect equipment for your needs using our smart filters and location-based search.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">📅</div>
            <h3>Book & Schedule</h3>
            <p>Select your dates, confirm availability, and make secure payments through our platform.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">🚚</div>
            <h3>Pickup & Use</h3>
            <p>Coordinate with the owner for pickup/delivery and start boosting your farm productivity.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>💬 What Our Farmers Say</h2>
          <p>Real stories from real farmers across India</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">👨‍🌾</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.crop} • {testimonial.location}</p>
                </div>
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-message">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Farming?</h2>
          <p>Join thousands of farmers who are already saving money and increasing productivity</p>
          <div className="cta-actions">
            <button className="btn btn-cta-primary">Get Started Today</button>
            <button className="btn btn-cta-secondary">Learn More</button>
          </div>
        </div>
        <div className="cta-background">
          <div className="floating-elements">
            <div className="floating-element">🚜</div>
            <div className="floating-element">🌾</div>
            <div className="floating-element">🌱</div>
            <div className="floating-element">💧</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
