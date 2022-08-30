import React from 'react';
import './SideBar.css';

const SideBar = ({ timeframes, selectTimeframe }) => {
  return (
    <header className="SideBar">
      <section className="user">
        <img src="../../../images/image-jeremy.png" alt="jeremy" />
        <div className="user-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </section>

      <nav>
        <ul className="timeframes">
          {timeframes.map((timeframe, index) => (
            <li key={index} onClick={() => selectTimeframe(timeframe)}>
              {timeframe}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
