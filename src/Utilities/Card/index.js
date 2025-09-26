import React from 'react';

import Wrapper from '../Wrapper';

const cardStyles = {
    backgroundColor: '#FFFFFF', 
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px 0px',
}
const Card = (props) => {
    return (
        <Wrapper 
            className='container-fluid card' 
            style={{...cardStyles, ...props.styles}}>
            {props.children}
        </Wrapper>
    );
}

export default Card;
