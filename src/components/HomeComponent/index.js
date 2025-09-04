import React from 'react';
// import Image from '../../Utilities/Image';
import Text from '../../Utilities/Text';
import TypeWritterComponent from '../../Utilities/TypeWritter';
// import {Link} from 'react-router-dom';
// import './style.scss';

const HomeComponent = () => {
    return (
        <div className='container-fluid' style={{backgroundImage: 'url(https://avatars.githubusercontent.com/u/60456049?v=4)', 
                backgroundSize: 'cover',
                height:'100vh'}}>
                <Text style={{
                    color: '#242020ff', 
                    fontSize: '48px', 
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: '600',
                    display: 'flex', 
                    textAlign: 'center'
                }}>
                SAI HARNADH
            <TypeWritterComponent />
            </Text>
        </div>
    );
};

export default HomeComponent;