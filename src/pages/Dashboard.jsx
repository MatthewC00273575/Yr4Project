import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Income</h3>
          <p>$10,000</p>
        </div>
        <div className="stat-card">
          <h3>Total Expenses</h3>
          <p>$6,500</p>
        </div>
        <div className="stat-card">
          <h3>Remaining Budget</h3>
          <p>$3,500</p>
        </div>
      </div>
      <div className="chart-section">
        <div className="chart-placeholder">
          <h4>Income vs Expenses</h4>
          <p>[Chart Placeholder]</p>
        </div>
        <div className="chart-placeholder">
          <h4>Monthly Breakdown</h4>
          <p>[Chart Placeholder]</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
