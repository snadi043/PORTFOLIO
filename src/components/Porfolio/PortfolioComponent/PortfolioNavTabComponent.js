import React, {useEffect } from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import shufflePortfolioElements from '../../../Utilities/ShuffleElements';

const PortfolioNavTabComponent = (props) => {
    useEffect(() => {
        shufflePortfolioElements(props.group);
    }, [props.group]);

    return(
        <Wrapper>
            <li className="nav-item" role="presentation">
                <button
                    className={`nav-link${props.groupIdx === 0 ? ' active' : ''}`}
                    id={`pill-${props.group.groupName}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${props.group.groupName}`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${props.group.groupName}`}
                    aria-selected={props.groupIdx === 0 ? "true" : "false"}
                    onClick={props.shufflePortfolioElements(props.group.groupName)}
                >
                    {props.group.groupName}
                </button>
            </li>
        </Wrapper>
    );
}
export default PortfolioNavTabComponent;
