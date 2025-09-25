// import React, {useEffect, useState} from 'react';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import Skills from './components/SkillsTechnologies/Skills';
import Resume from './components/Resume';
import PortfolioComponent from './components/Porfolio/PortfolioComponent';
import ContactComponent from './components/Contact/ContactComponent';

import Offcanvas from "./Utilities/Offcanvas";
import Wrapper from './Utilities/Wrapper';

import './App.scss';

import { createPortal } from 'react-dom';

const OffcanvasPortalElement = document.getElementById('offcanvas-root');

const App = () => {
  // const [offcanvasPortalElement, setOffcanvasPortalElement] = useState(null);

  // useEffect(() => {
  //   // This runs only on the client side after the component mounts
  //   setOffcanvasPortalElement(document.getElementById('offcanvas-portal'));
  // }, []);

  return (
  <Wrapper>
  <div id="offcanvas-portal" style={{display:'none'}}>
      Learn React
  </div>
    <div className="container-fluid app-offcanvasPortal">
      {createPortal(<Offcanvas/>, OffcanvasPortalElement)}
    </div>
    <div className='container-fluid app-main'>
        <HomeComponent/>
        <AboutComponent/>
        <Skills/>
        <Resume/>
        <PortfolioComponent/>
        <ContactComponent/>
    </div>
  </Wrapper>
  );
}

export default App;
