import React from 'react';
import Text from '../Text';

const UnderlinedText = (props) => {
    return(
        <Text 
            style={{fontWeight: 'bolder', display: 'flex', marginBottom: '50px'}}
            className="fs-1 text">
            {props.headerText}
                <div 
                    className='container-fluid' 
                    style={{
                        backgroundColor: '#149ddd',
                        marginTop: '65px',
                        display: 'flex',
                        width: '50px',
                        height: '3px',
                        position: 'absolute',
                    }}>
                </div>
        </Text>
    );
}

export default UnderlinedText;
