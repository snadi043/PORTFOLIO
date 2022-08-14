import React from 'react';
import { useEffect, useState } from 'react';
import {faAngular, faCss3,faGitAlt,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './style.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
        <>
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
            <p>
              • Efficient Web Developer with 2 years of professional experience in Web development technologies and  Agile Software Development Lifecycles with good understanding in client requirements. <br/><br/>
              • Experience in developing effective User Interfaces using HTML/HTML5, CSS, SASS, Bootstrap, PHP, jQuery, JavaScript, AJAX, JSON, ReactJS and NodeJS.<br/><br/>
              • Experience in implementing JavaScript (ES6) features like Object Oriented concepts and arrow functions.<br/><br/>
              • Expertise in writing SQL quires, creating database tables and implementing CRUD operations on database servers like Apache Tomcat, Xampp and phpMyAdmin.<br/><br/>
              • Experienced in designing websites with CMS (Content Management System) tools like WordPress.<br/><br/>
              • Good understanding of NOSQL databases like MongoDB.<br/><br/>
              • Experience in using distributed version control tools like Git and GitHub for maintaining versions of source code. <br/><br/>
              • Experience in Docker containerization and customization of Docker images. <br/><br/>
              • Experience in building Continuous Integration (CI) /Continuous Deployment (CD) pipelines for application requirements using Jenkins. <br/><br/>
              • Implemented projects in software development methodologies such as Agile, Scrum and Waterfall. <br/><br/>
              • Experience in using Integrated Development Environments (IDE) such as Eclipse, Visual Studio and Sublime Text 3.<br/><br/>
              • Experience in working with project tracking tools like JIRA, Freed Camp and Microsoft Visio. <br/><br/><br/>

              • Efficient Web Developer with 2 years of professional experience in Web development technologies and  Agile Software Development Lifecycles with good understanding in client requirements. <br/><br/>
              • Experience in developing effective User Interfaces using HTML/HTML5, CSS, SASS, Bootstrap, PHP, jQuery, JavaScript, AJAX, JSON, ReactJS and NodeJS.<br/><br/>
              • Experience in implementing JavaScript (ES6) features like Object Oriented concepts and arrow functions.<br/><br/>
              • Expertise in writing SQL quires, creating database tables and implementing CRUD operations on database servers like Apache Tomcat, Xampp and phpMyAdmin.<br/><br/>
              • Experienced in designing websites with CMS (Content Management System) tools like WordPress.<br/><br/>
              • Good understanding of NOSQL databases like MongoDB.<br/><br/>
              • Experience in using distributed version control tools like Git and GitHub for maintaining versions of source code. <br/><br/>
              • Experience in Docker containerization and customization of Docker images. <br/><br/>
              • Experience in building Continuous Integration (CI) /Continuous Deployment (CD) pipelines for application requirements using Jenkins. <br/><br/>
              • Implemented projects in software development methodologies such as Agile, Scrum and Waterfall. <br/><br/>
              • Experience in using Integrated Development Environments (IDE) such as Eclipse, Visual Studio and Sublime Text 3.<br/><br/>
              • Experience in working with project tracking tools like JIRA, Freed Camp and Microsoft Visio. <br/><br/>

            </p>
    </div>
  </div>
      </>
    )
}

export default About;
