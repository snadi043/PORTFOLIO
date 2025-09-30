import React from 'react';

import IconWithText from '../../../Utilities/IconWithText';
import Wrapper from '../../../Utilities/Wrapper';

import './style.scss';

// const website = <Wrapper><a href="https://github.com/snadi043'></a></Wrapper>
const personalDetailsData = {
    'Age:': '30',
    'City:': 'Ottawa',
    'Phone:': '343-999-2611',
    'Birthday:': '19-12-1995',
    'Degree:': 'Masters',
    'Website:': (<a href='https://github.com/snadi043/PORTFOLIO'>website</a>),
    'Email:': 'nsharnadh18@gmail.com',
    'Freelance:': 'Available',
}

const AboutPersonalDetails = () => {
    return (
        <Wrapper className="about-page-personal-details-wrapper">
            {Object.entries(personalDetailsData).map(([title, description]) => (
                <IconWithText
                    key={title} 
                    svgWidth={16} 
                    svgHeight={16} 
                    className={"bi bi-chevron-right"} 
                    iconPath={"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"} 
                    textTitle={title} 
                    textDescription={description}
                    textTitleStyles={{padding: '5px'}}
                    textDescriptionStyles={{padding: '5px'}}
                    textWrapperStyle={{display: 'flex', flexDirection: 'row'}}
                />
            ))}
        </Wrapper>
    );
}

export default AboutPersonalDetails;


