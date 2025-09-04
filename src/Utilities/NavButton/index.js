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
                            width={30} 
                            height={30} 
                            fill="#a8a9b4" 
                            className={props.className}
                            viewBox="0 0 16 16">
                            <path d={props.path}></path>
                        </Icon>
                        <Text
                            style={{
                                color:'#a8a9b4', 
                                fontSize: 18, 
                                fontWeight:'400', 
                                textAlign:'center', 
                                alignItems: 'center'}
                            }>
                            {props.children}
                        </Text>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavButton