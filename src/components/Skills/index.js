import React from 'react';
import UnderlinedText from '../../Utilities/UnderlinedText';
import Text from '../../Utilities/Text';
import Progressbar from '../../Utilities/Progressbar';
import './style.scss';

const Skills = () => {
    return (
        <div className="container-fluid about-page-intro">
            <UnderlinedText headerText="Skills & Technologies"/>
            <Text className="fs-4 text">
            Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
            Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
            Coffee Lover.
            </Text>
            <div className='container-fluid md-2 p-2' style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: '10px', columnGap: '50px', marginTop: '20px', fontWeight: 'bold'}}>
            <div className='container -fluid md-2 p-2' style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: '5px', columnGap: '5px', marginTop: '20px'}}>
                <Text>Frontend</Text> 
                <Progressbar/>
                <Progressbar/>

            </div>
            <Text>Backend</Text>
            <Text>Databases</Text>
            <Text>Frameworks</Text>
            <Text>Environments</Text>
            <Text>Cloud</Text>
          </div>
      </div>
    );
};

export default Skills;
