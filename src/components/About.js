import React from 'react';
import profpic from '../images/profpic.png';

function About() {
  return (
    <div className="card">
      <div className="card-content">
        <h6 className="mt-bottom">
          <strong>ABOUT ME</strong>
        </h6>
        <p className="grey-text">
          I have a keen interest in building web apps using REACT javascript
          library and I am open to learning from others and being informative
          when it is required from me.
        </p>
      </div>
      <div className="card-action">
        <h6>
          <strong>PERSONAL INFO</strong>
        </h6>
        <div className="row mt">
          <div className="col s12 m6 l6 xl6">
            <p>
              <strong>Address:</strong> Doko flats, flat #5 Thornpark Lusaka,
              Zambia
            </p>
            <p>
              <strong>Email:</strong> pngwira7@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +260770831145
            </p>
          </div>
          <div className="col s12 m6 l6 xl6">
            <p>
              <strong>Main Language:</strong> English
            </p>
            <p>
              <strong>Second Language:</strong> Tumbuka
            </p>
            <p>
              <strong>Third Language:</strong> Nyanja
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
