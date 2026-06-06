import React, { Component } from "react";
import { Link } from "react-router-dom";
import BRcover from '../Images/BurningRushCover.png';
import Weathercover from '../Images/WeatherCover.png';

const Projects = () => {
    return (
        <div className="projects">
            <div>
                <span className="name">Projects</span>
                <p>Just a couple things I've worked on lately...</p>
            </div>
            <div className="project">
                <img className="project-cover" src={Weathercover} />
                <span className="name2">Untitled Weather App</span>
                <p>A weather app built with JavaScript, CSS animations and weatherAPI.</p>
                <span className="project-link"><Link to='https://jsl1.github.io/Assignment6/weather/'>Check it out.</Link></span>
                <span className="project-link"><Link to='https://github.com/JSL1/Assignment6'>See the Code</Link></span>
            </div>
            <div className='project'>
                <img className="project-cover" src={BRcover} />
                <span className="name2">Burning Rush</span>
                <p>A vertical shooter built with HTML and PhaserJS. An arcade classic.</p>
                <span className="project-link"><Link to='https://jstp.itch.io/burning-rush'>Check it out.</Link></span>
                <span className="project-link"><Link to='https://github.com/JSL1/Burning-Rush'>See the Code</Link></span>
            </div>
        </div>
    );
}

export default Projects;