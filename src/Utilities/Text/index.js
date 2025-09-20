import React from 'react';

const Text = (props) => {
    const mergeStyles = {
        textAlign: 'justify',
    }
    return(
        <div className='container-fluid'> 
            <div
            style={{ ...mergeStyles, ...props.style }}
            className={props.className}>
                {props.children}
        </div>
        </div>
    );
}

export default Text;