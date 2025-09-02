import React from 'react';

const Text = (props) => {
    return(
        <p
            fontSize={props.fontSize}
            // font-family={props.fontFamily}
            fontWeight={props.fontWeight}
            line-height={props.lineHeight}
            style={props.style}
            className={props.className}
            >
            {props.children}
        </p>
    );
}

export default Text