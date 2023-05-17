import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="image" id="about">
        <Navbar>
            <HashLink className="link" smooth to="#projects">PROJECTS</HashLink>
            <HashLink className="link" smooth to="#contact">CONTACT</HashLink>
        </Navbar>
        <div className="main-display">
            <div className="name">Sean Ransonet</div>
            <h2>I'm A Front-end Web Developer</h2>
          <div className="about">
            <div className="about-me">
            <h2>Get To Know Me</h2>
            <div>
              hytrehtrhrhrthtrhrhejytrujhrthjyejeyt
            </div>
            </div>
            <div className="my-skills">
              <h2>My Skills</h2>
              <div className="skills">
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>Javascript</h4>
              <h4>React</h4>
              <h4>React Redux</h4>
              <h4>SASS</h4>
              <h4>Github</h4>
              <h4>Git</h4>
              <h4>Responsive design</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header