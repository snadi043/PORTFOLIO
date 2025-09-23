import React from "react";

import Wrapper from '../../Utilities/Wrapper';
import Icon from '../../Utilities/Icon';
import Text from "../../Utilities/Text";

const iconWithTextWrapperStyles = {
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'space-evenly', 
  alignItems: 'center'
}
const IconWithText = (props) => {
  return (
      <Wrapper className='container-fluid' style={iconWithTextWrapperStyles}>
        <div style={props.iconWrapperStyle}>
          <Icon
            iconWidth={props.svgWidth}
            iconHeight={props.svgHeight} 
            iconFill={"#149ddd"} 
            iconClassName={props.className}>
            <path fillRule="evenodd" d={props.iconPath}/>
          </Icon>
        </div>
        <div className='container-fluid'>
            <Text className="fs-3">{props.count}</Text>
            <Text className="fs-6">{props.label}</Text>
        </div>
      </Wrapper>
  );
};

export default IconWithText;
