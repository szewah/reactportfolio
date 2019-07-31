import React from 'react';
import './App.css';
import IntroPage from './pages/Intro'
import AboutPage from './pages/About'
import PortfolioPage from './pages/Portfolio';
// import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="App">
        <IntroPage></IntroPage>
        <AboutPage></AboutPage>
        <PortfolioPage></PortfolioPage>
        {/* <ContactPage></ContactPage> */}
    </div>
  );
}

export default App;
