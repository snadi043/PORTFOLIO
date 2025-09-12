import Tooltip from "../Tooltip";
import Text from "../Text";

import skills from "./data";

const Progressbar = () => {

    return (
        <div className='container-fluid md-2 p-2'
            style={{
                display: 'grid', 
                gridTemplateColumns: 'auto auto', 
                rowGap: 'inherit',
                columnGap: '30px' 
            }}>
            {skills.map((skillGroup) =>
                <div
                    key={skillGroup.id}
                    className='skill-row'
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                        flexDirection:'row',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Skill Group Name */}
                    <div style={{display: 'flex', margin: '10px', width: '100%', fontWeight: 'bold', color: '#ffffff'}}>
                        {skillGroup.skillGroup}
                    </div>
                    {/* Skills */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto auto',
                        margin: '10px',
                        width: '100%',
                        position: 'relative'
                    }}>
                        {skillGroup.skillTitle.map((title, idx) => (
                            <Tooltip key={idx} tooltipTitle={skillGroup.skillPercentage[idx]}>
                                <div
                                    style={{
                                        backgroundColor: skillGroup.skillBackgroundColor[idx],
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text style={{marginTop: '15px', textAlign: 'center'}}>{title}</Text>
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            )}
            {/* Responsive styles */}
            <style>
                {`
                @media (max-width: 700px) {
                    .skill-row {
                        grid-template-columns: 1fr !important;
                    }
                }
                `}
            </style>
        </div>
    );
};
export default Progressbar;