import React from "react";
import Tooltip from "../Tooltip";
import Text from "../Text";

const Progressbar = (props) => {
    return(
        <div className="progress-stacked" style={{display:'flex', height: 'inherit', alignItems: 'center'}}>
            <div className="progress progressbar bg-info" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" width={props.progressWidth1}
                style={{borderRadius: '0', height:'auto', justifyContent: 'space-evenly'}}>
                <Tooltip tooltipTitle={props.skillPercentage1}>
                    <Text>{props.skillLabel1}</Text>
                </Tooltip>
            </div>
            <div className="progress progressbar bg-success" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" width={props.progressWidth2}
                style={{borderRadius: '0', height:'auto', justifyContent: 'space-evenly'}}>
                <Tooltip tooltipTitle={props.skillPercentage2}>
                    <Text>{props.skillLabel2}</Text>
                </Tooltip>
            </div>
            <div className="progress progressbar bg-danger" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" width={props.progressWidth3}
                style={{borderRadius: '0', height:'auto', justifyContent: 'space-evenly'}}>
                <Tooltip tooltipTitle={props.skillPercentage3}>
                   <Text>{props.skillLabel3}</Text>
                </Tooltip>
            </div>
        </div> 
    );
}

export default Progressbar;
