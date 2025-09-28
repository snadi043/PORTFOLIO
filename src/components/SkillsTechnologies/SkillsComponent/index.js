import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Text from '../../../Utilities/Text';
import PageIntroSection from '../../../Utilities/PageIntroSection';

import SkillMatrix from '../SkillMatrix';

import './style.scss';

const SkillsComponent = () => {
    return (
        <Wrapper className="skills-page">
            <PageIntroSection introHeading={"Skills & Technologies"}>
                <Text className="fs-6">
                Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                Coffee Lover.
                </Text>
            </PageIntroSection>
            <SkillMatrix/>
        </Wrapper>
    );
};

export default SkillsComponent;
