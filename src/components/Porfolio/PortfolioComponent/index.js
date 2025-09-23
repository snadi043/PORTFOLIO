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
                    Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                    Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                    Coffee Lover.
                </Text>
            </PageIntroSection>
                <PortfolioContainer/>
        </Wrapper>

    );
}
export default PortfolioComponent;