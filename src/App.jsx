import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhyVibeCoding from './components/WhyVibeCoding.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollToAnchor from './components/ScrollToAnchor.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import RecipeBotCasePage from './pages/RecipeBotCasePage.jsx';
import TelegramBotProjectPage from './pages/TelegramBotProjectPage.jsx';
import AIChatbotProjectPage from './pages/AIChatbotProjectPage.jsx';
import AnalyticsSystemProjectPage from './pages/AnalyticsSystemProjectPage.jsx';
import MVPAppProjectPage from './pages/MVPAppProjectPage.jsx';

function HomePage() {
  return (
    <>
      <Hero />
      <WhyVibeCoding />
      <About />
      <Education />
      <CaseStudies />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToAnchor />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/financial-calculator" element={<CaseStudyPage />} />
          <Route path="/case-study/recipe-bot" element={<RecipeBotCasePage />} />
          <Route path="/project/telegram-bot" element={<TelegramBotProjectPage />} />
          <Route path="/project/ai-chatbot" element={<AIChatbotProjectPage />} />
          <Route path="/project/analytics-system" element={<AnalyticsSystemProjectPage />} />
          <Route path="/project/mvp-app" element={<MVPAppProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;