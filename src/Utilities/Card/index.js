import React from 'react';
import Image from '../Image';
import Text from '../Text';

const Card = (props) => {
    return (
        <div className='container'>
            <div className="card">
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
            </div>
        </div>
    );
}

export default Card;