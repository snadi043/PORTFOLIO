import React from 'react';

import Wrapper from '../Wrapper';

const Icon = (props) => {
    return(
        <Wrapper>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width} 
            height={props.height} 
            fill={props.fill} 
            className={props.className}
            viewBox="0 0 16 16"
            >
            {props.children}
        </svg>
        </Wrapper>
    );
}

export default Icon
