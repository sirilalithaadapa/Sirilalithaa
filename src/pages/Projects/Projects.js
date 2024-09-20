import React from 'react';
import './Projects.css';
import project1IMG from './project1.png';
import project2IMG from './Project2.jpg';
import project3IMG from './project3.jpg';
import project4IMG from './project4.png';

function Projects() {
    const projects = [{
            title: 'WECare',
            description: 'Responsive web app built with React.js',
            link: 'https://github.com/sirilalithaadapa/WE-Care',
            image: project1IMG
        },
        {
            title: 'Kavi Sarees Store',
            description: 'UI/UX design for an e-commerce app',
            link: 'https://github.com/sirilalithaadapa/e-commerce',
            image: project2IMG
        },
        {
            title: 'RICE LEAF DISEASE RECOGNITION with CNN',
            description: 'This project illustrates the importance of model complexity and regularization techniques in CNNs for image classification tasks.',
            link: 'https://github.com/sirilalithaadapa/RICELEAFDISEASERECOGNITION',
            image: project3IMG
        },
        {
            title: 'COVID19 Prediction',
            description: 'This project aims to predict COVID-19 diagnoses based on symptoms and demographic data, utilizing data analysis and machine learning techniques.',
            link: 'https://github.com/sirilalithaadapa/COVID19-prediction',
            image: project4IMG
        }
    ];

    return React.createElement(
        'div', { className: 'projects-section' },
        React.createElement(
            'h1', { className: 'section-title' },
            'Projects'
        ),
        React.createElement(
            'div', { className: 'projects-grid' },
            projects.map(function(project, index) {
                return React.createElement(
                    'div', { key: index, className: 'project-card' },
                    React.createElement('img', { src: project.image, alt: project.title, className: 'project-thumbnail' }),
                    React.createElement('h3', { className: 'project-title' }, project.title),
                    React.createElement('p', { className: 'project-description' }, project.description),
                    React.createElement(
                        'a', { href: project.link, target: '_blank', rel: 'noopener noreferrer', className: 'project-link' },
                        'View Project'
                    )
                );
            })
        )
    );
}

export default Projects;