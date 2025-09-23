import React from 'react';
import Wrapper from '../Wrapper';
import UnderlinedText from '../UnderlinedText';

const PageIntroSection = (props) => {
    return(
        <Wrapper className="container-fluid page-intro-main-wrapper">
            <UnderlinedText headerText={props.introHeading}/>
            <Wrapper className="page-intro-description">
                {props.children}
            </Wrapper>
        </Wrapper>
    );
}
export default PageIntroSection;