import './App.css';
import Hline from './Hline'
import About from './About'
import Education from './Education'
import Carreer from './Carreer'
import Skills from './Skills'
import Footer from './Footer'
// import './Navbar/NavbarElements';
// import './Navbar/'

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <h1>Pepulani Ngwira</h1>
          <Hline color="white" width="60%"/>
          <h2 className="sub-header">Interactive resume</h2>
      </header>
      <div className="prof">
        <h1 className="profile-header">Profile</h1>
        <p className="prof">
          I am a systems developer. I design web applications and systems
          that allow organizations to make informed and professional business 
          decisions.
        </p>
        <Hline color="grey" width="60%" />
        <About /> 
      </div>
      <div className="Education">
        <h1 className="Edu">Education</h1>
        <Hline color="grey" width="60%" />
        <Education />
      </div>
      <div className="carreer">
        <h1 className="Car">Carreer</h1>
        <Hline color="grey" width="60%" />
        <Carreer />
      </div>
      <div className="Skills">
        <h1 className="Ski">Skills</h1>
        <Hline color="grey" width="60%" />
        <Skills />
      </div>

      <footer className="footer">
        <h1>Contact info</h1>
        <Hline color="grey" width="60%" />
        <Footer />
      </footer>

    </div>
  );
}

export default App;
