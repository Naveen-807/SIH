import React, { useState } from 'react';

const Analytics = () => {
  const [timeframe, setTimeframe] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    // Load analytics data
    setDashboardData({
      overview: {
        totalRevenue: 2450000,
        revenueGrowth: 15.3,
        totalBookings: 1256,
        bookingsGrowth: 22.1,
        activeEquipment: 89,
        equipmentUtilization: 78.5,
        customerSatisfaction: 4.6,
        satisfactionGrowth: 8.2
      },
      revenueData: [
        { month: 'Jan', revenue: 180000, bookings: 98, utilization: 72 },
        { month: 'Feb', revenue: 210000, bookings: 112, utilization: 75 },
        { month: 'Mar', revenue: 195000, bookings: 105, utilization: 70 },
        { month: 'Apr', revenue: 235000, bookings: 128, utilization: 82 },
        { month: 'May', revenue: 280000, bookings: 145, utilization: 85 },
        { month: 'Jun', revenue: 315000, bookings: 162, utilization: 88 },
        { month: 'Jul', revenue: 340000, bookings: 178, utilization: 92 },
        { month: 'Aug', revenue: 365000, bookings: 189, utilization: 89 },
        { month: 'Sep', revenue: 325000, bookings: 171, utilization: 87 },
        { month: 'Oct', revenue: 290000, bookings: 156, utilization: 84 },
        { month: 'Nov', revenue: 275000, bookings: 148, utilization: 81 },
        { month: 'Dec', revenue: 320000, bookings: 164, utilization: 86 }
      ],
      equipmentPerformance: [
        { 
          name: 'Mahindra 475 DI', 
          type: 'Tractor',
          totalBookings: 156,
          revenue: 234000,
          utilization: 92,
          rating: 4.8,
          maintenanceCost: 15000,
          profit: 219000
        },
        { 
          name: 'John Deere 5050E', 
          type: 'Tractor',
          totalBookings: 142,
          revenue: 213000,
          utilization: 89,
          rating: 4.7,
          maintenanceCost: 18000,
          profit: 195000
        },
        { 
          name: 'Swaraj 855 FE', 
          type: 'Tractor',
          totalBookings: 128,
          revenue: 192000,
          utilization: 85,
          rating: 4.6,
          maintenanceCost: 12000,
          profit: 180000
        },
        { 
          name: 'New Holland 3600-2', 
          type: 'Tractor',
          totalBookings: 134,
          revenue: 201000,
          utilization: 87,
          rating: 4.5,
          maintenanceCost: 16000,
          profit: 185000
        },
        { 
          name: 'Class Lexion 780', 
          type: 'Harvester',
          totalBookings: 89,
          revenue: 445000,
          utilization: 94,
          rating: 4.9,
          maintenanceCost: 35000,
          profit: 410000
        }
      ],
      customerInsights: {
        demographics: [
          { segment: 'Small Farmers', percentage: 45, growth: 12.3 },
          { segment: 'Medium Farmers', percentage: 35, growth: 8.7 },
          { segment: 'Large Farmers', percentage: 15, growth: 15.2 },
          { segment: 'Cooperatives', percentage: 5, growth: 22.8 }
        ],
        regions: [
          { state: 'Punjab', bookings: 285, revenue: 427500, growth: 18.5 },
          { state: 'Haryana', bookings: 234, revenue: 351000, growth: 15.2 },
          { state: 'Uttar Pradesh', bookings: 198, revenue: 297000, growth: 22.1 },
          { state: 'Rajasthan', bookings: 167, revenue: 250500, growth: 12.8 },
          { state: 'Gujarat', bookings: 145, revenue: 217500, growth: 25.3 }
        ],
        seasonalTrends: [
          { season: 'Kharif Sowing', demand: 95, period: 'Jun-Jul' },
          { season: 'Kharif Harvest', demand: 88, period: 'Oct-Nov' },
          { season: 'Rabi Sowing', demand: 78, period: 'Nov-Dec' },
          { season: 'Rabi Harvest', demand: 92, period: 'Mar-Apr' }
        ]
      },
      financialMetrics: {
        profitMargin: 68.5,
        operationalCosts: 756000,
        maintenanceCosts: 189000,
        marketingCosts: 145000,
        averageBookingValue: 1950,
        customerLifetimeValue: 15600,
        acquisitionCost: 340
      }
    });
  }, [timeframe]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value > 0 ? '+' : ''}${value}%`;
  };

  const renderOverviewCards = () => (
    <div className="overview-cards">
      <div className="metric-card revenue">
        <div className="metric-icon">💰</div>
        <div className="metric-content">
          <h3>Total Revenue</h3>
          <div className="metric-value">{formatCurrency(dashboardData.overview?.totalRevenue)}</div>
          <div className="metric-change positive">
            📈 {formatPercentage(dashboardData.overview?.revenueGrowth)}
          </div>
        </div>
      </div>

      <div className="metric-card bookings">
        <div className="metric-icon">📋</div>
        <div className="metric-content">
          <h3>Total Bookings</h3>
          <div className="metric-value">{dashboardData.overview?.totalBookings?.toLocaleString()}</div>
          <div className="metric-change positive">
            📈 {formatPercentage(dashboardData.overview?.bookingsGrowth)}
          </div>
        </div>
      </div>

      <div className="metric-card equipment">
        <div className="metric-icon">🚜</div>
        <div className="metric-content">
          <h3>Active Equipment</h3>
          <div className="metric-value">{dashboardData.overview?.activeEquipment}</div>
          <div className="metric-sub">
            {dashboardData.overview?.equipmentUtilization}% Utilization
          </div>
        </div>
      </div>

      <div className="metric-card satisfaction">
        <div className="metric-icon">⭐</div>
        <div className="metric-content">
          <h3>Customer Rating</h3>
          <div className="metric-value">{dashboardData.overview?.customerSatisfaction}/5.0</div>
          <div className="metric-change positive">
            📈 {formatPercentage(dashboardData.overview?.satisfactionGrowth)}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRevenueChart = () => (
    <div className="chart-container">
      <div className="chart-header">
        <h3>📊 Revenue & Bookings Trend</h3>
        <div className="chart-controls">
          <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last 3 Months</option>
            <option value="year">Last 12 Months</option>
          </select>
        </div>
      </div>
      
      <div className="chart-content">
        <div className="chart-legend">
          <span className="legend-item revenue">■ Revenue</span>
          <span className="legend-item bookings">■ Bookings</span>
          <span className="legend-item utilization">■ Utilization</span>
        </div>
        
        <div className="chart-bars">
          {dashboardData.revenueData?.map((data, index) => (
            <div key={index} className="chart-bar-group">
              <div className="chart-bars-container">
                <div 
                  className="chart-bar revenue-bar"
                  style={{ height: `${(data.revenue / 400000) * 100}%` }}
                  title={`Revenue: ${formatCurrency(data.revenue)}`}
                ></div>
                <div 
                  className="chart-bar bookings-bar"
                  style={{ height: `${(data.bookings / 200) * 100}%` }}
                  title={`Bookings: ${data.bookings}`}
                ></div>
                <div 
                  className="chart-bar utilization-bar"
                  style={{ height: `${data.utilization}%` }}
                  title={`Utilization: ${data.utilization}%`}
                ></div>
              </div>
              <span className="chart-label">{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEquipmentPerformance = () => (
    <div className="equipment-performance">
      <h3>🚜 Equipment Performance Analysis</h3>
      <div className="performance-table">
        <div className="table-header">
          <div className="th">Equipment</div>
          <div className="th">Bookings</div>
          <div className="th">Revenue</div>
          <div className="th">Utilization</div>
          <div className="th">Rating</div>
          <div className="th">Profit</div>
        </div>
        {dashboardData.equipmentPerformance?.map((equipment, index) => (
          <div key={index} className="table-row">
            <div className="td equipment-info">
              <div className="equipment-name">{equipment.name}</div>
              <div className="equipment-type">{equipment.type}</div>
            </div>
            <div className="td">{equipment.totalBookings}</div>
            <div className="td">{formatCurrency(equipment.revenue)}</div>
            <div className="td">
              <div className="utilization-bar">
                <div 
                  className="utilization-fill"
                  style={{ width: `${equipment.utilization}%` }}
                ></div>
                <span>{equipment.utilization}%</span>
              </div>
            </div>
            <div className="td">
              <div className="rating">
                ⭐ {equipment.rating}
              </div>
            </div>
            <div className="td profit">{formatCurrency(equipment.profit)}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCustomerInsights = () => (
    <div className="customer-insights">
      <h3>👥 Customer Insights</h3>
      
      <div className="insights-grid">
        <div className="insight-card demographics">
          <h4>📊 Customer Demographics</h4>
          <div className="demographics-chart">
            {dashboardData.customerInsights?.demographics?.map((segment, index) => (
              <div key={index} className="demographic-segment">
                <div className="segment-info">
                  <span className="segment-name">{segment.segment}</span>
                  <span className="segment-percentage">{segment.percentage}%</span>
                </div>
                <div className="segment-bar">
                  <div 
                    className="segment-fill"
                    style={{ width: `${segment.percentage}%` }}
                  ></div>
                </div>
                <div className="segment-growth">
                  📈 {formatPercentage(segment.growth)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="insight-card regions">
          <h4>🗺️ Regional Performance</h4>
          <div className="regions-list">
            {dashboardData.customerInsights?.regions?.map((region, index) => (
              <div key={index} className="region-item">
                <div className="region-header">
                  <span className="region-name">{region.state}</span>
                  <span className="region-growth positive">
                    {formatPercentage(region.growth)}
                  </span>
                </div>
                <div className="region-stats">
                  <span>{region.bookings} bookings</span>
                  <span>{formatCurrency(region.revenue)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="insight-card seasonal">
          <h4>🌾 Seasonal Trends</h4>
          <div className="seasonal-chart">
            {dashboardData.customerInsights?.seasonalTrends?.map((trend, index) => (
              <div key={index} className="seasonal-item">
                <div className="season-info">
                  <span className="season-name">{trend.season}</span>
                  <span className="season-period">{trend.period}</span>
                </div>
                <div className="demand-bar">
                  <div 
                    className="demand-fill"
                    style={{ width: `${trend.demand}%` }}
                  ></div>
                  <span className="demand-value">{trend.demand}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancialMetrics = () => (
    <div className="financial-metrics">
      <h3>💼 Financial Metrics</h3>
      <div className="metrics-grid">
        <div className="financial-card">
          <div className="financial-icon">📈</div>
          <div className="financial-content">
            <span className="financial-label">Profit Margin</span>
            <span className="financial-value">{dashboardData.financialMetrics?.profitMargin}%</span>
          </div>
        </div>

        <div className="financial-card">
          <div className="financial-icon">💸</div>
          <div className="financial-content">
            <span className="financial-label">Operational Costs</span>
            <span className="financial-value">{formatCurrency(dashboardData.financialMetrics?.operationalCosts)}</span>
          </div>
        </div>

        <div className="financial-card">
          <div className="financial-icon">🔧</div>
          <div className="financial-content">
            <span className="financial-label">Maintenance Costs</span>
            <span className="financial-value">{formatCurrency(dashboardData.financialMetrics?.maintenanceCosts)}</span>
          </div>
        </div>

        <div className="financial-card">
          <div className="financial-icon">📢</div>
          <div className="financial-content">
            <span className="financial-label">Marketing Costs</span>
            <span className="financial-value">{formatCurrency(dashboardData.financialMetrics?.marketingCosts)}</span>
          </div>
        </div>

        <div className="financial-card">
          <div className="financial-icon">🎯</div>
          <div className="financial-content">
            <span className="financial-label">Avg. Booking Value</span>
            <span className="financial-value">{formatCurrency(dashboardData.financialMetrics?.averageBookingValue)}</span>
          </div>
        </div>

        <div className="financial-card">
          <div className="financial-icon">👤</div>
          <div className="financial-content">
            <span className="financial-label">Customer LTV</span>
            <span className="financial-value">{formatCurrency(dashboardData.financialMetrics?.customerLifetimeValue)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <h1>📊 Business Analytics</h1>
        <p>Comprehensive insights into your farm equipment rental business</p>
        <div className="header-actions">
          <button className="btn btn-secondary">📤 Export Report</button>
          <button className="btn btn-primary">⚙️ Custom Dashboard</button>
        </div>
      </div>

      <div className="analytics-content">
        {renderOverviewCards()}
        
        <div className="analytics-grid">
          <div className="analytics-section">
            {renderRevenueChart()}
          </div>
          
          <div className="analytics-section">
            {renderEquipmentPerformance()}
          </div>
          
          <div className="analytics-section">
            {renderCustomerInsights()}
          </div>
          
          <div className="analytics-section">
            {renderFinancialMetrics()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
