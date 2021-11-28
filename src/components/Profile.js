import React from 'react';
import profpic from '../images/profpic.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedIn,
} from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-image">
            <img className="activator" src={profpic} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Pepulani Ngwira
            </span>
            <p>
              <strong>Systems Developer (SMART Zambia Institute)</strong>
            </p>
            <p style={{ color: 'blue' }}>
              <i>(click image to view social)</i>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Social Media <i className="fas fa-times" />
            </span>
            <p className="flex-container">
              <a href="https://web.facebook.com/pepulani.ngwira?_rdc=1&_rdr">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.twitter.com/Pepulani_">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://zm.linkedin.com/in/pepulani-ngwira-b4ab52a6">
                <i className="fab fa-linkedin-in" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
