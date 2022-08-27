import React from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import data from '../../data/data.json';
import { useState, useEffect } from 'react';

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => setActivities(data), []);


  return (
    <article className="App-container">
      <SideBar />
      <Dashboard activities={activities} />
    </article>
  );
};

export default App;
