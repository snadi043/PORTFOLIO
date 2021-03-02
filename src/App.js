import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Nav from './component/Nav';
import Skills from './component/Skills';
import Work from './component/Work';
import Contact from './component/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      
    </div>
    </Router>
    
  );
}

export default App;
