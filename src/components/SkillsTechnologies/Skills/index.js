import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import UnderlinedText from '../../../Utilities/UnderlinedText';
import Text from '../../../Utilities/Text';

import SkillMatrix from '../SkillMatrix';

import './style.scss';

const Skills = () => {
    return (
        <Wrapper className="container-fluid skills-page-intro" style={{backgroundColor: '#f4fafd'}}>
            <UnderlinedText headerText="Skills & Technologies"/>
                <Text className="fs-4 text">
                Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                Coffee Lover.
                </Text>
            <SkillMatrix/>
        </Wrapper>
    );
};

export default Skills;
