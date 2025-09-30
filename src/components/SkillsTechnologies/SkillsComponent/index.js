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
                This section focuses mainly about the Tools and Technologies I had worked previously on which I am confident and comfortable to play around 
                and some which I have learnt recently and been trying out new things with them and additionally few of them which I think are helpful for me 
                to scale my career and am planning to learn in next couple of months which are like in a pipeline to upscale my passion for software development. 
                </Text>
            </PageIntroSection>
            <SkillMatrix/>
        </Wrapper>
    );
};

export default SkillsComponent;
