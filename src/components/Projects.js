import { Card, Button } from 'react-bootstrap'
import Irvins from '../assets/project-img/irvins.jpg'
import Wanderlust from '../assets/project-img/wanderlust.jpg'
import Weather from '../assets/project-img//weather.jpg'
import Covers from '../assets/project-img/covers.jpg'
import TaskTracker from '../assets/project-img/task.jpeg'
import Bulletin from '../assets/project-img/bulletin.jpg'
import Signup from '../assets/project-img/signup.jpeg'
import FAQ from '../assets/project-img/faq.jpg'
import AliciaPort from '../assets/project-img/aliciaportfolio.jpg'

const Projects = () => {
  return (
    <div id="projects">
    <h1 className="project">Projects</h1>
    <div className="projects" >
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Irvins} />
                  <Card.Title>Irvins Clothing Store</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Demo Clothing store </Card.Text>
                  <a href='https://seanrandevs.github.io/irvins-clothing'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Wanderlust} />
                  <Card.Title>Wanderlust and Motherhood</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>A wonderful blog about everyday life and travel</Card.Text>
                  <a href='https://seanrandevs.github.io/wanderlustandmotherhood'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Weather} />
                  <Card.Title>Weather App</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Simple weather app </Card.Text>
                  <a href='https://seanrandevs.github.io/react-weather-app'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Covers} />
                  <Card.Title>Custom Covers</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Top notch custom covers for your boats and gear</Card.Text>
                  <a href='https://seanrandevs.github.io/custom-covers'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={TaskTracker} />
                  <Card.Title>Task Tracker</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Task Tracker to help remember task throughout the day</Card.Text>
                  <a href='https://seanrandevs.github.io/react-task-tracker'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Bulletin} />
                  <Card.Title>Bulletin Board</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Demo Bulletin Board</Card.Text>
                  <a href='https://seanrandevs.github.io/bulletin-board-app'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Signup} />
                  <Card.Title>Sign-Up Form</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Demo Sign-up form </Card.Text>
                  <a href='https://seanrandevs.github.io/signup-form'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={FAQ} />
                  <Card.Title>FAQ page</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Demo FAQ page</Card.Text>
                  <a href='https://seanrandevs.github.io/react-faq'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={AliciaPort} />
                  <Card.Title>Alicia Ransonet's Portfolio Website</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>A simple and great portfolio website for Alicia Ransonet</Card.Text>
                  <a href='https://seanrandevs.github.io/AliciaRansonet'><Button>View Project</Button></a>
                </div>
              </div>
            </Card>
    </div>
    </div>
  )
}

export default Projects