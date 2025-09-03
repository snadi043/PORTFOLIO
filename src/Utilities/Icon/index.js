import React from 'react';

const Icon = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width} 
            height={props.height} 
            fill={props.fill} 
            className={props.className}
            viewBox="0 0 16 16">
            {props.children}
        </svg>
    );
}

export default Icon
