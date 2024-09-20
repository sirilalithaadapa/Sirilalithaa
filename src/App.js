import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Header from './pages/Header/Header';

function App() {
    return React.createElement(
        Router,
        null,
        React.createElement(
            'div',
            null,
            React.createElement(Header, null),
            React.createElement(
                Routes,
                null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "/skills", element: React.createElement(Skills, null) }),
                React.createElement(Route, { path: "/projects", element: React.createElement(Projects, null) }),
                React.createElement(Route, { path: "/contact", element: React.createElement(Contact, null) })
            ),
        )
    );
}

export default App;