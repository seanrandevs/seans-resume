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
        </div>
    </div>
  )
}

export default Header