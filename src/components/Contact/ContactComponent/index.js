import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Text from '../../../Utilities/Text';
import PageIntroSection from '../../../Utilities/PageIntroSection';

import ContactDetails from '../ContactDetails';

import './style.scss';

const ContactComponent = () => {
    return (
      <Wrapper className="contact-page">
        <PageIntroSection introHeading={"Contact"}>
          <Text className="fs-6">
            Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
            Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
            Coffee Lover.
          </Text>
        </PageIntroSection>
        <ContactDetails/>
      </Wrapper>
    );
}

export default ContactComponent;