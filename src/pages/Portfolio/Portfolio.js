import React from 'react';

function Portfolio() {
    const projects = [
        { title: 'Project 1', description: 'UI/UX design for an e-commerce app', link: '#' },
        { title: 'Project 2', description: 'Responsive web app built with React.js', link: '#' },
    ];

    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, "Portfolio"),
        React.createElement(
            'div',
            null,
            projects.map((project, index) =>
                React.createElement(
                    'div', { key: index },
                    React.createElement('h3', null, project.title),
                    React.createElement('p', null, project.description),
                    React.createElement('a', { href: project.link, target: '_blank', rel: 'noopener noreferrer' }, "View Project")
                )
            )
        )
    );
}

export default Portfolio;