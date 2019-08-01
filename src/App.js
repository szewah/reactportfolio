import React from 'react';
import './App.css';
import IntroPage from './pages/Intro'
import AboutPage from './pages/About'
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import Navigationbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <div className="App">
        <IntroPage></IntroPage>
        <Navigationbar></Navigationbar>
        <AboutPage></AboutPage>
        <PortfolioPage></PortfolioPage>
        <ContactPage></ContactPage>
    </div>
  );
}

export default App;
