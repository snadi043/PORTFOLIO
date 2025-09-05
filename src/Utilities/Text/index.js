import React from 'react';

const Text = (props) => {
    return(
        <div className='container-fluid'>
            <p
                style={props.style}
                className={props.className}
                { ...props}
                >
                {props.children}
            </p>
        </div>
    );
}

export default Text