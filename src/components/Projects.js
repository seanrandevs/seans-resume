import { Card } from 'react-bootstrap'
import { HashLink } from "react-router-hash-link";
import Irvins from '../assets/project-img/irvins.jpg'
import Wanderlust from '../assets/project-img/wanderlust.jpg'
import Weather from '../assets/project-img//weather.jpg'
import Covers from '../assets/project-img/covers.jpg'
import TaskTracker from '../assets/project-img/task.jpeg'
import Bulletin from '../assets/project-img/bulletin.jpg'
import Signup from '../assets/project-img/signup.jpeg'
import AliciaPort from '../assets/project-img/aliciaportfolio.jpg'

const Projects = () => {
  return (
    <div id="projects">
    <h1 className="project">Projects</h1>
    <div className="projects" >       
          <Card>
            <HashLink to="https://seanrandevs.github.io/wanderlustandmotherhood">
              <div className="content">
                <Card.Img variant="top" src={Wanderlust} />
                  <div className='descript'>
                    <Card.Title>Wanderlust and Motherhood</Card.Title>
                    <Card.Text>Developed a visually engaging website for Wanderlust and Motherhood, 
                      combining vibrant design with intuitive navigation to showcase travel and parenting content. 
                      The site provides a seamless user experience, reflecting the brand’s dynamic and adventurous spirit.</Card.Text>
                    <div className="skills">
                      <div>React</div>
                      <div>Scss</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
          <Card>
            <HashLink to="https://seanrandevs.github.io/irvins-clothing">
              <div className="content">
                <Card.Img variant="top" src={Irvins} />
                  <div className='descript'>
                    <Card.Title>Irvins Clothing Store</Card.Title>
                    <Card.Text>Designed and built an e-commerce website for Irvin's Clothing, 
                      featuring a modern and stylish interface that highlights the brand's unique apparel collection. 
                      The site offers a smooth shopping experience with easy navigation and a clean, responsive design.
                    </Card.Text>
                    <div className="skills">
                      <div>React</div>
                      <div>Css</div>
                      <div>Bootstrap</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
          <Card>
            <HashLink to="https://seanrandevs.github.io/react-weather-app">
              <div className="content">
                <Card.Img variant="top" src={Weather} />
                  <div className='descript'>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Text>Built a responsive weather app that fetches real-time weather data based on user-entered locations, 
                      providing accurate and location-specific forecasts through seamless API integration.</Card.Text>
                    <div className="skills">
                      <div>React</div>
                      <div>Css</div>
                      <div>Angular</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
          <Card>
            <HashLink to="https://seanrandevs.github.io/custom-covers">
              <div className="content">
                <Card.Img variant="top" src={Covers} />
                  <div className='descript'>
                    <Card.Title>Custom Covers</Card.Title>
                    <Card.Text>Developed a sleek and informative website for custom boat and gear covers, 
                      showcasing premium products with a focus on quality craftsmanship and tailored design. 
                      The site provides a seamless user experience, highlighting the expertise in creating top-notch custom solutions.</Card.Text>
                    <div className="skills">
                      <div>React</div>
                      <div>Scss</div>
                      <div>Bootstrap</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
          <Card>
            <HashLink to="https://seanrandevs.github.io/react-task-tracker">
              <div className="content">
                <Card.Img variant="top" src={TaskTracker} />
                  <div className='descript'>
                    <Card.Title>Task Tracker</Card.Title>
                    <Card.Text>Created a Task Tracker application to efficiently manage and remember tasks throughout the day, 
                      featuring intuitive design and seamless user experience.</Card.Text>
                    <div className="skills">
                      <div>React</div>
                      <div>Css</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
          <Card>
            <HashLink to="https://seanrandevs.github.io/bulletin-board-app">
              <div className="content">
                <Card.Img variant="top" src={Bulletin} />
                  <div className='descript'>
                    <Card.Title>Demo Bulletin Board</Card.Title>
                    <Card.Text>Created a functional and user-friendly bulletin board application, 
                      designed for efficient posting and management of announcements and updates. 
                      The site features a clean interface and robust functionality, making it easy to organize and share information.</Card.Text>
                    <div className="skills">
                      <div>React</div>
                      <div>Css</div>
                      <div>React Redux</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
          <Card>
            <HashLink to="https://seanrandevs.github.io/signup-form">
              <div className="content">
                <Card.Img variant="top" src={Signup} />
                  <div className='descript'>
                    <Card.Title>Sign-Up/Login Form</Card.Title>
                    <Card.Text>Developed a secure Sign-up/Login form with a SQL database, 
                      leveraging Microsoft Azure for cloud hosting and .NET/C# for backend functionality.</Card.Text>
                    <div className="skills">
                      <div>React</div>
                      <div>Scss</div>
                      <div>.NET/C#</div>
                      <div>SQL</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
          <Card>
            <HashLink to="https://seanrandevs.github.io/AliciaRansonet">
              <div className="content">
                <Card.Img variant="top" src={AliciaPort} />
                  <div className='descript'>
                    <Card.Title>Alicia Ransonet's Resume</Card.Title>
                    <Card.Text>Designed and developed a clean, elegant portfolio website for Alicia Ransonet, 
                      showcasing her work and expertise through a user-friendly interface and responsive design.</Card.Text>
                    <div className="skills">
                      <div>HTML</div>
                      <div>Css</div>
                      <div>Javascript</div>
                      <div>Angular</div>
                    </div>
                 </div>
             </div>
            </HashLink>
          </Card>
            
    </div>
    </div>
  )
}

export default Projects