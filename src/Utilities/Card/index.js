import React from 'react';

import Wrapper from '../Wrapper';
// import Image from '../Image';
// import Text from '../Text';

const cardStyles = {
    backgroundColor: '#FFFFFF', 
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px 0px',
}
const Card = (props) => {
    return (
        <Wrapper 
            className='container-fluid' 
            style={{...cardStyles, ...props.styles}}>
            {props.children}
        </Wrapper>
    );
}

export default Card;

{/* <div className="card">
                <Image 
                    src={props.src} 
                    alt={props.imageAlt} 
                    height={props.height} 
                    width={props.width} 
                    className={props.className}/>
                <div className="card-body">
                    <Text>
                        {props.text}
                    </Text>
                    {props.children}
                </div>
</div> */}