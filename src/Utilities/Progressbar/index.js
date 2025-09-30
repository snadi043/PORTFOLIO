import Tooltip from "../Tooltip";
import Text from "../Text";
import Wrapper from "../Wrapper";

import skills from "./data";

import './style.scss';

const Progressbar = () => {

    return (
        <Wrapper className='container-fluid md-2 p-2 matrix-details-wrapper'>
            {skills.map((skillGroup) =>
                <Wrapper
                    className='skill-row-wrapper'
                    key={skillGroup.id}>
                        <Wrapper className="skillgroup-title">
                            {skillGroup.skillGroupTitle}
                        </Wrapper>
                        <Wrapper className="skill-title" style={{gridTemplateColumns: `repeat(${skillGroup.skillTitle.length}, minmax(auto, 1fr))`}}>
                            {skillGroup.skillTitle.map((title, idx) => (
                                <Tooltip key={idx} tooltipTitle={skillGroup.skillPercentage[idx]}>
                                    <Wrapper className="tooltip-data-wrapper" style={{ backgroundColor: skillGroup.skillBackgroundColor[idx] }}>
                                        <Text className="tooltip-text">{title}</Text>
                                    </Wrapper>
                                </Tooltip>
                            ))}
                    </Wrapper>
                </Wrapper>
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
        </Wrapper>
    );
};
export default Progressbar;