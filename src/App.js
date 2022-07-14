import React, {useState} from 'react';
import './App.css';
import About from './componenets/About';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';
import Nav from './componenets/Nav';
import Portfolio from './componenets/Portfolio';
import Resume from './componenets/Resume';

function App() {

  const [contactSelected, setContactSelected] = useState(false)
  const [resumeSelected, setResumeSelected] = useState(false)
  const [aboutSelected, setAboutSelected] = useState(true)
  const [portfolioSelected, setPortfolioSelected] = useState(false)

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        {aboutSelected && <About></About>}
        {contactSelected && <Contact></Contact>}
        {portfolioSelected && <Portfolio></Portfolio>}
        {resumeSelected && <Resume></Resume>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
