import React from 'react';
import './Activity.css';

const Activity = ({ title, timeframes }) => {
  return (
    <article className="Activity-Card">
      <div className="background-icon"></div>
      <section className="Activity">
        <h4 className="title">{title}</h4>
        <img src="../../../images/icon-ellipsis.svg" alt="ellipsis" />
        <p className="current-stats">32hrs</p>
        <p className="previous-stats">Last Week - 36hrs</p>
      </section>
    </article>
  );
};

export default Activity;
