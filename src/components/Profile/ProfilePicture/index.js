import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Image from '../../../Utilities/Image';

import './style.scss';

const ProfilePicture = (props) => {
    return (
        <Wrapper className='container profile-picture-wrapper'>
            <Image
                src="https://avatars.githubusercontent.com/u/60456049?v=4"
                alt="profile_image"
                height='200px'
                width='200px'
                className="profile-picture-image"/>
        </Wrapper>
    );
}

export default ProfilePicture;