import React from 'react';

function Contact() {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, "Contact Me"),
        React.createElement(
            'form',
            null,
            React.createElement(
                'div',
                null,
                React.createElement('label', null, "Name"),
                React.createElement('input', { type: 'text' })
            ),
            React.createElement(
                'div',
                null,
                React.createElement('label', null, "Email"),
                React.createElement('input', { type: 'email' })
            ),
            React.createElement(
                'div',
                null,
                React.createElement('label', null, "Message"),
                React.createElement('textarea', null)
            ),
            React.createElement('button', { type: 'submit' }, "Send")
        ),
        React.createElement('p', null, "Or reach out via social media")
    );
}

export default Contact;