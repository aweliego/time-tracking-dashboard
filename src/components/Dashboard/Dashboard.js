import React from 'react';
import './Dashboard.css';
import Activity from '../Activity/Activity';

const Dashboard = ({ activities, timeframe }) => {
  //console.log(timeframe);
  return (
    <section className="Dashboard-grid">
      {activities.map((activity, idx) => (
        <Activity key={idx} {...activity} timeframe={timeframe} />
      ))}
    </section>
  );
};

export default Dashboard;
