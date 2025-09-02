import React from 'react';

const Button = (props) => {
    return (
        <button
            className={props.className}
            type="button"
            height={props.height}
            width={props.width}
            style={props.style}
            onClick={props.onClick}
            {...props}>
            {props.children}
        </button>
    );
}
export default Button
