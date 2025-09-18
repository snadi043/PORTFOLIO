import React from 'react';

const PortfolioNavTabComponent = (props) => {
    return(
        <>
            <li className="nav-item" role="presentation" key={props.key}>
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
        </>
    );
}
export default PortfolioNavTabComponent;
