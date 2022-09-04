import React, { useState, useEffect } from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import data from '../../data/data.json';

const timeframes = ['Daily', 'Weekly', 'Monthly'];

const App = () => {
  const [activities, setActivities] = useState([]);

  const [timeframe, setTimeframe] = useState('weekly');

  useEffect(() => setActivities(data), [timeframe]);

  const selectTimeframe = (clickedTimeframe) =>
    setTimeframe(clickedTimeframe.toLowerCase());

  return (
    <article className="App-container">
      <SideBar timeframes={timeframes} selectTimeframe={selectTimeframe} />
      <Dashboard activities={activities} timeframe={timeframe} />
    </article>
  );
};

export default App;
