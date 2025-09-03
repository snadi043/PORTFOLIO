import React, { Fragment } from 'react';
import Profile from '../Profile/ProfileDetails';
import Button from '../../Utilities/Button';
import Icon from '../../Utilities/Icon';
import './style.scss';

const NavCanvasControl = (props) => {
    return(
        <Fragment>
            <Button
                className="btn"
                style={{backgroundColor:'#149ddd'}}
                height={30}
                width={30}
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasWithBothOptions" 
                aria-controls="offcanvasWithBothOptions">
                    <Icon 
                        width={30} 
                        height={30} 
                        fill="#ffffff" 
                        className="bi bi-list">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </Icon>
            </Button>
            <div 
                className="offcanvas offcanvas-start" 
                data-bs-scroll="true" 
                tabindex="-1" 
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
                <Profile/>
            <div class="container">
                {props.children}
            </div>
            </div>
        </Fragment>
    );
}

export default NavCanvasControl
