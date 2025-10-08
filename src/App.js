import React from 'react';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import SkillsComponent from './components/SkillsTechnologies/SkillsComponent';
import ResumeComponent from './components/Resume/ResumeComponent';
import PortfolioComponent from './components/Porfolio/PortfolioComponent';
import ContactComponent from './components/Contact/ContactComponent';

import Offcanvas from "./Utilities/Offcanvas";
import Wrapper from './Utilities/Wrapper';
import Scroll from './Utilities/Scroll';

import './App.scss';

import { createPortal } from 'react-dom';

import { Element } from 'react-scroll';

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
      <Element name="home">
        <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
          <HomeComponent/>
        </section>
      </Element>
      <Element name="about">
        <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
          <AboutComponent/>
        </section>
      </Element>
      <Element name="skills">
        <SkillsComponent/>
      </Element>
      <Element name="resume">
        <ResumeComponent/>
      </Element>
      <Element name="portfolio">
        <PortfolioComponent/>
      </Element>
      <Element name="contact">
        <ContactComponent/>
      </Element>
    </div>
    <Scroll/>
  </Wrapper>
  );
}

export default App;
