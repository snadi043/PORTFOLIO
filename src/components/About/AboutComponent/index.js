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
          Coffee Lover.
        </Text>
      </PageIntroSection>
      <Wrapper className="container-fluid about-page-profile-details">
        <Image
            src="https://avatars.githubusercontent.com/u/60456049?v=4"
            alt="about_page_profile_image" 
            style={{}}
            height={350}
            width={350}
            className=""/>
        <Wrapper className='about-page-personal-details'>
          <UnderlinedText headerText={"Fullstack & Mobile Developer"}/>
          <Text className="fs-6">
            Looking for new opportunities to leverage my skills and contribute to exciting projects.
          </Text>
          <div className='container-fluid md-2 p-2' style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: '10px', columnGap: '50px', marginTop: '20px', fontWeight: 'bold'}}>
            <AboutPersonalDetails/>
          </div>
        </Wrapper>
      </Wrapper>
      <div className='container-fluid about-page-analytics' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <ProfileAnalytics/>
      </div>
      </Wrapper>
    );
}

export default AboutComponent;


