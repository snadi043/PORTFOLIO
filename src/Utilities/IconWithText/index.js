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
      <Wrapper className='container-fluid' style={{display: 'flex'}}>
          <Text className={props.textTitleClassName}>{props.textTitle}</Text>
          <Text className={props.textTitleDescriptions}>{props.textDescription}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default IconWithText;
