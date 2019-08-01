import React from 'react';
import Cards from '../components/Cards/Cards.js';

const PortfolioCards = () => {
    return (
        <div className="porfolioDiv">
            <h3 className="portfolioH3">RECENT PROJECTS</h3>
            <a href="https://github.com/szewah">
                <i class="fab fa-github"></i>
            </a>
            <Cards></Cards>
        </div>
    )
}

export default PortfolioCards;


