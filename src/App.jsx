import React, { Suspense, lazy } from 'react';
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
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import ScrollToAnchor from './components/ScrollToAnchor.jsx';
import NotFound from './components/NotFound.jsx';

// Lazy load pages for better performance
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage.jsx'));
const RecipeBotCasePage = lazy(() => import('./pages/RecipeBotCasePage.jsx'));
const TelegramBotProjectPage = lazy(() => import('./pages/TelegramBotProjectPage.jsx'));
const AIChatbotProjectPage = lazy(() => import('./pages/AIChatbotProjectPage.jsx'));
const AnalyticsSystemProjectPage = lazy(() => import('./pages/AnalyticsSystemProjectPage.jsx'));
const MVPAppProjectPage = lazy(() => import('./pages/MVPAppProjectPage.jsx'));

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

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '50vh',
    fontSize: '1.2rem',
    color: 'var(--electric-blue)'
  }}>
    <div style={{ 
      width: '40px', 
      height: '40px', 
      border: '4px solid var(--slate-100)', 
      borderTop: '4px solid var(--electric-blue)', 
      borderRadius: '50%', 
      animation: 'spin 1s linear infinite',
      marginRight: '1rem'
    }}></div>
    Загрузка...
  </div>
);

function App() {
  return (
    <Router basename="/portfolio">
      <ScrollToTop />
      <ScrollToAnchor />
      <div className="App">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/financial-calculator" element={<CaseStudyPage />} />
            <Route path="/case-study/recipe-bot" element={<RecipeBotCasePage />} />
            <Route path="/project/telegram-bot" element={<TelegramBotProjectPage />} />
            <Route path="/project/ai-chatbot" element={<AIChatbotProjectPage />} />
            <Route path="/project/analytics-system" element={<AnalyticsSystemProjectPage />} />
            <Route path="/project/mvp-app" element={<MVPAppProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;