import React from 'react';
import './Activity.css';

const Activity = ({ title, timeframes, timeframe }) => {
  const getPreviousTimeframe = (timeframe) => {
    switch (timeframe) {
      case 'daily':
        return 'Yesterday';
      case 'weekly':
        return 'Last Week';
      case 'monthly':
        return 'Last Month';
      default:
        return 'Last Week';
    }
  };

  return (
    <article className="Activity-Card">
      <div className="background-icon"></div>
      <section className="Activity">
        <h4 className="title">{title}</h4>
        <img src="../../../images/icon-ellipsis.svg" alt="ellipsis" />
        <p className="current-stats">{timeframes[timeframe].current}hrs</p>
        <p className="previous-stats">
          {getPreviousTimeframe(timeframe)} - {timeframes[timeframe].previous}hrs
        </p>
      </section>
    </article>
  );
};

export default Activity;
