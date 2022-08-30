import React from 'react';
import './SideBar.css';
import { useState } from 'react';

const SideBar = ({ timeframes, selectTimeframe }) => {
  const [value, setValue] = useState(1);

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
            <li
              key={index}
              className={index === value && 'active'}
              onClick={() => {
                selectTimeframe(timeframe);
                setValue(index);
              }}
            >
              {timeframe}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
