// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/form">Registration Form</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
