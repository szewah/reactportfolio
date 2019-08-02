import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


 class IntroBtn extends Component {

    handleOnClick = event => {
        event.preventDefault();
        alert('I was clicked');
    }

    render() {
        return (
            <div className="learnMoreIntoBtn">
                <p>Learn More</p>
                <Button onClick={this.handleOnClick} className="introBtnArrow" variant="outline-secondary">
                    <i className="fas fa-arrow-down"></i>
                </Button>
            </div>
        )
    }

};


export default IntroBtn

