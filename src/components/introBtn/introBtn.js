import React from 'react';
import Button from 'react-bootstrap/Button';


const IntroBtn = props => {
    return (
        <div className="learnMoreIntoBtn">
            <p>Learn More</p>
            <Button className="introBtn" variant="outline-secondary" style={btnStyle}>
                <i className="fas fa-arrow-down"></i>
            </Button>
        </div>
    )
};



let btnStyle = {
    marginTop: 5,
    border: 0
}

export default IntroBtn

