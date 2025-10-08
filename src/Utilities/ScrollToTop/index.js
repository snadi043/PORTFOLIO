import React, {useState, useEffect} from 'react';

import Icon from '../Icon';
import Wrapper from '../Wrapper';

import './style.scss';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            }
            else{
                setIsVisible(false)
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    const scrollToTop = () => {
        console.log("Scroll to top clicked");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return(
        <Wrapper>
            <Icon 
                iconWidth={"50"}
                iconHeight={"50"}
                iconFill={"#149ddd"}
                iconClassName={"bi bi-arrow-up-circle scroll"}
                onClick={scrollToTop}>
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
        </Icon>
        </Wrapper>
    );
}

export default ScrollToTop;