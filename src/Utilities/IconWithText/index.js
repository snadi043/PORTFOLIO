import React from "react";
import Icon from '../../Utilities/Icon';
import Text from "../../Utilities/Text";

const IconWithText = (props) => {
  return (
    <div className='container-fluid' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Icon 
            width={150} 
            height={150} 
            fill={"#149ddd"} 
            className={props.className}
            style={props.style}>
              <path fillRule="evenodd" d={props.iconPath}/>
          </Icon>
          <div className='container-fluid' style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text className="fs-3">{props.count}</Text>
            <Text className="fs-6">{props.label}</Text>
          </div>
        </div>
  );
};

export default IconWithText;
