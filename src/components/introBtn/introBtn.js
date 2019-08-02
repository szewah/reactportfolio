import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


 class IntroBtn extends Component {

    state = {
        clicked: false,
    }

    handleOnClick = event => {
        event.preventDefault();
        this.setState({clicked: true});
    }

    render() {
        if (this.state.clicked) {
            document.getElementById("about").scrollIntoView({ 
                behavior: 'smooth' 
              });
        }
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

