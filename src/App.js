import React, { useState } from 'react';
import Logo from "./images/logo.png";
import Info from "./images/linkedin.png";
import Info0 from "./images/gmail.png";
import MyAvatar from "./images/myAvatar.jpg";
import Proj1 from "./images/proj1.svg";
import Proj2 from "./images/proj2.svg";
import Proj3 from "./images/proj3.svg";
import Brand from "./images/html.png";
import Brand0 from "./images/css.png";
import Brand1 from "./images/js.png";
import Brand2 from "./images/php.png";
import Brand3 from "./images/my.png";
import Brand4 from "./images/git.png";
import Brand5 from "./images/github.png";
import Brand6 from "./images/wp.png";
import Brand7 from "./images/flat.png";
import Brand8 from "./images/E.png";
import Brand9 from "./images/jq.png";
import Brand10 from "./images/fig.png";
import Brand11 from "./images/react.png";
import Brand12 from "./images/slider.png";
import './App.css';

function App() {
  // States to manage visibility of each project's details
  const [detailsVisible, setDetailsVisible] = useState([false, false, false]);

  const toggleDetails = (index) => {
    setDetailsVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle visibility for the clicked project
      return newState;
    });
  };

  return (
    <div className="container">
      <header>
        <nav>
          <div className="navbar">
            <img src={Logo} alt="logo" className="logo" />
            <ul className="nav-menu">
              <li>
                <a href="#about" className="nam">About Me</a>
              </li>
              <li>
                <a href="#projects" className="nam">Projects</a>
              </li>
              <li>
                <a href="#skills" className="nam">Skills</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="about">
        <div className="titlea">
          <div className="text-column">
            <h1>Hi! Roxanne here,</h1>
            <p>
              I am a dedicated web developer who is passionate about designing websites that are efficient, responsive, and user-friendly. I am now concentrating on improving my JavaScript and ReactJS skills. This portfolio highlights some of the projects I've worked on, as well as the technologies I've mastered for developing modern online apps.<br /><br />
              I am always eager to learn and expand my knowledge in web development and I look forward to collaborating on new and exciting projects!
            </p>
            <a href="https://www.linkedin.com/in/roxanne-jimenez-461857194/" target="_blank">
              <img src={Info} alt="LinkedIn" className="info" />
            </a>
            <a href="https://github.com/lhaine29" target="_blank">
              <img src={Brand5} alt="Github" className="info" />
            </a>
            <a href="mailto:roxlhaine29@gmail.com" target="_blank">
              <img src={Info0} alt="Gmail" className="info" />
            </a>
          </div>
          <img src={MyAvatar} alt="Avatar" className="avatar" />
        </div>
      </section>

      <section id="projects">
        <div className="title">
          <h1>Projects</h1>
          <p>Here are a few projects that I have built</p>
        </div>

        <div className="project-container">
          <div className="project">
            <img src={Proj1} alt="Proj1" className="proj proj1" onClick={() => toggleDetails(0)} // Toggle visibility on image click
            />
            {detailsVisible[0] && (
              <div className="project-details">
                <p>
                  This project represents my thesis. I was responsible for creating the sidebar structure, managing patient records, and handling payment records. It is a web-based management system built with PHP, allowing users to perform CRUD operations for adding and updating information.<br />
                  The tools I used are:
                </p>
                <div className="bcontainer">
                  <img src={Brand} alt="html" className="brandp"/>
                  <img src={Brand0} alt="css" className="brandp"/>
                  <img src={Brand1} alt="js" className="brandp"/>
                  <img src={Brand2} alt="php" className="brandp"/>
                  <img src={Brand3} alt="mySQL" className="brandp"/>
                  <img src={Brand9} alt="jQuery" className="brandp"/>
                </div>
              </div>
            )}
          </div>

          <div className="project">
            <img src={Proj2} alt="Proj2" className="proj proj2" onClick={() => toggleDetails(1)} // Toggle visibility on image click
/>
            {detailsVisible[1] && (
              <div className="project-details">
                <p>
                  This project was part of my internship. I utilized Figma to design the layout and background, and during the development phase, I implemented WordPress along with the Elementor plugin to enhance its functionality.
                  <br />
                  The tools I used are:
                </p>
                <div className="bcontainer">
                  <img src={Brand10} alt="Figma" className="brandp" />
                  <img src={Brand6} alt="WordPress" className="brandp" />
                  <img src={Brand8} alt="Elementor" className="brandp" />
                </div>
              </div>
            )}
          </div>

          <div className="project">
            <img src={Proj3} alt="Proj3" className="proj proj3" onClick={() => toggleDetails(2)} // Toggle visibility on image click
            />
            {detailsVisible[2] && (
              <div className="project-details">
                <p>
                  This project was part of my internship. Our team produced this layout by combining our ideas; we used Figma to design the layout and backdrop, and during the development process, we used WordPress, Slide Revolution 6, and the Flatsome plugin to improve its functionality.<br />
                  The tools used were:
                </p>
                <div className="bcontainer">
                  <img src={Brand10} alt="Figma" className="brandp" title="Figma" />
                  <img src={Brand6} alt="WordPress" className="brandp" title="WordPress" />
                  <img src={Brand12} alt="Slider" className="brandp" title="Slider Revolution 6" />
                  <img src={Brand7} alt="Flatsome" className="brandp" title="Flatsome" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="title">
          <h1>Skills</h1>
          <p>Here are the things I can use</p>
        </div>
        <div className="skill">
          <ul>
            <li><img src={Brand} alt="html" className="brand" title="HTML" /></li>
            <li><img src={Brand0} alt="css" className="brand" title="CSS" /></li>
            <li><img src={Brand1} alt="js" className="brand" title="JavaScript" /></li>
            <li><img src={Brand2} alt="php" className="brand" title="PHP" /></li>
            <li><img src={Brand3} alt="mySQL" className="brand" title="MySQL" /></li>
            <li><img src={Brand4} alt="git" className="brand" title="Git/GitHub" /></li>
            <li><img src={Brand6} alt="WordPress" className="brand" title="WordPress" /></li>
            <li><img src={Brand7} alt="Flatsome" className="brand" title="Flatsome" /></li>
            <li><img src={Brand8} alt="Elementor" className="brand" title="Elementor" /></li>
            <li><img src={Brand12} alt="Slider" className="brand" title="Slider Revolution 6" /></li>
            <li><img src={Brand10} alt="Figma" className="brand" title="Figma" /></li>
            <li><img src={Brand11} alt="React Js" className="brand" title="ReactJs" /></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;