import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
function Education() {
  return (
    <div className="card">
      <div className="card-content">
        <h6>
          <strong>EDUCATION</strong>
        </h6>
        <table className="stripped">
          <thead>
            <tr>
              <th>Certification</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bachelor Of Science Degree in Computer Science</td>
              <td>Jan 2020</td>
            </tr>
            <tr>
              <td>Ethical Hacking/Cybersecurity</td>
              <td>July 2018</td>
            </tr>
            <tr>
              <td>
                Microsoft Technology Assistant (MTA) Database Fundamentals
              </td>
              <td>November 2016</td>
              <td>
                <a
                  href="https://www.youracclaim.com/badges/490e0738-31f5-4587-8506-b76f927b5471"
                  className="btn blue lighten-2"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>Grade 12 GCE O' Level</td>
              <td>December 2008</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Education;
