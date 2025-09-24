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
      <Wrapper className='container-fluid' style={props.textWrapperStyle}>
          <Text className={props.textTitleClassName} style={{padding: '5px',}}>{props.textTitle}</Text>
          <Text className={props.textTitleDescriptions} style={{padding: '5px'}}>{props.textDescription}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default IconWithText;
