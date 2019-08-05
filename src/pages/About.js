import React from 'react';
// import Navigationbar from '../components/Navbar/Navbar.js'


function AboutPage() {
    return (
        <div id="about" className="aboutPage">
            {/* <Navigationbar></Navigationbar> */}
            <h3 className="aboutH3">ABOUT</h3>
            <p className="aboutParagraph"> I'm Szewah. I am a graduate of Columbia University's Coding Bootcamp. 
                I'm currently looking for a starting position to build on my skills. 
                I love building programs that have the ability to create genuine connections with 
                audiences. 
                I'm a strategic thinker who has both the larger picture and the finer details of 
                execution in mind.</p>

            <i className="fas fa-code"></i>
            <p>8 months in web development</p>
            <i className="far fa-newspaper"></i>
            <p>10 years in journalism</p>
            <i className="fas fa-bullhorn"></i>
            <p>11 years in corporate communications</p>
            <i className="fas fa-language"></i>
            <p>Mandarin, Cantonese, English</p>
        </div>
    )
}

export default AboutPage;