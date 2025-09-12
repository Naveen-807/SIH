import React, { useState, useEffect } from 'react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('forums');
  const [forumPosts, setForumPosts] = useState([]);
  const [experts, setExperts] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
    // Load forum posts
    setForumPosts([
      {
        id: 1,
        title: 'Best practices for wheat harvesting in Punjab',
        author: 'Rajesh Kumar',
        avatar: '👨‍🌾',
        category: 'Harvesting',
        replies: 23,
        likes: 45,
        timeAgo: '2 hours ago',
        content: 'Looking for advice on optimal timing for wheat harvest this season. Weather has been unpredictable...',
        tags: ['wheat', 'harvesting', 'punjab'],
        isHot: true
      },
      {
        id: 2,
        title: 'Organic pest control methods for cotton',
        author: 'Priya Patel',
        avatar: '👩‍🌾',
        category: 'Pest Control',
        replies: 18,
        likes: 32,
        timeAgo: '5 hours ago',
        content: 'Sharing my experience with organic pest control methods that have worked well for cotton crops...',
        tags: ['organic', 'cotton', 'pest-control'],
        isHot: false
      },
      {
        id: 3,
        title: 'Water-saving irrigation techniques',
        author: 'Suresh Singh',
        avatar: '👨‍🌾',
        category: 'Irrigation',
        replies: 31,
        likes: 67,
        timeAgo: '1 day ago',
        content: 'With water scarcity becoming a major issue, here are some proven techniques to save water...',
        tags: ['irrigation', 'water-saving', 'technology'],
        isHot: true
      },
      {
        id: 4,
        title: 'Soil testing and nutrient management',
        author: 'Dr. Meera Shah',
        avatar: '👩‍🔬',
        category: 'Soil Health',
        replies: 42,
        likes: 89,
        timeAgo: '2 days ago',
        content: 'Regular soil testing is crucial for optimal crop yields. Here\'s a comprehensive guide...',
        tags: ['soil', 'nutrients', 'testing'],
        isHot: true
      }
    ]);

    // Load expert profiles
    setExperts([
      {
        id: 1,
        name: 'Dr. Rajesh Mehta',
        title: 'Agricultural Scientist',
        specialization: 'Crop Genetics & Breeding',
        experience: '15 years',
        rating: 4.9,
        consultations: 1250,
        avatar: '👨‍🔬',
        location: 'IARI, New Delhi',
        expertise: ['Wheat', 'Rice', 'Genetics', 'Breeding'],
        isOnline: true
      },
      {
        id: 2,
        name: 'Dr. Sunita Verma',
        title: 'Soil Science Expert',
        specialization: 'Soil Health & Fertility',
        experience: '12 years',
        rating: 4.8,
        consultations: 980,
        avatar: '👩‍🔬',
        location: 'Punjab Agricultural University',
        expertise: ['Soil Health', 'Nutrition', 'Organic Farming'],
        isOnline: false
      },
      {
        id: 3,
        name: 'Prof. Anil Kumar',
        title: 'Irrigation Specialist',
        specialization: 'Water Management',
        experience: '20 years',
        rating: 4.9,
        consultations: 1500,
        avatar: '👨‍🏫',
        location: 'ICRISAT, Hyderabad',
        expertise: ['Irrigation', 'Water Management', 'Precision Agriculture'],
        isOnline: true
      },
      {
        id: 4,
        name: 'Dr. Kavita Sharma',
        title: 'Plant Pathologist',
        specialization: 'Disease Management',
        experience: '18 years',
        rating: 4.7,
        consultations: 1100,
        avatar: '👩‍⚕️',
        location: 'HAU, Hisar',
        expertise: ['Plant Diseases', 'IPM', 'Biological Control'],
        isOnline: true
      }
    ]);

    // Load success stories
    setSuccessStories([
      {
        id: 1,
        farmer: 'Ramesh Patel',
        location: 'Gujarat',
        crop: 'Cotton',
        achievement: 'Increased yield by 40% using precision agriculture',
        story: 'By adopting GPS-guided equipment and soil sensors, I was able to optimize fertilizer application and irrigation...',
        beforeAfter: { before: '2.5 tons/hectare', after: '3.5 tons/hectare' },
        investment: '₹2,50,000',
        roi: '150%',
        timeframe: '2 seasons',
        image: 'cotton-field.jpg',
        likes: 234,
        shares: 45
      },
      {
        id: 2,
        farmer: 'Sunita Devi',
        location: 'Punjab',
        crop: 'Wheat',
        achievement: 'Reduced input costs by 30% with organic farming',
        story: 'Transitioning to organic farming seemed risky, but with proper guidance and community support...',
        beforeAfter: { before: '₹45,000/hectare', after: '₹31,500/hectare' },
        investment: '₹80,000',
        roi: '200%',
        timeframe: '3 years',
        image: 'wheat-organic.jpg',
        likes: 187,
        shares: 32
      },
      {
        id: 3,
        farmer: 'Vijay Kumar',
        location: 'Tamil Nadu',
        crop: 'Rice',
        achievement: 'Implemented SRI method, saved 40% water',
        story: 'System of Rice Intensification (SRI) not only saved water but also increased my yield significantly...',
        beforeAfter: { before: '8000L/kg rice', after: '4800L/kg rice' },
        investment: '₹1,20,000',
        roi: '180%',
        timeframe: '1 season',
        image: 'rice-sri.jpg',
        likes: 298,
        shares: 67
      }
    ]);

    // Load live events
    setLiveEvents([
      {
        id: 1,
        title: 'Smart Irrigation Workshop',
        speaker: 'Dr. Anil Kumar',
        time: 'Today 3:00 PM',
        duration: '2 hours',
        attendees: 156,
        type: 'Workshop',
        isLive: false,
        topics: ['Drip Irrigation', 'Sensor Technology', 'Water Conservation']
      },
      {
        id: 2,
        title: 'Organic Farming Q&A Session',
        speaker: 'Experts Panel',
        time: 'Tomorrow 10:00 AM',
        duration: '1 hour',
        attendees: 89,
        type: 'Q&A',
        isLive: false,
        topics: ['Organic Certification', 'Market Access', 'Pest Management']
      },
      {
        id: 3,
        title: 'Equipment Maintenance Masterclass',
        speaker: 'Rajesh Mechanica',
        time: 'Live Now',
        duration: '1.5 hours',
        attendees: 203,
        type: 'Masterclass',
        isLive: true,
        topics: ['Tractor Maintenance', 'Troubleshooting', 'Cost Optimization']
      }
    ]);
  }, []);

  const renderForums = () => (
    <div className="forums-section">
      <div className="forums-header">
        <div className="forums-stats">
          <div className="stat-item">
            <span className="stat-number">2,450</span>
            <span className="stat-label">Active Discussions</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15,200</span>
            <span className="stat-label">Community Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98</span>
            <span className="stat-label">Expert Contributors</span>
          </div>
        </div>
        <button className="btn btn-primary">Start New Discussion</button>
      </div>

      <div className="forum-categories">
        <button className="category-btn active">All</button>
        <button className="category-btn">Harvesting</button>
        <button className="category-btn">Pest Control</button>
        <button className="category-btn">Irrigation</button>
        <button className="category-btn">Soil Health</button>
        <button className="category-btn">Equipment</button>
      </div>

      <div className="forum-posts">
        {forumPosts.map(post => (
          <div key={post.id} className="forum-post">
            <div className="post-header">
              <div className="author-info">
                <span className="author-avatar">{post.avatar}</span>
                <div className="author-details">
                  <span className="author-name">{post.author}</span>
                  <span className="post-time">{post.timeAgo}</span>
                </div>
              </div>
              {post.isHot && <span className="hot-badge">🔥 Hot</span>}
            </div>
            
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="post-tag">#{tag}</span>
              ))}
            </div>
            
            <div className="post-actions">
              <button className="action-btn">
                👍 {post.likes}
              </button>
              <button className="action-btn">
                💬 {post.replies}
              </button>
              <button className="action-btn">
                📤 Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExperts = () => (
    <div className="experts-section">
      <div className="experts-header">
        <h2>🎓 Agricultural Experts</h2>
        <p>Get personalized advice from certified agricultural professionals</p>
      </div>
      
      <div className="experts-grid">
        {experts.map(expert => (
          <div key={expert.id} className="expert-card">
            <div className="expert-header">
              <div className="expert-avatar">{expert.avatar}</div>
              <div className="expert-status">
                <span className={`status-indicator ${expert.isOnline ? 'online' : 'offline'}`}>
                  {expert.isOnline ? '🟢 Online' : '⚫ Offline'}
                </span>
              </div>
            </div>
            
            <div className="expert-info">
              <h3>{expert.name}</h3>
              <p className="expert-title">{expert.title}</p>
              <p className="expert-specialization">{expert.specialization}</p>
              <p className="expert-location">📍 {expert.location}</p>
            </div>
            
            <div className="expert-stats">
              <div className="stat">
                <span className="stat-value">⭐ {expert.rating}</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-value">{expert.consultations}</span>
                <span className="stat-label">Consultations</span>
              </div>
              <div className="stat">
                <span className="stat-value">{expert.experience}</span>
                <span className="stat-label">Experience</span>
              </div>
            </div>
            
            <div className="expert-expertise">
              {expert.expertise.map((skill, index) => (
                <span key={index} className="expertise-tag">{skill}</span>
              ))}
            </div>
            
            <div className="expert-actions">
              <button className="btn btn-primary">Consult Now</button>
              <button className="btn btn-secondary">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSuccessStories = () => (
    <div className="success-stories-section">
      <div className="stories-header">
        <h2>🏆 Success Stories</h2>
        <p>Inspiring stories from farmers who transformed their agriculture</p>
      </div>
      
      <div className="stories-grid">
        {successStories.map(story => (
          <div key={story.id} className="story-card">
            <div className="story-header">
              <div className="farmer-info">
                <span className="farmer-avatar">👨‍🌾</span>
                <div>
                  <h4>{story.farmer}</h4>
                  <p>📍 {story.location} • 🌾 {story.crop} Farmer</p>
                </div>
              </div>
              <div className="story-engagement">
                <span>👍 {story.likes}</span>
                <span>📤 {story.shares}</span>
              </div>
            </div>
            
            <h3 className="story-achievement">{story.achievement}</h3>
            <p className="story-content">{story.story}</p>
            
            <div className="story-metrics">
              <div className="metric-card">
                <span className="metric-label">Before</span>
                <span className="metric-value">{story.beforeAfter.before}</span>
              </div>
              <div className="metric-arrow">→</div>
              <div className="metric-card">
                <span className="metric-label">After</span>
                <span className="metric-value">{story.beforeAfter.after}</span>
              </div>
            </div>
            
            <div className="story-details">
              <div className="detail-item">
                <span className="detail-label">Investment:</span>
                <span className="detail-value">{story.investment}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">ROI:</span>
                <span className="detail-value">{story.roi}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Timeframe:</span>
                <span className="detail-value">{story.timeframe}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLiveEvents = () => (
    <div className="live-events-section">
      <div className="events-header">
        <h2>📺 Live Events & Workshops</h2>
        <p>Join live sessions with agricultural experts and successful farmers</p>
      </div>
      
      <div className="events-grid">
        {liveEvents.map(event => (
          <div key={event.id} className={`event-card ${event.isLive ? 'live-event' : ''}`}>
            {event.isLive && <div className="live-indicator">🔴 LIVE</div>}
            
            <div className="event-header">
              <h3>{event.title}</h3>
              <span className="event-type">{event.type}</span>
            </div>
            
            <div className="event-details">
              <div className="event-speaker">
                <span className="speaker-icon">🎤</span>
                <span>{event.speaker}</span>
              </div>
              <div className="event-time">
                <span className="time-icon">⏰</span>
                <span>{event.time}</span>
              </div>
              <div className="event-duration">
                <span className="duration-icon">⏱️</span>
                <span>{event.duration}</span>
              </div>
              <div className="event-attendees">
                <span className="attendees-icon">👥</span>
                <span>{event.attendees} attendees</span>
              </div>
            </div>
            
            <div className="event-topics">
              <h4>Topics Covered:</h4>
              <ul>
                {event.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
            
            <button className={`btn ${event.isLive ? 'btn-live' : 'btn-primary'}`}>
              {event.isLive ? '🔴 Join Live' : '📅 Register'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="community-page">
      <div className="community-header">
        <h1>👥 Farming Community</h1>
        <p>Connect, learn, and grow with fellow farmers and agricultural experts</p>
      </div>

      <div className="community-tabs">
        <button 
          className={`tab-btn ${activeTab === 'forums' ? 'active' : ''}`}
          onClick={() => setActiveTab('forums')}
        >
          💬 Forums
        </button>
        <button 
          className={`tab-btn ${activeTab === 'experts' ? 'active' : ''}`}
          onClick={() => setActiveTab('experts')}
        >
          🎓 Experts
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stories' ? 'active' : ''}`}
          onClick={() => setActiveTab('stories')}
        >
          🏆 Success Stories
        </button>
        <button 
          className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          📺 Live Events
        </button>
      </div>

      <div className="community-content">
        {activeTab === 'forums' && renderForums()}
        {activeTab === 'experts' && renderExperts()}
        {activeTab === 'stories' && renderSuccessStories()}
        {activeTab === 'events' && renderLiveEvents()}
      </div>
    </div>
  );
};

export default Community;
