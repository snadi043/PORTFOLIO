// import { Link, NavLink } from 'react-router-dom';
// import './style.scss';
// import LOGO from  '../../assets/images/LOGO.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {   faHome,  faUser, faCog, faBank, faLaptopCode, faEnvelope} from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Fragment } from 'react';
// import Button from '../../Utilities/Button';
import NavCanvasControl from '../NavCanvasControl';
import NavButton from '../NavButton';
// import Button from '../../Utilities/Button';


const Offcanvas = () => {
    return(
        <Fragment>
            <NavCanvasControl
                height={25}
                width={25}
                style={{backgroundColor:"#272829"}}
                className="bi bi-list">
                    <NavButton
                        href="https://stackblitz.com/edit/qm2pw7xp?file=index.html"
                        path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                        className="bi bi-home">
                        Home
                     </NavButton>
                     <NavButton
                        href="https://stackblitz.com/edit/qm2pw7xp?file=index.html"
                        path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                        className="bi bi-home">
                        About
                     </NavButton>
                     <NavButton 
                        path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                        className="bi bi-home">
                        Resume
                     </NavButton>
                     <NavButton
                        path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                        className="bi bi-home">
                        Portfolio
                     </NavButton>
                     <NavButton
                        path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                        className="bi bi-home">
                        Contact
                     </NavButton>
            </NavCanvasControl>
        </Fragment>
        
    );
}
export default Offcanvas;


            // <div 
            //     className="offcanvas offcanvas-start" 
            //     data-bs-scroll="true" 
            //     tabindex="-1"
            //     id="offcanvasWithBothOptions" 
            //     aria-labelledby="offcanvasWithBothOptionsLabel">
            //         <div className="offcanvas-header">
            //             <h5 
            //                 className="offcanvas-title" 
            //                 id="offcanvasWithBothOptionsLabel">Backdrop with scrolling
            //             </h5>
            //             <Button 
            //                 className="btn-close" 
            //                 type="button" 
            //                 data-bs-dismiss="offcanvas" 
            //                 aria-label="Close">
            //             </Button>
            //             {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
            //         </div>
            //         <div className="offcanvas-body">
            //         <NavButton>
            //             <Icon 
            //                 height={25}
            //                 width={25}
            //                 fillColor="#adb5bd"
            //                 className="bi bi-home"
            //                 path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z">
            //             </Icon>
            //                 About Me
            //         </NavButton>

            //             <Icon 
            //                 height={25}
            //                 width={25}
            //                 fillColor="##a8a9b4"
            //                 className="bi bi-person-gear"
            //                 path="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0">Skills
            //             </Icon>
            //             <Icon 
            //                 height={25}
            //                 width={25}
            //                 fillColor="##a8a9b4"
            //                 className="bi bi-laptop"
            //                 path="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5">Projects
            //             </Icon>
            //             <Icon 
            //                 height={25}
            //                 width={25}
            //                 fillColor="#8fa27c"
            //                 className="bi bi-file-earmark-text"
            //                 path={
            //                     "M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5 M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
            //                     }>Resume
            //             </Icon>
            //             <Icon 
            //                 height={25}
            //                 width={25}
            //                 fillColor="#8fa27c"
            //                 className="bi bi-envelope"
            //                 path="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z">Contact
            //             </Icon>
            //         </div>
            // </div>