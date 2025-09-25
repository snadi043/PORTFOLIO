
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
