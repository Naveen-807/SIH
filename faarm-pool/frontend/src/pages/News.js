import React, { useState } from 'react';

const News = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'Government Announces New Agricultural Subsidies for 2024',
      summary: 'The central government has announced increased subsidies for farm equipment and organic farming practices.',
      category: 'Policy',
      time: '3 hours ago',
      image: '🏛️',
      source: 'Ministry of Agriculture'
    },
    {
      id: 2,
      title: 'Record Wheat Production Expected This Season',
      summary: 'Favorable weather conditions and improved farming techniques lead to projected 15% increase in wheat yield.',
      category: 'Markets',
      time: '6 hours ago',
      image: '🌾',
      source: 'Agricultural News Today'
    },
    {
      id: 3,
      title: 'New Precision Agriculture Technology Available',
      summary: 'Latest GPS-guided tractors and drone technology now accessible for small and medium farmers.',
      category: 'Technology',
      time: '1 day ago',
      image: '🚁',
      source: 'Farm Tech Weekly'
    },
    {
      id: 4,
      title: 'Organic Farming Certification Process Simplified',
      summary: 'New streamlined process reduces certification time and costs for organic farming registration.',
      category: 'Organic',
      time: '2 days ago',
      image: '🌱',
      source: 'Organic India'
    }
  ]);

  return (
    <div className="news-page enhanced-card">
      <div className="news-header">
        <h1>📰 Agricultural News & Updates</h1>
        <p>Stay informed with the latest developments in agriculture and farming</p>
      </div>
      
      <div className="news-content">
        <div className="news-categories">
          <button className="category-btn active">All News</button>
          <button className="category-btn">Policy</button>
          <button className="category-btn">Markets</button>
          <button className="category-btn">Technology</button>
          <button className="category-btn">Weather</button>
          <button className="category-btn">Organic</button>
        </div>

        <div className="news-grid">
          {news.map(article => (
            <div key={article.id} className="news-card enhanced-card">
              <div className="news-image">
                <div className="news-icon">{article.image}</div>
                <span className="news-category">{article.category}</span>
              </div>
              
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-summary">{article.summary}</p>
                
                <div className="news-footer">
                  <span className="news-source">📡 {article.source}</span>
                  <span className="news-time">⏰ {article.time}</span>
                </div>
                
                <div className="news-actions">
                  <button className="btn btn-primary">Read More</button>
                  <button className="btn btn-secondary">Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="news-subscription">
          <h3>📧 Stay Updated</h3>
          <p>Subscribe to receive daily agricultural news and updates</p>
          <div className="subscription-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
