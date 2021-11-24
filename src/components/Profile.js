import React from 'react';
import profpic from '../images/profpic.png';
import { Link } from 'react-router-dom';
import linkedin from '../images/linkedin.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
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
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={profpic} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Pepulani Ngwira
            </span>
            <p>Systems Developer</p>
            <p>
              <i>(click name to view social)</i>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Social Media <i class="fas fa-times" />
            </span>
            <p className="flex-container">
              <img src={facebook} style={{ height: '20px', width: '20px' }} />
              <img src={linkedin} style={{ height: '20px', width: '20px' }} />
              <img src={twitter} style={{ height: '20px', width: '20px' }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
