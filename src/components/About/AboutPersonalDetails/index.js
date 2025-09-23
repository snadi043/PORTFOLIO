import React from 'react';

import IconWithText from '../../../Utilities/IconWithText';

const personalDetailsData = [{
    details:{
        age: '30',
        city: 'Ottawa',
        phone: '343-999-2611',
        birthday: '19-12-1995',
        degree: 'Masters',
        website: '',
        emai: '',
        freelance: '',
    } 
}]
const AboutPersonalDetails = (props) => {
    return (
       personalDetailsData.map((data,index) => <IconWithText svgWidth={16} svgHeight={16} className={"bi bi-chevron-right"} iconPath={"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"} 
       textTitle={props.textTitle} textDescription={props.textDescription}></IconWithText>
    ));
}

export default AboutPersonalDetails;


