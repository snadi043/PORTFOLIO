import Button from '../../../Utilities/Button';
import Image from '../../../Utilities/Image';
import Icon from '../../../Utilities/Icon';

import portfolioData from './data';

const PortfolioContainer = () => {
    return(
    <div className="container-fluid">
        <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
            {portfolioData.map((group, groupIdx) => 
                <li className="nav-item" role="presentation" key={groupIdx}>
                    <button
                        className={`nav-link${groupIdx === 0 ? ' active' : ''}`}
                        id={`pill-${group.groupName}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-${group.groupName}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-${group.groupName}`}
                        aria-selected={groupIdx === 0 ? "true" : "false"}
                    >
                        {group.groupName}
                    </button>
                </li>
            )}
            {/* Remaining Tab Options (Product, Design) */}
        </ul>
        <div className="tab-content" id="pills-tabContent">
            {portfolioData.map((group, groupIdx) => 
                <div
                    className={`tab-pane fade${groupIdx === 0 ? ' show active' : ''}`}
                    id={`pills-${group.groupName}`}
                    role="tabpanel"
                    aria-labelledby={`pills-${group.groupName}-tab`}
                    tabIndex="0"
                    key={groupIdx}
                >
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {group.groupProjects.map((project, projectIdx) => (
                            <div className="col" key={projectIdx}>
                                <div className="card container m-0 p-0">
                                    <div className='projectWrapper container d-flex m-0 p-0'>
                                        <Image 
                                            src={project.imageSrc}
                                            alt={project.imageTitle}
                                            className="image" 
                                            style={{width:'100%'}}
                                        />
                                        <div className="projectDetails">
                                            <div className="projectHeading container d-flex">
                                                <span>{project.projectName}</span>
                                            </div>
                                            <div className="projectExtensions container d-flex">          
                                                <Button type="button" className="btn">
                                                    <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                        <svg>
                                                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                            <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                            <path fillRule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                        </svg>
                                                    </Icon>
                                                </Button>
                                                <Button type="button" className="btn">
                                                    <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                        <svg>
                                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                        </svg>
                                                    </Icon>
                                                </Button>
                                            </div>
                                            <div className="projectDescription container d-flex">
                                                <span>{project.projectDescription}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Remaining Projects in the App Tab  */}
                    </div>
                </div>
            )}
            {/* Remaining Projects in the Product and Design Tabs */}
        </div>
    </div>
    );
}
export default PortfolioContainer;

                    // Tab List

            {/* <li className="nav-item" role="presentation">
                <button
                className="nav-link"
                id={`pill-${portfolioData[1].groupName}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${portfolioData[1].groupName}`}
                type="button"
                role="tab"
                aria-controls={`pills-${portfolioData[1].groupName}`}
                aria-selected="true"
                >
                {portfolioData[1].groupName}
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                className="nav-link"
                id={`pill-${portfolioData[2].groupName}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${portfolioData[2].groupName}`}
                type="button"
                role="tab"
                aria-controls={`pills-${portfolioData[2].groupName}`}
                aria-selected="false"
                >
                {portfolioData[2].groupName}
                </button>
            </li>  */}

                // Project List

            {/* <div className="col">
                        <div className="card container m-0 p-0" >
                            <div className='projectWrapper container d-flex m-0 p-0'>
                                <Image 
                                    src={portfolioData[0].groupProjects[1].imageSrc}
                                    alt={portfolioData[0].groupProjects[1].imageTitle}
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="projectDetails">
                                    <div className='projectHeading container d-flex'>
                                        <span>{portfolioData[0].groupProjects[1].projectName}</span>
                                    </div>
                                    <div className='projectExtensions container d-flex'>         
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                    </div>
                                    <div className='projectDescription container d-flex'>
                                        <span className='text d-flex text-dark text-align-center justify-content-center'>{portfolioData[0].groupProjects[1].projectDescription}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    // Remaining Projects in Product and Design tabs

                    {/* <div
            className="tab-pane fade"
            id={`pills-${portfolioData.productGroupName}`}
            role="tabpanel"
            aria-labelledby={`pills-${portfolioData.productGroupName}-tab`}
            tabindex="0"
            >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card container m-0 p-0" >
                            <div className='projectWrapper container d-flex m-0 p-0'>
                                <Image 
                                    src={portfolioData.product[0].imageSrc}
                                    alt={portfolioData.product[0].imageTitle}
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="projectDetails">
                                    <div className='projectHeading container d-flex'>
                                        <span>{portfolioData.product[0].projectName}</span>              
                                    </div>
                                    <div className='projectExtensions container d-flex'>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                    </div>
                                    <div className='projectDescription container d-flex'>
                                        <span className='text d-flex text-dark text-align-center justify-content-center'>{portfolioData.product[0].projectDescription}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container m-0 p-0">
                            <div className='projectWrapper container d-flex m-0 p-0'>
                                <Image 
                                    src={portfolioData.product[1].imageSrc}
                                    alt={portfolioData.product[1].imageTitle}
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>{portfolioData.product[1].projectName}</h5>              
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                    <span className='text d-flex text-dark text-align-center justify-content-center'>{portfolioData.product[1].projectDescription}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container m-0 p-0">
                            <div className='projectWrapper container d-flex m-0 p-0'>
                                <Image 
                                    src={portfolioData.product[2].imageSrc}
                                    alt={portfolioData.product[2].imageTitle}
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>{portfolioData.product[2].projectName}</h5>              
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                    <span className='text d-flex text-dark text-align-center justify-content-center'>{portfolioData.product[2].projectDescription}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>   */}
            {/* <div
            className="tab-pane fade"
            id={`pills-${portfolioData.designGroupName}`}
            role="tabpanel"
            aria-labelledby={`pills-${portfolioData.designGroupName}-tab`}
            tabindex="0"
            >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <Image 
                                    src={portfolioData.design[0].imageSrc}
                                    alt={portfolioData.design[0].imageTitle}
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>{portfolioData.design[0].projectName}</h5>
                                    <Button type="button" className="btn">
                                            <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                </svg>
                                            </Icon>
                                        </Button>              
                                    <span className='text d-flex text-dark text-align-center justify-content-center'>{portfolioData.design[0].projectDescription}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <Image 
                                    src={portfolioData.design[1].imageSrc}
                                    alt={portfolioData.design[1].imageTitle}
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>{portfolioData.design[1].projectName}</h5>
                                    <Button type="button" className="btn">
                                            <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                    <span className='text d-flex text-dark text-align-center justify-content-center'>{portfolioData.design[1].projectDescription}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <Image 
                                    src={portfolioData.design[2].imageSrc}
                                    alt={portfolioData.design[2].imageTitle}
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>{portfolioData.design[2].projectName}</h5>
                                    <Button type="button" className="btn">
                                            <Icon className={"bi bi-zoom-in"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                        <Button type="button" className="btn">
                                            <Icon className={"bi bi-link-45deg"} height={36} width={36} fill={"#FFFFFF"}>
                                                <svg>
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                </svg>
                                            </Icon>
                                        </Button>
                                    <span className='text d-flex text-dark text-align-center justify-content-center'>{portfolioData.design[2].projectDescription}</span>              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}