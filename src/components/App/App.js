import React from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <SideBar />
      <main>
        <Dashboard />
      </main>
    </>
  );
};

export default App;
