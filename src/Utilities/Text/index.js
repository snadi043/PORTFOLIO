import React from 'react';

import Wrapper from '../Wrapper';

const Text = (props) => {
    const mergeStyles = {
        textAlign: 'justify',
    }
    return(
        <Wrapper> 
            <div
                style={{ ...mergeStyles, ...props.style }}
                className={props.className}>
                    {props.children}
            </div>
        </Wrapper>
    );
}

export default Text;