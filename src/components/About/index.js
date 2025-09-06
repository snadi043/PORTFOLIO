import React from 'react';
import { useEffect, useState } from 'react';
import './style.scss';

import ProfileAnalytics from '../Profile/ProfileAnalytics';

import Text from '../../Utilities/Text';
import FilledBox from '../../Utilities/FilledBox';
import Image from '../../Utilities/Image';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
    <div className="container-fluid about-page">
      <div className="container-fluid about-page-intro">
        <Text style={{}}
              className="fs-1 text">
              About
        <FilledBox style={{height:'2px', width: '20px', paddingTop: '10px', backgroundColor:"#149ddd", margin: '0'}} />
        </Text>
        <Text className="fs-4 text">
          Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
          Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
          Coffee Lover.
        </Text>
      </div>
      <div className="container-fluid about-page-profile" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '50px'}}>
        <div className="container-fluid about-page-image" style={{height: 'fit-content', width:'fit-content'}}>
          <Image
            src="https://avatars.githubusercontent.com/u/60456049?v=4"
            alt="about_page_profile_image" 
            style={{}}
            height={350}
            width={350}
            className=""></Image>
        </div>
        <div className='container-fluid about-page-personal-details'>
          <Text className="fs-2 text">Fullstack & Mobile Developer</Text>
          <Text className="fs-5 text">
            Looking for new opportunities to leverage my skills and contribute to exciting projects.
          </Text>
          <div className='container-fluid md-2 p-2'>
            <Text>Website</Text>
            <Text>City</Text>
            <Text>Phone</Text>
            <Text>Email</Text>
            <Text>Degree</Text>
            <Text>Freelance</Text>
          </div>
        </div>
      </div>
      <div className='container-fluid about-page-analytics' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <ProfileAnalytics/>
      </div>
    </div>
    );
}

export default About;


