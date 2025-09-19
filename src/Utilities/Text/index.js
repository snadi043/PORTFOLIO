import React from 'react';

const Text = (props) => {
    return(
        <div className='container-fluid'>
            <span
                style={props.style}
                className={props.className}
                { ...props}
                >
                {props.children}
            </span>
        </div>
    );
}

export default Text;