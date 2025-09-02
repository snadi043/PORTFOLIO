import React from "react";
import Icon from "../../Utilities/Icon";
import Text from '../../Utilities/Text';

const NavButton = (props) => {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={props.href}>
                        <Icon 
                            width={30} 
                            height={30} 
                            fillColor="#000000" 
                            className={props.className}
                            viewBox="0 0 16 16">
                            <path d={props.path}></path>
                        </Icon>
                        <Text>
                            {props.children}
                        </Text>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavButton