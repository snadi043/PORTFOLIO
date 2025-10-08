import React from 'react';
import { createPortal } from 'react-dom';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import SkillsComponent from './components/SkillsTechnologies/SkillsComponent';
import ResumeComponent from './components/Resume/ResumeComponent';
import PortfolioComponent from './components/Porfolio/PortfolioComponent';
import ContactComponent from './components/Contact/ContactComponent';

import Offcanvas from "./Utilities/Offcanvas";
import Wrapper from './Utilities/Wrapper';
import ScrollToTop from './Utilities/ScrollToTop';

import './App.scss';



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
        <div id="home">
          <HomeComponent/>
          </div>
        <div id="about">
          <AboutComponent/>
        </div>
        <div id="skills">
          <SkillsComponent/>
        </div>
        <div id="resume">
          <ResumeComponent/>
        </div>
        <div id="portfolio">
          <PortfolioComponent/>
        </div>
        <div id="contact">
          <ContactComponent/>
        </div>
      </div>
        <ScrollToTop/>
    </Wrapper>
  );
}

export default App;
