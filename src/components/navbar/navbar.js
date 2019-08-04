import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, animateScroll as scroll} from 'react-scroll';
import './style.css';

class NavBar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    }


    render(){
        // if else statements here to close and open menu
        return (
            <Navbar sticky="top" collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link>
                        <Link
                            id="homeNavLink"
                            to="introPage"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link
                            id="aboutNavLink"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >About
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link
                            id="portfolioLink"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >Portfolio
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link
                            id="contactsLink"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >Contact
                        </Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar