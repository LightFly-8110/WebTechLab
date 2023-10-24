// HomePage.js
import { Link } from 'react-router-dom';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default HomePage;
