import React, { Fragment } from 'react';
import Button from '../../Utilities/Button';

const NavCanvasControl = (props) => {
    return(
        <Fragment>
        <button 
            className="btn btn-primary"
            type="button"
            style={props.style}
            height={props.height}
            width={props.width}
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasWithBothOptions" 
            aria-controls="offcanvasWithBothOptions">
        </button>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
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