import React from "react";
import Icon from "../Icon";
import Text from '../Text';

const NavButton = (props) => {
    return(
        <div className="container">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{display: 'flex'}} href={props.href}>
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
                                alignContent: 'center'
                                }
                            }
                            >
                            {props.children}
                        </Text>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavButton