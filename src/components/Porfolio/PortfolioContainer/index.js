import PortfolioProjectExtensions from '../PortfolioProjectExtenstions';
import PortfolioNavTabComponent from '../PortfolioComponent/PortfolioNavTabComponent';

import portfolioData from './data';
import shufflePortfolioElements from '../../../Utilities/ShuffleElements';

const PortfolioContainer = () => {
    return(
    <div className="container-fluid">
        <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
            {portfolioData.map((group, groupIdx) => 
                <PortfolioNavTabComponent
                    key={group.groupName}
                    groupIdx={groupIdx}
                    group={group}
                    shufflePortfolioElements={shufflePortfolioElements}
                />
            )}
        </ul>
        <div className="tab-content" id="pills-tabContent">
            {portfolioData.map((group, groupIdx) => 
                <div
                    className={`tab-pane fade${groupIdx === 0 ? ' show active' : ''}`}
                    id={`pills-${group.groupName}`}
                    role="tabpanel"
                    aria-labelledby={`pills-${group.groupName}-tab`}
                    tabIndex="0"
                    key={group.groupProjects.length}
                >
                    <div className="row row-cols-1 row-cols-md-3 g-4" id="wrapper">
                        {group.groupProjects.map((project, projectIdx) => (
                            <div className="col" key={projectIdx}>
                                <PortfolioProjectExtensions
                                    key={project.projectIdx}
                                    src={project.imageSrc}
                                    alt={project.imageTitle}
                                    projectName={project.projectName}
                                    projectDescription={project.projectDescription}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
    );
}
export default PortfolioContainer;
