import React, {Fragment} from 'react';
import Icon from '../../../Utilities/Icon';
import Text from '../../../Utilities/Text';

const ProfileAnalytics = (props) => {
    return(
        <Fragment>
        <div className='container-fluid' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Icon 
            width={150} 
            height={150} 
            fill={"#149ddd"} 
            className="bi bi-kanban"
            style={{}}>
              <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"/>
          </Icon>
          <div className='container-fluid' style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text className="fs-3">2</Text>
            <Text className="fs-6">Projects Volunteered</Text>
          </div>
        </div>
        <div className='container-fluid' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Icon 
            width={150} 
            height={150} 
            fill={"#149ddd"} 
            className="bi-patch-check"
            style={{}}>
              <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
          </Icon>
          <div className='container-fluid' style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text className="fs-3">4</Text>
            <Text className="fs-6">Professional Certifications</Text>
          </div>
        </div>
        <div className='container-fluid' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Icon 
            width={150} 
            height={150} 
            fill={"#149ddd"} 
            className="bi bi-mortarboard"
            style={{}}>
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
          </Icon>
          <div className='container-fluid' style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text className="fs-3">2</Text>
            <Text className="fs-6">Professional Degrees</Text>
          </div>
        </div>
        <div className='container-fluid' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Icon 
            width={150} 
            height={150} 
            fill={"#149ddd"} 
            className="bi bi-4-circle"
            style={{}}>
              <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
          </Icon>
          <div className='container-fluid' style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text className="fs-3">4</Text>
            <Text className="fs-6">Professional Experience</Text>
          </div>
        </div>
        </Fragment>
    );
}

export default ProfileAnalytics;