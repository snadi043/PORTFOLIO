import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Text from '../../../Utilities/Text';
import PageIntroSection from '../../../Utilities/PageIntroSection';

import PortfolioContainer from '../PortfolioContainer';

import './style.scss';

const PortfolioComponent = () => {
    return(
        <Wrapper className="portfolio-page">
            <PageIntroSection introHeading={"Portfolio"}>
                <Text className="fs-6">
                    In this section, I tried to serve you some of the simple, yet efficent projects in terms of end-to-end development which I feel emphasizes on my core strengths as a <b>"Fullstack Software Developer"</b>.
                    Try to visit the responsive links to checkout my projects on github and take some time to leave your reviews and comments if possible.  
                </Text>
            </PageIntroSection>
                <PortfolioContainer/>
        </Wrapper>

    );
}
export default PortfolioComponent;