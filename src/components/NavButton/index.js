import React from "react";
// import Button from "../../Utilities/Button";
import Icon from "../../Utilities/Icon";
import Text from '../../Utilities/Text';

const NavButton = (props) => {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-md bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={props.href}>
                        <Icon 
                            width={25} 
                            height={25} 
                            fill="#000000" 
                            className={props.className}
                            viewBox="0 0 16 16"
                            path={props.path}>
                        </Icon>
                        <Text>
                            {props.children}
                        </Text>
                    </a>
                </div>
            </nav>
        </div>
        // <Button
        //     className="btn btn-primary"
        //     type="button"
        //     height={25}
        //     width={25}
        //     style={{backgroundColor: '#733898'}}
        //     data-bs-toggle="offcanvas"
        //     data-bs-target="#offcanvasWithBothOptions" 
        //     aria-controls="offcanvasWithBothOptions"
        //     >
        //     {/* <Icon 
        //         height={25}
        //         width={25}
        //         className="bi bi-home"
        //         path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z">
        //     </Icon>
        //     <Text>
        //         {props.children}
        //     </Text> */}
        // // </Button>
    );
}

export default NavButton