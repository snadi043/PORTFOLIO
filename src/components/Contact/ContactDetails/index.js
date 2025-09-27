import React from 'react';

import contactDetailsData from './data';

import Wrapper from '../../../Utilities/Wrapper';
import Card from '../../../Utilities/Card';
import IconWithText from '../../../Utilities/IconWithText';

import './style.scss';

const iconWrapperStyle = {
    display: 'flex',
    height: '45px',
    width: '45px',
    borderRadius: '50px',
    backgroundColor: '#f4fafd',
    justifyContent: 'center',
    alignItems: 'center'
}

const ContactDetails = () => {
    return (
        <Wrapper style={{padding: '60px 0px'}}>
            <Card>
                {contactDetailsData.map((data, index) => <IconWithText
                    iconPath={data.iconPath}
                    textTitle={data.textTitle}
                    className={data.className}
                    textDescription={data.textDescription}
                    svgHeight={"24px"}
                    svgWidth={"24px"}
                    iconWrapperStyle={iconWrapperStyle}
                    textTitleStyles={{fontWeight: 'bolder', fontSize: '18px'}}
                    additionalStyles={{padding: '20px'}}
                />)}
                <Wrapper style={{padding: '20px'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11205.506441721562!2d-75.6746598660279!3d45.40174463176831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce058dc231d1d5%3A0x3dfd1915488e9b06!2sFrobisher%20Ln%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1614662504731!5m2!1sen!2sca" 
                        title="contact_title"
                        width={"100%"} 
                        height="250" 
                        loading="lazy"
                        style={{border:0}}
                    />
                </Wrapper>
            </Card>
        </Wrapper>
    );
}

export default ContactDetails;