import React, { useState } from 'react';

import Image from '../../../Utilities/Image';
import Button from '../../../Utilities/Button';
import Icon from '../../../Utilities/Icon';
import Wrapper from '../../../Utilities/Wrapper';

import './style.scss';
    
const PortfolioProjectExtensions = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalOpenHandler = () => {
        const modalElement = document.getElementById('myModal');
        if(modalElement){
            modalElement.style.display = 'block';
        }
        else{
            console.log('Modal element not found');
        }
        setModalOpen(!modalOpen);
        console.log('modalOpen');
    }

    return (
        <Wrapper className="card portfolioProjectExtensionsWrapper">
            <Wrapper id="myModal" className="modal modalWrapper" onClick={modalOpenHandler} style={{ display: modalOpen ? 'block' : 'none' }}>
                <button type="button" className="btn-close modalButtonClose" data-bs-dismiss="modal" aria-label="Close" onClick={modalOpenHandler}></button>
                <Wrapper className="modal-dialog modalDialog">
                    <Wrapper className="modal-content modalContent">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <Wrapper className="carousel-inner">
                                <Wrapper className="carousel-item active">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" alt="image1"/>
                                </Wrapper>
                                <Wrapper className="carousel-item">
                                    <img src="https://media.licdn.com/dms/image/v2/D4E0BAQExhZUq9XVYwA/company-logo_200_200/company-logo_200_200/0/1695239223935/uottawa_logo?e=1760572800&v=beta&t=CXNIto-xQYZ0zl_PlbGQc6R2U1XdUemQa_q1qH_4PC4" alt="image2"/>
                                </Wrapper>
                                <Wrapper className="carousel-item">
                                    <img src="https://media.licdn.com/dms/image/v2/C4D0BAQG8QFedRVKWBg/company-logo_200_200/company-logo_200_200/0/1631367621433/prepr_foundation_logo?e=1760572800&v=beta&t=-kcegTfN-dJSt18ySofTINnUe1w44FnnDRNBI3k7soI" alt="image3"/>
                                </Wrapper>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </Wrapper>
                        </div>
                    </Wrapper>
                </Wrapper>
            </Wrapper>

            <Wrapper className='projectWrapper container'>
                <Image 
                    src={props.src}
                    alt={props.alt}
                    className="image"/>
                <Wrapper className="projectDetails container d-flex">
                    <Wrapper className="projectHeading d-flex">
                        <span>{props.projectName}</span>
                    </Wrapper>
                    <Wrapper className="projectExtensions container d-flex">          
                        <Button type="button" className="btn" onClick={modalOpenHandler}>
                            <Icon iconclassName={"bi bi-zoom-in"} iconHeight={36} iconWidth={36} iconFill={"#FFFFFF"}>
                                <svg>
                                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                    <path fillRule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </Icon>
                        </Button>
                        <Button type="button" className="btn">
                            <Icon iconclassName={"bi bi-link-45deg"} iconHeight={36} iconWidth={36} iconFill={"#FFFFFF"}>
                                <svg>
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                </svg>
                            </Icon>
                        </Button>
                    </Wrapper>
                    <Wrapper className="projectDescription container d-flex">
                        <span>{props.projectDescription}</span>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
}

export default PortfolioProjectExtensions;
