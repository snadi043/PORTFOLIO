/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import {faAngular, faCss3,faGitAlt,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss';
import Timeline from '../Timeline';

import Text from '../../Utilities/Text';
import FilledBox from '../../Utilities/FilledBox';
import Image from '../../Utilities/Image';
import Icon from '../../Utilities/Icon';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
    <div className="container-fluid about-page">
      <div className="container-about-page-intro">
        <Text style={{}}
              className="fs-1 text">
              About
        <FilledBox style={{height:'2px', width: '20px', paddingTop: '10px', backgroundColor:"#149ddd", margin: '0'}} />
        </Text>
        <Text>
          Full Stack Developer, 4+ years of software development experience with diverse skill set spanning mobile and web development, UI/UX design, and backend services. Experienced in working with a range of technologies such as React, Angular, Node.js, AWS, Docker, SQL, MongoDB and Flutter. Strong background in implementing scalable, reusable components and efficient development workflows. Passionate about optimizing user experiences and delivering high-performance, cloud-based applications. Proven ability to work collaboratively in agile teams and contribute to end-to-end development, from design to deployment.
        </Text>
      </div>
      <div className="container about-page-profile">
        <div className="container about-page-image">
          <Image></Image>
        </div>
        <div className='container about-page-personal-details'>
          <Text>Personal Details</Text>
        </div>
      </div>
      <div className='container about-page-analytics'>
        <Icon></Icon>
        <Text></Text>
      </div>
    </div>
    );
}

export default About;
