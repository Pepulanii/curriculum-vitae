import React from 'react'
import profpic from './profpic.png'

function About() {
    return (
        <div className="Abt">
            <table id="about">
                <tr id="heading">
                    <th>About</th>
                    <th></th>
                    <th>Details</th>
                </tr>
                
                <tr>
                    <td id="prof-heading">
                        <p>
                            I have a keen interest in building web apps using REACT 
                            javascript library and I am open to learning from others 
                            and being informative when it is required from me. 
                        </p>
                    </td>

                    <td id="profpic">
                        <img className="profpic" src ={profpic} alt="profpic"/>
                    </td>
                    <td id="prof-dets">
                      <b>Name:</b><br/>
                      Pepulani Ngwira
                      <br/><br/>
                      <br></br>
                      <b>Location:</b><br/>
                      Lusaka, Zambia
                      <br/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default About
