import React from "react";
import aboutMePic from '../../assets/selfie.jpg'
import './about.css'

function About () {
    return (
        <section className="about-me">
            <h1 id='about'>About Me</h1>
            <img 
                src={aboutMePic}
                alt='a look at the developer'
            />
            <p>
                Hello! My name is Joey, and I am a full-stack web developer. I began my coding journey at The University of Toronto Coding Bootcamp, and have since continued to teach my self new coding skills by utilizing the internet!
            </p> 
            <br />   
            <p>  
                Feel free to browse my past projects, and shoot me a message if you have any questions about my work, or if you are looking for some work done!
            </p>
        </section>        
    )
}

export default About;