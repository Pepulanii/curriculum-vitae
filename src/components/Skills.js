// import React from 'react';

// function Skills() {
//   return (
//     <div>
//       <table id="skills">
//         <tr>
//           <td id="php">PHP</td>
//           <td id="react">React (Javascript library)</td>
//           <td id="html">HTML</td>
//         </tr>
//         <tr>
//           <td id="mysql">MySQL</td>
//           <td id="mssql">MSSQL</td>
//           <td id="css">CSS</td>
//         </tr>
//         <tr>
//           <td id="linux">Linux</td>
//           <td id="git">GIT (software version control system)</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default Skills;
import React from "react";

function Skills() {
  return (
    <div className="card">
      <div className="card-content">
        <h6>
          <strong>PROFESSIONAL SKILLS</strong>
        </h6>
        <div className="row mt-top">
          <div className="col s6">
            <p>HTML</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>CSS</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>Javascript (REACT)</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>PHP</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "60%" }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>MYSQL</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>MSSQL</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>GIT</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="col s6">
            <p>WORDPRESS</p>
            <div className="progress grey lighten-1">
              <div className="determinate blue" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
