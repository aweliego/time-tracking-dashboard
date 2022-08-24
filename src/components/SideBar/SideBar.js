import React from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <header className="SideBar">
      <section className="user">
        <img src="../../../images/image-jeremy.png" alt="jeremy" />
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </section>

      <nav>
        <ul className="timeframes">
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
