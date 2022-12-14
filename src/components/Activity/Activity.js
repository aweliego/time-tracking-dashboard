import React from 'react';
import './Activity.css';

const Activity = ({ title, timeframes, timeframe }) => {
  const getBackground = (title) => {
    switch (title) {
      case 'Work':
        return 'work';
      case 'Play':
        return 'play';
      case 'Study':
        return 'study';
      case 'Exercise':
        return 'exercise';
      case 'Social':
        return 'social';
      case 'Self Care':
        return 'self-care';
      default:
        return '';
    }
  };

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

  const currentStats = timeframes[timeframe].current;
  const previousStats = timeframes[timeframe].previous;

  return (
    <article className={`Activity-Card ${getBackground(title)}`}>
      <div className="background-icon"></div>
      <section className="Activity">
        <h4 className="title">{title}</h4>
        <img src="../../../images/icon-ellipsis.svg" alt="ellipsis" />
        <p className="current-stats">
          {currentStats}
          {currentStats === 1 ? 'hr' : 'hrs'}
        </p>
        <p className="previous-stats">
          {getPreviousTimeframe(timeframe)} - {previousStats}
          {previousStats === 1 ? 'hr' : 'hrs'}
        </p>
      </section>
    </article>
  );
};

export default Activity;
