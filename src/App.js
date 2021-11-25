import './App.css';
// import MainContent from './components/mainContent';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

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
          <Route eact path="/skills" component={Skills} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
