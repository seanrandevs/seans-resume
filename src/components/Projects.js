import { Card, Button } from 'react-bootstrap'
import Irvins from '../assets/project-img/irvins.jpg'
import Wanderlust from '../assets/project-img/wanderlust.jpeg'
import Weather from '../assets/project-img/weather.jpeg'
import Covers from '../assets/project-img/covers.jpeg'
import TaskTracker from '../assets/project-img/task.jpeg'
import Bulletin from '../assets/project-img/bulletin.jpeg'
import Signup from '../assets/project-img/signup.jpeg'
import { HashLink } from "react-router-hash-link";

const Projects = () => {
  return (
    <div className="projects" id="projects">
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Irvins} />
                  <Card.Title>Irvins Clothing Store</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Demo Clothing store </Card.Text>
                  <HashLink to='https://seanrandevs.github.io/irvins-clothing'><Button>Website</Button></HashLink>
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
                  <HashLink to='https://seanrandevs.github.io/wanderlustandmotherhood'><Button>Website</Button></HashLink>
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
                  <HashLink to='https://seanrandevs.github.io/react-weather-app'><Button>Website</Button></HashLink>
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
                  <HashLink to='https://seanrandevs.github.io/custom-covers'><Button>Website</Button></HashLink>
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
                  <HashLink to='https://seanrandevs.github.io/react-task-tracker'><Button>Website</Button></HashLink>
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
                  <HashLink to='https://seanrandevs.github.io/bulletin-board-app'><Button>Website</Button></HashLink>
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
                  <HashLink to='https://seanrandevs.github.io/signup-form'><Button>Website</Button></HashLink>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Irvins} />
                  <Card.Title>FAQ page</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>Demo FAQ page</Card.Text>
                  <HashLink to='https://seanrandevs.github.io/react-faq'><Button>Website</Button></HashLink>
                </div>
              </div>
            </Card>
            <Card>
              <div className="content">
                <div className="front">
                  <Card.Img variant="top" src={Irvins} />
                  <Card.Title>Alicia Ransonet's Portfolio Website</Card.Title>
               </div>
                <div className="back">
                  <Card.Text>A simple and great portfolio website for Alicia Ransonet</Card.Text>
                  <HashLink to=''><Button>Website</Button></HashLink>
                </div>
              </div>
            </Card>
    </div>
  )
}

export default Projects