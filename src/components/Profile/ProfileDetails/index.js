import React from 'react';

import ProfilePicture from '../ProfilePicture';

import Icon from '../../../Utilities/Icon';
import Wrapper from '../../../Utilities/Wrapper';

import profileSidebarIconData from './data';

import './style.scss';

const iconWrapperStyles = {
    backgroundColor: '#ffffff', 
    borderRadius: '50%'
}

const ProfileDetails = () => {
    return(
        <Wrapper className="profile-details-main-wrapper">
            <ProfilePicture/>
            <Wrapper className="container profile-details-text-icon-wrapper">
                <div className='container'>
                    <Wrapper className="profile-details-text">SAI HARNADH</Wrapper>
                </div>
                <div className="container" style={{display: 'flex', justifyContent: 'center', gap: '30px', padding: '30px'}}>
                    {profileSidebarIconData.map((sidebarData, index) => 
                        <Icon
                            key={sidebarData.className}
                            iconWrapperStyles={iconWrapperStyles}
                            iconWidth={30} 
                            iconHeight={30} 
                            iconFill="#0f0f0fe9"
                            iconClassName={sidebarData.className}>
                                <path d={sidebarData.path}></path>
                        </Icon>
                    )}
                </div>
            </Wrapper>
        </Wrapper>
    );
}
export default ProfileDetails;
