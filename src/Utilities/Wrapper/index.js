import React from 'react';

const Wrapper = (props) => {
    return (
        <div className={props.className} style={props.style}>
            {props.children}
        </div>
    );
}

export default Wrapper;