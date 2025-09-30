import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Text from '../../../Utilities/Text';
import PageIntroSection from '../../../Utilities/PageIntroSection';

import ContactDetails from '../ContactDetails';
import ContactForm from '../ContactForm';

import './style.scss';

const ContactComponent = () => {
    return (
      <Wrapper className="contact-page">
        <PageIntroSection introHeading={"Contact"}>
          <Text className="fs-6">
          Below are the details to contact me anytime. Feel free to Email me anytime. Thank you for all your support.
          </Text>
        </PageIntroSection>
        <Wrapper className="container-fluid contact-page-info-wrapper">
          <ContactDetails/>
          <ContactForm/>
        </Wrapper>
      </Wrapper>
    );
}

export default ContactComponent;