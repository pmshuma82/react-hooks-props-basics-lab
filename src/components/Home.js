// Home.js

import React from 'react';

function Home({ name, city, color }) {
  return (
    <div>
      <h1 style={{ color }}>Welcome, {name}!</h1>
      <p>City: {city}</p>
      <p>Favorite Color: {color}</p>
    </div>
  );
}

export default Home;
