import React from  'react';

const Image = (props) => {
    return (
        <img 
            src={props.src} 
            alt={props.alt} 
            style={props.style}
            height={props.height}
            width={props.width}
        />
    );
}
export default Image;
