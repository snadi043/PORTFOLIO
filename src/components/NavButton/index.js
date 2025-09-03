import React from "react";
import Icon from "../../Utilities/Icon";
import Text from '../../Utilities/Text';

const NavButton = (props) => {
    return(
        <div className="container">
            <nav className="navbar">
                <div className="container-fluid align-items-start align-content-center flex-wrap">
                    <a className="navbar-brand" href={props.href}>
                        <Icon 
                            width={30} 
                            height={30} 
                            fill="#a8a9b4" 
                            className={props.className}
                            viewBox="0 0 16 16">
                            <path d={props.path}></path>
                        </Icon>
                        <Text style={{color:'#a8a9b4'}}>
                            {props.children}
                        </Text>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavButton