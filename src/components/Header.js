import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="image" id="about">
        <Navbar>
            <HashLink className="link" smooth to="#projects">PROJECTS</HashLink>
            <HashLink className="link" smooth to="#skills">SKILLS</HashLink>
            <HashLink className="link" smooth to="#contact">CONTACT</HashLink>
        </Navbar>
        <div className="main-display">
            <div className="name">Hi, I'm Sean Ransonet</div>
            <div className="job">Front-end Web Developer</div>
        </div>
    </div>
  )
}

export default Header