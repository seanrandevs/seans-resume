import React from 'react'
import myVideo from '../assets/IMG_0300.MOV';
import { Link } from 'react-router-dom';

const Video = () => {
  return (
        <div className="container">
        <div className="h1-container">
            <div class="arrow-left">
                <span></span>
                <span></span>
                <span></span>
            </div>
        <Link to="/homepage"><h1>Portfolio Website</h1></Link>
            <div class="arrow-right">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
            <video controls>
                <source src={myVideo} type="video/mp4" />
            </video>
        </div>

  );
};

export default Video