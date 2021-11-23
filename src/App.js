import './App.css';
// import MainContent from './components/mainContent';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';

const App = () => {
  return (
    // <div className="App">
    //   <MainContent />
    // </div>
    <Router>
      <Navbar />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
