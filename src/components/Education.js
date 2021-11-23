// import React from 'react'

// function Education() {
//     return (
//         <div className="edu">
//             <table id="educationTable">
//                 <tr>
//                     <th id="edu-year">
//                         Year
//                     </th>
//                     <th id="edu-heading">
//                         Education
//                     </th>
//                 </tr>
//                 <tr>
//                     <td id="LPUh">
//                         <b>August 2014 - December 2019</b>
//                     </td>
//                     <td id="LPUd">
//                         <b><i>Bachelor Of Science in Computer Science</i></b><br/>
//                         <b>Lovely Professional University</b><br/>
//                         Some of the important courses cleared included
//                         Problem Solving and Programming concepts; Graphic Tools(Photoshop,
//                         Corel Draw), Computer Hardware and Networks; OOPs; C programming;
//                         Data Structures; Database Management Systems<br/>
//                         Registration Number: 11403558 Certificate Number: 270261 (verify
//                         at www.lpu.in/authenticate)
//                     </td>
//                 </tr>
//                 <tr>
//                     <td id="KVCHh">
//                         <b>June 2018 - July 2018</b>
//                     </td>
//                     <td id="KVCHd">
//                         <b><i>Ethical Hacking/Cybersecurity</i></b><br/>
//                         <b>Lovely Professional University</b><br/>
//                         Certified by KVCH, India <br/> Registration number: 733528
//                     </td>
//                 </tr>
//                 <tr>
//                     <td id="CCNAh">
//                         <b>June 2016 - July 2016</b>
//                     </td>
//                     <td id="CCNAd">
//                         <b><i>Networking CCNA Summer Training</i></b><br/>
//                         <b>Lovely Professional University</b><br/>
//                         Certified by Itronix Solutions (an ISO 9001: certified
//                         company)
//                     </td>
//                 </tr>
//                 <tr>
//                     <td id="MTAh">
//                         <b>June 2015 July 2015</b>
//                     </td>
//                     <td id="MTAd">
//                         <b><i>Microsoft Technology Assistant (MTA) Database
//                             Fundamentals</i></b><br/>
//                         <b>Lovely Professional University</b><br/>
//                         Issued by Microsoft on 24th November, 2016<br/>
//                         Score: 90% <br/>
//                         MTA certificate link: <a href="https://www.youracclaim.com/badges/490e0738-31f5-4587-8506-b76f927b5471">Click here</a>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td id="DKh">
//                         <b>January 2006 - December 2008</b>
//                     </td>
//                     <td id="DKd">
//                         <b><i>Grade 12 GCE O' Level</i></b><br/>
//                         <b>David Kaunda National Technical High School</b><br/>
//                         Majors: Additional Mathematics, History, Geography
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     )
// }

// export default Education
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
