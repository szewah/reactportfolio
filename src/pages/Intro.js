import React from 'react';
import IntroBtn from '../components/IntroBtn/IntroBtn';

function IntroPage() {
    return (
        <div className='introPage'>
            <h3 style={h3style}>SZEWAH CHIN</h3>
            <h4>Fullstack Web Developer</h4>
            <IntroBtn></IntroBtn>
        </div>
    )

}


let h3style = {
    marginTop: 50
}

export default IntroPage;