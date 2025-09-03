import React from 'react';
import Image from '../../../Utilities/Image';

const ProfilePicture = (props) => {
    return (
        <div className='container' 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '10px solid #565658a8',
                borderRadius: '50%',
                overflow: 'hidden',
                height: '200px',
                width: '200px',
            }}>
            <Image
                src="https://avatars.githubusercontent.com/u/60456049?v=4"
                alt="profile_image"
                height='200px'
                width='200px'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                }}
            />
        </div>
    );
}

export default ProfilePicture;