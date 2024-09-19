import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import penguinImage from './image.png'; // Penguin image

function About() {
    const headingRef = useRef(null);
    const paragraph1Ref = useRef(null);
    const animatedPenguinRef = useRef(null); // Reference for the animated penguin

    useEffect(() => {
        // Animations for heading and paragraphs
        anime({
            targets: headingRef.current,
            translateX: [-300, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 500,
        });

        anime({
            targets: paragraph1Ref.current,
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 1000,
            delay: 100, // Delay the paragraph animation
        });

        // Penguin walking animation
        anime({
            targets: animatedPenguinRef.current,
            translateX: [-200, '100vw'], // Penguin walks across the screen
            easing: 'easeInOutQuad',
            duration: 10000, // Duration of walk animation
            loop: true, // Loop the walk animation
        });
    }, []);

    return React.createElement(
        'div', { style: { padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', height: '100vh' } },
        React.createElement('h1', { ref: headingRef }, 'Welcome to My Profile'),
        React.createElement('p', { ref: paragraph1Ref }, 'This is the home page of my personal portfolio website.'),
        React.createElement('img', {
            src: penguinImage,
            alt: 'Walking Penguin',
            style: { width: '100px', height: 'auto', position: 'absolute', bottom: '20px', left: '-200px' },
            ref: animatedPenguinRef
        })
    );
}

export default About;