import React, { Component } from 'react';

import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Profile from './Profile';
import About from './About';

function Home() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3">
            <Profile />
          </div>
          <div className="col s12 m8 l9">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
