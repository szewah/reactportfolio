import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './style.css';

class NavBar extends Component {

    state ={
        clicked: false,
        page: ""
    }

    handleOnClick = event => {
        event.preventDefault();
        this.setState({clicked:true});
        alert(event.target);
        //if else statements here?
    }

    render(){
        // if else statements here?
        return (
            <Navbar sticky="top" collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#introPage" onClick={this.handleOnClick}>Home</Nav.Link>
                    <Nav.Link href="#about" onClick={this.handleOnClick}>About</Nav.Link>
                    <Nav.Link href="#portfolio" onClick={this.handleOnClick}>Portfolio</Nav.Link>
                    <Nav.Link href="#contacts" onClick={this.handleOnClick}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar