import { BsGithub, BsLinkedin, BsChevronUp } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

const Contact = () => {
  return (
    <div className="contact">
      <div className="footer" id="contact">
        <div className="email">
          <h1>Email:</h1>
          <h2>Seanrandevs@gmail.com</h2>
        </div>
        <div className="icons">
          <HashLink to='https://github.com/seanrandevs'><BsGithub className="icon"/></HashLink>
          <HashLink to='https://www.linkedin.com/in/sean-ransonet-a623b222a/'><BsLinkedin className="icon"/></HashLink>
        </div>
      </div>
      <div className="arrow-up">
       <p>top</p>
      <BsChevronUp className="arrow"/>
    </div>
  </div>
  )
}

export default Contact