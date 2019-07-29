import React from 'react';
import Button from 'react-bootstrap/Button';


const IntroBtn = props => {
    return (
        <div>
            <p>Learn More</p>
            <Button className="introBtn" variant="outline-secondary">
                <i className="fas fa-arrow-down"></i>
            </Button>
        </div>
    )
};

export default IntroBtn

