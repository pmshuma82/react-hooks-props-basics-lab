// About.js

import React from 'react';
import Links from './Links';

function About({ bio, linkedin, github }) {
  return (
    <div>
      {bio && <p>{bio}</p>}
      <Links linkedin={linkedin} github={github} />
    </div>
  );
}

export default About;
