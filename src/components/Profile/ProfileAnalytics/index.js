import React from 'react';

import profileAnalyticsData from './data';

import Wrapper from '../../../Utilities/Wrapper';
import IconWithText from '../../../Utilities/IconWithText';

import './style.scss';

const textTitleStyles = {
    fontSize: '36px', 
    fontWeight: 'bolder', 
    textAlign: 'center'
}

const textDescriptionStyles = {
    fontSize: '16px', 
    textAlign: 'center'
}

const ProfileAnalytics = () => {
    return(
        <Wrapper className="container-fluid profileAnalytics" style={{display: 'flex'}}>
            {profileAnalyticsData.map((profileAnalyticsData, index) => 
                <IconWithText
                    key={profileAnalyticsData.textDescription}
                    iconPath={profileAnalyticsData.iconPath}
                    className={profileAnalyticsData.className}
                    svgHeight={'100'}
                    svgWidth={'100'}
                    textDescription={profileAnalyticsData.textDescription}
                    textTitle={profileAnalyticsData.textTitle}
                    textTitleStyles={textTitleStyles}
                    textDescriptionStyles={textDescriptionStyles}
                />
            )}
        </Wrapper>
        );
}
    
export default ProfileAnalytics;