import React from 'react';
import './style.css';

const Navbar = props => {
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar