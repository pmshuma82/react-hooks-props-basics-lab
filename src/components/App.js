// App.js

import React from 'react';
import Home from './Home';
import About from './About';
import Links from './Links';

function App() {
  const props = {
    name: 'John Doe',
    city: 'New York',
    color: 'blue',
    linkedin: 'linkedin.com/example',
    github: 'github.com/example',
    bio: 'A passionate developer',
  };

  return (
    <div className="App">
      <Home name={props.name} city={props.city} color={props.color} />
      <About bio={props.bio} linkedin={props.linkedin} github={props.github} />
      <Links linkedin={props.linkedin} github={props.github} />
    </div>
  );
}

export default App;
