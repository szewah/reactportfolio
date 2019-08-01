import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './style.css';

const NavBar = props => {
    return (
        <Navbar sticky="top" collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#introPage">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contacts">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar