import React, { Fragment } from 'react';
import Button from '../../Utilities/Button';
import Icon from '../../Utilities/Icon';

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
                aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header"                     
                id="offcanvasCollapse">
                {/* <ProfilePicture>

                </ProfilePicture> */}
                    <Button
                        className="btn-close" 
                        type="button" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close">
                    </Button>
            </div>
            <div className="offcanvas-body">
                {props.children}
            </div>
            </div>
        </Fragment>
    );
}

export default NavCanvasControl
