import React from "react";

import Wrapper from "../Wrapper";

import Icon from "../Icon";
import Text from '../Text';

import { Link } from "react-scroll";

const NavButton = (props) => {
    return(
        <Wrapper className="container navbutton-wrapper">
            <nav className="navbar">
                <Wrapper className="container-fluid navbar-data-wrapper">
                    <Link 
                        to={props.to}
                        smooth={true} 
                        duration={50}
                        className="navbar-brand" 
                        style={{display: 'flex'}} 
                        >
                        <Icon
                            iconWidth={30} 
                            iconHeight={30} 
                            iconFill="#a8a9b4" 
                            iconClassName={props.className}
                            viewBox="0 0 16 16">
                            <path d={props.path}></path>
                        </Icon>
                        <Text
                            style={
                                {
                                color:'#a8a9b4', 
                                fontSize: 18, 
                                fontWeight:'400', 
                                textAlign:'center', 
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignContent: 'center',
                                padding: '5px 20px'
                                }
                            }
                            >
                            {props.children}
                        </Text>
                    </Link>
                </Wrapper>
            </nav>
        </Wrapper>
    );
}

export default NavButton