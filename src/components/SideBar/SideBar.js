import React from 'react';

const SideBar = () => {
  return (
    <header className="SideBar">
      <section>
        <img src="../../../images/image-jeremy.png" alt="" />
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </section>

      <nav>
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
