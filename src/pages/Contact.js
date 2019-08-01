import React from 'react';


function ContactPage () {
    return (
        <div id="contacts" className="contacts">
            <h3 className="contactH3">CONTACT</h3>
            <p className="contactText">How can I help you today?</p>
            <a href="https://www.linkedin.com/in/sze-wah-chin-%E7%A7%A6%E6%80%9D%E5%8D%8E-87a14a14/"  target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/szewahleong" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:szewahchin@gmail.com">
            <i className="fas fa-envelope-open-text"></i>
            </a>
        </div>
    )
}

export default ContactPage;