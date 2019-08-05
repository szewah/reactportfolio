import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, animateScroll as scroll} from 'react-scroll';
import './style.css';


class NavBar extends Component {

    state = {
        navExpanded: false
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    setNavExpanded = (expanded) => {
        this.setState({navExpanded: expanded})
    }

    closeNav = () => {
        this.setState({navExpanded: false})
    }

    render(){
        //solution to closing navbar on link click https://github.com/fisshy/react-scroll/issues/221
        return (
            <Navbar sticky="top" expand='lg' bg='dark' variant='dark' onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link>
                        <Link
                            onClick={this.closeNav}
                            id="homeNavLink"
                            to="introPage"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Home
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link
                            onClick={this.closeNav}
                            id="aboutNavLink"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                        >About
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link
                            onClick={this.closeNav}
                            id="portfolioLink"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                        >Portfolio
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link
                            onClick={this.closeNav}
                            id="contactsLink"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-150}
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