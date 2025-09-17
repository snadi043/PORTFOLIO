// import { Routes, Route} from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import About from './components/About';
import Skills from './components/SkillsTechnologies/Skills';
import Resume from './components/Resume';
import PortfolioComponent from './components/Porfolio/PortfolioComponent';

// import Contact from './component/Contact';
import { Fragment } from "react";
import Offcanvas from "./Utilities/Offcanvas";
import './App.scss';
import { createPortal } from 'react-dom';

const OffcanvasPortalElement = document.getElementById('offcanvas-root');

const App = () => {
  return (
  <Fragment>
    <div className="container-fluid app-offcanvasPortal">
      {createPortal(<Offcanvas/>, OffcanvasPortalElement)}
    </div>
    <div className='container-fluid app-main'>
        <HomeComponent/>
        <About/>
        <Skills/>
        <Resume/>
        <PortfolioComponent/>
    </div>
  </Fragment>
  );
}

export default App;
