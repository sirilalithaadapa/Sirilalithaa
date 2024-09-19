import React from 'react';
import './Skills.css'; // Link to the CSS file for styles

function Skills() {
    const skills = ['UI/UX Design', 'React.js', 'JavaScript', 'HTML/CSS', 'Adobe XD', 'Figma'];
    return ( <
        div className = "skills-container" >
        <
        h1 > Skills < /h1> <
        ul > {
            skills.map(skill => ( <
                li key = { skill } >
                <
                span className = "skill-name" > { skill } < /span> <
                div className = "skill-bar" > < div className = "skill-level"
                style = {
                    { width: `${Math.random()*100}%` } } > < /div></div >
                <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default Skills;