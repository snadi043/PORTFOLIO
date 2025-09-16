import React from 'react';
import UnderlinedText from '../../../Utilities/UnderlinedText';
import Text from '../../../Utilities/Text';

import PortfolioContainer from '../PortfolioContainer';

import './style.scss';

const PortfolioComponent = () => {
    return(
        <div className="container-fluid portfolio-page-intro">
                <UnderlinedText headerText="Portfolio"/>
                <Text className="fs-4 text">
                    Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                    Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                    Coffee Lover.
                </Text>
                <PortfolioContainer/>
            </div>

    );
}
export default PortfolioComponent;