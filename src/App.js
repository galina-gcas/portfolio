import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyVibeCoding from './components/WhyVibeCoding';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyVibeCoding />
      <About />
      <Projects />
      <CaseStudy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;