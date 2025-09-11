import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhyVibeCoding from './components/WhyVibeCoding.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyVibeCoding />
      <About />
      <Education />
      <Projects />
      <CaseStudy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;