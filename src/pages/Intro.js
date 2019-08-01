import React from 'react';
import {Container} from 'react-bootstrap';
import IntroBtn from '../components/IntroBtn/IntroBtn';


function IntroPage() {
    return (
        <div id="introPage" className='introPage'>
            <Container>
                <h3 className="introH3">SZEWAH CHIN</h3>
                <h4>Fullstack Web Developer</h4>
                <IntroBtn></IntroBtn>
            </Container>
        </div>
    )

}

export default IntroPage;