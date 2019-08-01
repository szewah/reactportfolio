import React from 'react';
import Navigationbar from '../components/Navbar/Navbar.js'


function AboutPage() {
    return (
        <div className="aboutPage">
            <Navigationbar></Navigationbar>
            <h3 className="aboutH3">ABOUT</h3>
            <p className="aboutParagraph"> I'm Szewah. I am a graduate of Columbia University's Coding Bootcamp. 
                I'm currently looking for a starting position to build on my skills. 
                I love building programs that have the ability to create genuine connections with 
                audiences. 
                I'm a strategic thinker who has both the larger picture and the finer details of 
                execution in mind.</p>
        </div>
    )
}

export default AboutPage;