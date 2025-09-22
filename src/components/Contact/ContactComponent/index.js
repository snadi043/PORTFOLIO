import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import UnderlinedText from '../../../Utilities/UnderlinedText';
import Text from '../../../Utilities/Text';

import ContactDetails from '../ContactDetails';

import './style.scss';

const ContactComponent = () => {
    return (
      <Wrapper className="container-fluid contact-page" style={{backgroundColor: '#FFFFFF'}}>
      <UnderlinedText headerText="Contact"/>
      <Text className="fs-4">
          Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
          Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
          Coffee Lover.
        </Text>
      <ContactDetails/>
    </Wrapper>
    );
}

export default ContactComponent;

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11205.506441721562!2d-75.6746598660279!3d45.40174463176831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce058dc231d1d5%3A0x3dfd1915488e9b06!2sFrobisher%20Ln%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1614662504731!5m2!1sen!2sca" 
      width="600" 
      height="500" 
      allowfullscreen="" 
      loading="lazy"
      title="images">
      </iframe>

      <h2>Phone Number: 343-999-2611</h2>

      
      <h2>Email: nsharnadh18@gmail.com</h2>
     

      <h2>Address: Fontenay Crescent, Ottawa, Ontario</h2> */}