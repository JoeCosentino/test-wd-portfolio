import React from "react";
import resume from '../../assets/downloads/Joe Cosentino Web Dev Resume 2022.pdf'
import './resume.css'

function Resume() {
    return (
        <div className="resume">
            Download my resume<span>
            <a href={resume} download> Here</a></span>
            <div>
                <h3>Front-End Proficiencies</h3>
                <ul className="list-wrapper">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Front-End JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div>
                <h3>Back-End Proficiencies</h3>
                <ul className="list-wrapper">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>Back-End JavaScript</li>
                </ul>
            </div>
        </div>
    )
    
}

export default Resume;