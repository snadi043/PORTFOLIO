import Tooltip from "../Tooltip";
import Text from "../Text";

const Progressbar = () => {
    const skills = [
        // ...existing skills array...
        {
            id: '1',
            skillGroup: 'Frontend',
            skillTitle: ['REACT','ANGULAR','FLUTTER'],
            skillBackgroundColor: ['#58c4dc','#f63b35','#0468d7'],
            progressWidth: ["100%", '100%', '100%'],
            skillPercentage: ["80%", '70%', '60%']
        },
        {
            id: '2',
            skillGroup: 'Backend',
            skillTitle: ['.NET', 'PHP', 'NODE', 'EXPRESS'],
            skillBackgroundColor: ['#512bd4','#4F5B93','#364c2e','#d9d9d9'],
            progressWidth: ["100%", '100%', '100%', '100%'],
            skillPercentage: ["80%", '70%', '60%', '75%']
        },
        {
            id: '3',
            skillGroup: 'Databases',
            skillTitle: ['SQL','SSMS','MONGODB'],
            skillBackgroundColor: ['#044a64','#243a5e','#00684a'],
            progressWidth: ["100%", '100%', '100%'],
            skillPercentage: ["80%", '75%', '85%']
        },
        {
            id: '4',
            skillGroup: 'Languages',
            skillTitle: ['C#', 'JS', 'HTML', 'CSS'],
            skillBackgroundColor: ['#ac7ee1','#fdd663','#ffb599','#1a73e8'],
            progressWidth: ["100%", '100%', '100%', '100%'],
            skillPercentage: ["60%", '80%', '100%', '90%']
        },
        {
            id: '5',
            skillGroup: 'Cloud',
            skillTitle: ['AZURE','AWS','GCP'],
            skillBackgroundColor: ['#00677d','#0f141a','#1a73e8ff'],
            progressWidth: ["100%", '100%', '100%'],
            skillPercentage: ["60%", '75%', '40%']
        },
        {
            id: '6',
            skillGroup: 'Tools',
            skillTitle: ['GIT', 'GITHUB', 'DOCKER', 'KUBERNETES'],
            skillBackgroundColor: ['#f14e32','#202124','#2986FF','#3772ff'],
            progressWidth: ["100%", '100%', '100%', '100%'],
            skillPercentage: ["90%", '85%', '80%', '75%']
        },
        {
            id: '7',
            skillGroup: 'Environments',
            skillTitle: ['WINDOWS','LINUX','MACOS'],
            skillBackgroundColor: ['#243a5e','#f7bd54','#606060'],
            progressWidth: ["100%", '100%', '100%'],
            skillPercentage: ["80%", '75%', '80%']
        },
        {
            id: '8',
            skillGroup: 'Mobile',
            skillTitle: ['DART', 'NATIVE', 'IONIC'],
            skillBackgroundColor: ['#394c60','#58c4dc', '#176bff'],
            progressWidth: ["100%", '100%', '100%'],
            skillPercentage: ["70%", '70%', '40%']
        }
    ];

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