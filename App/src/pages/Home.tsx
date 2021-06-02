import React from "react";

import { faEnvelope }      from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faGithub, 
    faLinkedin, 
    faMedium, 
    faYoutube 
} from "@fortawesome/free-brands-svg-icons";

import "../styles/pages/Home.css";

const Home = () => {

    return (
        <div
            className="site-title-container">

            <h1
                className="site-title">
                The Book of Shevon
                <span
                    id="dot"
                    style={{color:"white"}}>
                    .
                </span>
            </h1>

            <div
                className="links">
                <a
                    href="mailto:shevonmendis98@gmail.com">
                    <FontAwesomeIcon
                        icon={ faEnvelope }/>
                </a>
                <a
                    href="https://github.com/theshevon"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={ faGithub }/>
                </a>
                <a
                    href="https://www.linkedin.com/in/mendiss"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={ faLinkedin }/>
                </a>
                <a
                    href="https://medium.com/@shevon_mendis"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={ faMedium }/>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCkL1cYAWa9Wsx6xDT2H8zOg?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={ faYoutube }/>
                </a>
            </div>
        </div>
    )
}

export default Home;
