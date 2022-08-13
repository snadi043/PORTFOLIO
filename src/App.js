import { Routes, Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Work from './component/Work';
import Contact from './component/Contact';
import SideBar from "./component/Sidebar";
import Degree from "./component/Degree";
import './App.scss';


const App = () => {
  return (
  <div className="App">
    <div>
      <SideBar/>
      <div className="page">
      </div>
      <Routes>
          <Route index path="/" element={<Home /> } />
          <Route index path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/degree" element={<Degree />}  />
          <Route path="/work"  element={<Work />} />
          <Route path="/contact" element={<Contact />}  />
      </Routes>
    </div>
    </div>
  );
}

export default App;
