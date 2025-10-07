import React from 'react';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import SkillsComponent from './components/SkillsTechnologies/SkillsComponent';
import ResumeComponent from './components/Resume/ResumeComponent';
import PortfolioComponent from './components/Porfolio/PortfolioComponent';
import ContactComponent from './components/Contact/ContactComponent';

import Offcanvas from "./Utilities/Offcanvas";
import Wrapper from './Utilities/Wrapper';

import './App.scss';

import { createPortal } from 'react-dom';


const App = () => {

  const OffcanvasPortalElement = document.getElementById('offcanvas-root');
  return (
  <Wrapper>
  <div id="offcanvas-portal" style={{display:'none'}}>
      Learn React
  </div>
    <div className="container-fluid app-offcanvasPortal">
      {OffcanvasPortalElement && createPortal(<Offcanvas/>, OffcanvasPortalElement)}
    </div>
    <div className='container-fluid app-main'>
        <HomeComponent/>
        <AboutComponent/>
        <SkillsComponent/>
        <ResumeComponent/>
        <PortfolioComponent/>
        <ContactComponent/>
    </div>
  </Wrapper>
  );
}

export default App;
