import React from 'react';
import './Dashboard.css';

const Dashboard = ({ v1Data, v2Data, loadingV1, loadingV2 }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>API v1</h3>
          {loadingV1 ? <div className="spinner" /> : <div>{v1Data}</div>}
        </div>
        <div className="dashboard-card">
          <h3>API v2</h3>
          {loadingV2 ? <div className="spinner" /> : <div>{v2Data}</div>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
