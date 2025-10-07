import React from 'react';

import ProfileDetails from '../../components/Profile/ProfileDetails';

import Button from '../Button';
import Icon from '../Icon';
import Wrapper from '../Wrapper';

import './style.scss';

const NavCanvasControl = (props) => {
    return(
        <Wrapper>
            <Button
                className="btn"
                style={{backgroundColor:'#149ddd', zIndex:'1', position:'fixed', top:'10px', left:'10px'}}
                height={30}
                width={30}
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasWithBothOptions" 
                aria-controls="offcanvasWithBothOptions">
                    <Icon 
                        iconWidth={30} 
                        iconHeight={30} 
                        iconFill="#ffffff" 
                        iconClassName="bi bi-list">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </Icon>
            </Button>
            <div 
                className="offcanvas offcanvas-start" 
                data-bs-scroll="true" 
                tabIndex="-1" 
                id="offcanvasWithBothOptions" 
                aria-labelledby="offcanvasWithBothOptionsLabel"
                style={{backgroundColor:'#040b14', width: '300px'}}>
            <div 
                className="offcanvas-header"                     
                id="offcanvasCollapse">
                    <Button
                        className="btn-close btn-close-black" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close"
                        style={{backgroundColor:'#a8a9b4'}}>
                    </Button>
            </div>
                <ProfileDetails/>
            <div className="container profile-details-navtab-wrapper">
                {props.children}
            </div>
            </div>
        </Wrapper>
    );
}

export default NavCanvasControl
