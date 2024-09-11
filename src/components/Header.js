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
          <div>
            <div className="name">Sean Ransonet</div>
            <div className="job">Front-end Web Developer</div>
          </div>
            <div className="about-descrip">
            As a dedicated Frontend Web Developer with 2 years of experience, 
            I specialize in crafting visually compelling and user-centric websites. 
            My enthusiasm for building and designing dynamic digital experiences drives my work, 
            and I excel in problem-solving and innovative solutions. With a solid foundation in React.js, 
            Angular, Responsive Design, .NET/C#, and SQL, I am passionate about leveraging these technologies to create impactful web applications. 
            Explore my project section to see how I transform ideas into engaging and effective web solutions.
            <div className="skills">
                <h4>CSS</h4>
                <h4>Javascript</h4>
                <h4>React</h4>
                <h4>React Redux</h4>
                <h4>SASS</h4>
                <h4>Git</h4>
                <h4>Responsive design</h4>
                <h4>C#</h4>
                <h4>SQL</h4>
              </div>
            </div>
            
        </div>
          </div>
  )
}

export default Header