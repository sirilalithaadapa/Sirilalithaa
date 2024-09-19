import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons
import 'animate.css'; // Add animate.css for predefined animations
import './Home.css'; // Import your custom CSS file

function Home() {
    return ( <
        div className = "home-container" >
        <
        h1 className = "home-title animate__animated animate__fadeInDown" > I 'M</h1> <
        h2 className = "home-name animate__animated animate__fadeInUp" > Siri Lalitha Adapa < /h2> <
        p className = "home-subtitle animate__animated animate__fadeInUp" > Developer | Writer < /p> <
        div className = "home-socials" >
        <
        a href = "https://github.com/sirilalithaadapa"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaGithub size = { 40 }
        color = "white" / > { /* Use the Github icon */ } <
        /a> <
        a href = "https://www.linkedin.com/in/sirilalithaadapa/"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaLinkedin size = { 40 }
        color = "white" / > { /* Use the LinkedIn icon */ } <
        /a> < /
        div > <
        div className = "scroll-down" >
        <
        i className = "fas fa-chevron-down" > < /i> < /
        div > <
        /div>
    );
}

export default Home;