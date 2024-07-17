// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Home = () => {
    //throw new Error('Testing error boundary');
  console.log("home loaded");
  return (
    <div>
      <h1>Welcome to eGov</h1>
      <p>Click below to go to the form:</p>
      <Link to="/form">Go to Form</Link>
    </div>
  );
};

export default Home;
