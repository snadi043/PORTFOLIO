import React from "react";
import Tooltip from "../Tooltip";
import Text from "../Text";

const Progressbar = (props) => {
    return(
        <div className="progress-stacked">
            <div className="progress progressbar bg-info" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}>
                <Tooltip tooltipTitle="95%">
                    <Text>HTML</Text>
                </Tooltip>
            </div>
            <div className="progress progressbar bg-success" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}>
                <Tooltip tooltipTitle="95%">
                    <Text>CSS</Text>
                </Tooltip>
            </div>
            <div className="progress progressbar bg-danger" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}>
                <Tooltip tooltipTitle="85%">
                   <Text>JS</Text>
                </Tooltip>
            </div>
        </div> 
    );
}

export default Progressbar;



        // {...props.forEach(() => (
    //         <div className="progress progressbar `{{$props.backgroundColor}}`" 
    //             role="progressbar" 
    //             aria-label="Segment one" 
    //             aria-valuenow="15" 
    //             aria-valuemin="0" 
    //             aria-valuemax="100" 
    //             style={{width: '55%'}}>
    //             <Tooltip tooltipTitle={props.skillPercentage}>
    //                 <Text>{props.skillTitle}</Text>
    //             </Tooltip>
    //         </div>
    //     )
    // )}