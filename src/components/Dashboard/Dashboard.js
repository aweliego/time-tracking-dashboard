import React from 'react';
import './Dashboard.css';
import Activity from '../Activity/Activity';

const Dashboard = ({ activities }) => {
  return (
    <section className="Dashboard-grid">
      {activities.map((activity, idx) => (
        <Activity key={idx} {...activity} />
      ))}
    </section>
  );
};

export default Dashboard;
