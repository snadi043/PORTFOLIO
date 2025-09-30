import React from 'react';

import ProfileAnalytics from '../../Profile/ProfileAnalytics';
import AboutPersonalDetails from '../AboutPersonalDetails';

import Wrapper from '../../../Utilities/Wrapper';
import PageIntroSection from '../../../Utilities/PageIntroSection';
import UnderlinedText from '../../../Utilities/UnderlinedText';
import Text from '../../../Utilities/Text';
import Image from '../../../Utilities/Image';

import './style.scss';

const AboutComponent = () => {
    return (
      <Wrapper className="about-page">
        <PageIntroSection introHeading={"About"}>
          <Text className="fs-6">
            Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
            Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
            Coffee Lover <span style={{fontSize:'20px', verticalAlign: 'inherit', padding: '5px'}}>&#9749;</span>
          </Text>
        </PageIntroSection>
        <Wrapper className="container-fluid about-page-profile-details">
          <Image
            src="https://avatars.githubusercontent.com/u/60456049?v=4"
            alt="about_page_profile_image" 
            height={350}
            width={350}
          />
          <Wrapper className='about-page-personal-details'>
            <UnderlinedText headerText={"Fullstack & Mobile Developer"}/>
            <Text className="fs-6">
              Looking for new opportunities to leverage my skills and contribute to exciting projects.
            </Text>
            <AboutPersonalDetails/>
          </Wrapper>
        </Wrapper>
        <Wrapper className='about-page-analytics'>
          <ProfileAnalytics/>
        </Wrapper>
      </Wrapper>
    );
}

export default AboutComponent;


