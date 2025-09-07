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
                    position: 'absolute',
                    color: '#ffffff', 
                    fontSize: '64px', 
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bolder',
                    textAlign: 'center',
                    justifyContent: 'center',
                    margin: '350px 150px',
                    alignContent: 'center'
                    }}>
                        SAI HARNADH
                </Text>
                <TypeWritterComponent />
        </div>
    );
};

export default HomeComponent;