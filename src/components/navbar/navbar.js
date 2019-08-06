import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, animateScroll as scroll} from 'react-scroll';
import './style.css';


class NavBar extends Component {
    //we set the state of the expanded navbar to false i.e. closed
    state = {
        navExpanded: false
    }

    //this function runs the react-scroll object and method that allows the scroll animation
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    //this function sets the navbar to expanded
    setNavExpanded = (expanded) => {
        this.setState({navExpanded: expanded})
    }

    //this function sets the state of the navbar to false i.e. closed
    closeNav = () => {
        this.setState({navExpanded: false})
    }

    render(){
        //the class componnent must have one function and this is the render method
        //solution to closing navbar on link click https://github.com/fisshy/react-scroll/issues/221
        return (
            // onToggle is a callback that is fired when the <Navbar> body collapses or expands.
            // expanded is a boolean that controls the visiblity of the navbar body
            <Navbar sticky="top" expand='sm' bg='dark' variant='dark' onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    <Nav>
                        <Link
                            onClick={this.closeNav}
                            id="homeNavLink"
                            to="introPage"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Home
                        </Link>
                    </Nav>

                    <Nav>
                        <Link
                            onClick={this.closeNav}
                            id="aboutNavLink"
                            to="theaboutPage"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            isDynamic={true}
                            duration={500}
                        >About
                        </Link>
                    </Nav>

                    <Nav>
                        <Link
                            onClick={this.closeNav}
                            id="portfolioLink"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            isDynamic={true}
                            duration={500}
                        >Portfolio
                        </Link>
                    </Nav>

                    <Nav>
                        <Link
                            onClick={this.closeNav}
                            id="contactsLink"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            isDynamic={true}
                            duration={500}
                        >Contact
                        </Link>
                    </Nav>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar