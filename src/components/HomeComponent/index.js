import React from 'react';

import Wrapper from '../../Utilities/Wrapper';
import Text from '../../Utilities/Text';
import TypeWritterComponent from '../../Utilities/TypeWritter';

import './style.scss';


const HomeComponent = () => {
    return (
        <Wrapper className='home-page-main-wrapper'>
                <Wrapper className="home-page-details-wrapper">
                    <Text className="container-fluid home-page-title">
                        SAI HARNADH
                    </Text>
                    <Wrapper>
                        <TypeWritterComponent />
                    </Wrapper>
                </Wrapper>
        </Wrapper>
    );
};

export default HomeComponent;