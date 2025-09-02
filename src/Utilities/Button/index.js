import React from 'react';

const Button = (props) => {
    return (
        <button
            className={props.className}
            type={props.type}
            height={props.height}
            width={props.width}
            style={props.style}
            >
            {props.children}
        </button>
    );
}
export default Button