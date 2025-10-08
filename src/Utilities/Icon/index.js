import React from 'react';

import Wrapper from '../Wrapper';

const Icon = (props) => {
    return(
        <Wrapper style={props.iconWrapperStyles}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.iconWidth} 
            height={props.iconHeight} 
            fill={props.iconFill} 
            className={props.iconClassName}
            viewBox="0 0 16 16"
            onClick={props.onClick}
            >
            {props.children}
        </svg>
        </Wrapper>
    );
}

export default Icon
