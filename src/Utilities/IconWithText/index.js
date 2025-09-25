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
      <Wrapper clasName="iconWrapper" style={props.iconWrapperStyle}>
        <Icon
          iconWidth={props.svgWidth}
          iconHeight={props.svgHeight} 
          iconFill={"#149ddd"} 
          iconClassName={props.className}>
          <path fillRule="evenodd" d={props.iconPath}/>
        </Icon>
      </Wrapper>
      <Wrapper className='container-fluid textWrapper' style={props.textWrapperStyle}>
          <Text style={props.textTitleStyles}>{props.textTitle}</Text>
          <Text style={props.textDescriptionStyles}>{props.textDescription}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default IconWithText;
