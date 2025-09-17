import React from 'react';
import UnderlinedText from '../../../Utilities/UnderlinedText';
import Text from '../../../Utilities/Text';
import './style.scss';
import SkillMatrix from '../SkillMatrix';

const Skills = () => {
    return (
        <div className="container-fluid skills-page-intro">
            <UnderlinedText headerText="Skills & Technologies"/>
                <Text className="fs-4 text">
                Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                Coffee Lover.
                </Text>
            <SkillMatrix/>
          </div>
    );
};

export default Skills;
