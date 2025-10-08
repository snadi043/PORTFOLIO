import React from 'react';

import offcanvasNavbuttonData from './data';

import Wrapper from '../Wrapper';
import NavCanvasControl from '../NavCanvasControl';
import NavButton from '../NavButton';

import './style.scss';

const Offcanvas = () => {
    return(
        <NavCanvasControl
            height={25}
            width={25}
            className="bi bi-list">
                <Wrapper className='container offcanvas-navbutton-wrapper'>
                    {offcanvasNavbuttonData.map((offcanvasData) => 
                        <NavButton
                            key={offcanvasData.title}
                            href={offcanvasData.href}
                            path={offcanvasData.path}
                            className={offcanvasData.className}
                            to={offcanvasData.to}>
                                {offcanvasData.title}
                        </NavButton>
                    )}
                </Wrapper>
        </NavCanvasControl>        
    );
}
export default Offcanvas;


