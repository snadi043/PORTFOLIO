import React from 'react';

const Icon = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width} 
            height={props.height} 
            fill={props.fillColor} 
            className={props.className}
            viewBox="0 0 16 16"
            path={props.path}>
        </svg>

    );
}

export default Icon
