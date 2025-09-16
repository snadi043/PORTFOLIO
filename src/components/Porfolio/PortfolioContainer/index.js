import React from 'react';

const PortfolioContainer = () => {
    return(
    <div className="container-fluid">
        <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                >
                APP
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                >
                PRODUCT
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                >
                DESIGN
                </button>
            </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
            >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 1</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 2</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 3</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
            >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 1</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 2</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 2</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  
            <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
            >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 1</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 2</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card container" style={{width: '18rem'}}>
                            <div className=''>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4" 
                                    alt="Avatar" 
                                    className="image" 
                                    style={{width:'100%'}}
                                />
                                <div className="middle">
                                    <h5>APP 3</h5>              
                                        <button type="button" className="btn btn-primary">Magnifier</button>
                                        <button type="button" className="btn btn-primary">Link</button>                              
                                    <p><small>Lorem ipsum, dolor sit amet consectetur</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default PortfolioContainer;