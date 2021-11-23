import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCopy,
  faIdBadge,
  faGraduationCap,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="new-wrapper">
              <Link to="/" className="brand-logo">
                CV
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <FontAwesomeIcon icon={faCopy} /> Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience">
                    <FontAwesomeIcon icon={faIdBadge} /> Experience
                  </Link>
                </li>
                <li>
                  <Link to="/education">
                    <FontAwesomeIcon icon={faGraduationCap} /> Education
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <FontAwesomeIcon icon={faAddressCard} /> Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FontAwesomeIcon icon={faCopy} /> Skills
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faIdBadge} /> Experience
            </Link>
          </li>
          <li>
            <Link to="/education">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <FontAwesomeIcon icon={faAddressCard} /> Portfolio
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
