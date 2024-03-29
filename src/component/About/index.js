/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import {faAngular, faCss3,faGitAlt,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss';
import Timeline from '../Timeline';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
    <div className="main">
    <h1>SUMMARY</h1>
      <div className="left">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
        </div>
        <Timeline/>

            {/* <p>• Efficient Web Developer with 2 years of professional experience in Web development technologies and  Agile Software Development Lifecycles with good understanding in client requirements.</p>
            <p>• Experience in developing effective User Interfaces using HTML/HTML5, CSS, SASS, Bootstrap, PHP, jQuery, JavaScript, AJAX, JSON, ReactJS and NodeJS.</p>
            <p>• Experience in implementing JavaScript (ES6) features like Object Oriented concepts and arrow functions.</p>
            <p>• Expertise in writing SQL quires, creating database tables and implementing CRUD operations on database servers like Apache Tomcat, Xampp and phpMyAdmin.</p>
            <p>• Experienced in designing websites with CMS (Content Management System) tools like WordPress.</p>
            <p>• Good understanding of NOSQL databases like MongoDB.</p>
            <p>• Experience in using distributed version control tools like Git and GitHub for maintaining versions of source code. </p>
            <p>• Experience in Docker containerization and customization of Docker images. </p>
            <p>• Experience in building Continuous Integration (CI) /Continuous Deployment (CD) pipelines for application requirements using Jenkins. </p>
            <p>• Implemented projects in software development methodologies such as Agile, Scrum and Waterfall. </p>
            <p>• Experience in using Integrated Development Environments (IDE) such as Eclipse, Visual Studio and Sublime Text 3.</p>
            <p>• Experience in working with project tracking tools like JIRA, Freed Camp and Microsoft Visio. </p>
            <p></p> */}
              
              
             
             


            
    </div>
  </div>
    )
}

export default About;
