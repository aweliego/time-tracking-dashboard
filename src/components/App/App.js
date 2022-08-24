import React from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <article className="App-container">
      <SideBar />
      <main>
        <Dashboard />
      </main>
    </article>
  );
};

export default App;
