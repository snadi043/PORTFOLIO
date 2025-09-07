import React from 'react';
import Text from '../Text';

const UnderlinedText = (props) => {
    return(
        <Text 
            style={{fontWeight: 'bolder'}}
            className="fs-1 text">
            {props.headerText}
                <div 
                    className='container-fluid' 
                    style={{
                        width: props.headerText ? props.headerText.length * 20: '10px', 
                        paddingTop: '10px', 
                        backgroundColor:"#149ddd", 
                        margin: '0'
                    }}>
                </div>
        </Text>
    );
}

export default UnderlinedText;
