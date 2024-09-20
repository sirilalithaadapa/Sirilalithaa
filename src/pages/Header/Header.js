import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return React.createElement(
        'header', { className: 'main-header' },
        React.createElement(
            'nav', { className: 'navbar' },
            React.createElement(
                'ul', { className: 'nav-links' },
                React.createElement(
                    'li', { className: 'nav-item' },
                    React.createElement(Link, { to: '/', className: 'nav-link' }, 'Home')
                ),
                React.createElement(
                    'li', { className: 'nav-item' },
                    React.createElement(Link, { to: '/about', className: 'nav-link' }, 'About')
                ),
                React.createElement(
                    'li', { className: 'nav-item' },
                    React.createElement(Link, { to: '/skills', className: 'nav-link' }, 'Skills')
                ),
                React.createElement(
                    'li', { className: 'nav-item' },
                    React.createElement(Link, { to: '/projects', className: 'nav-link' }, 'Projects')
                ),
                React.createElement(
                    'li', { className: 'nav-item' },
                    React.createElement(Link, { to: '/contact', className: 'nav-link' }, 'Contact')
                )
            )
        )
    );
}

export default Header;