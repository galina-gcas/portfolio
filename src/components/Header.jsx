import React, { useState, useEffect, memo, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = useMemo(() => [
    { id: 'why', label: 'Почему вайб-кодинг?', path: '/#why' },
    { id: 'about', label: 'Кто я', path: '/#about' },
    { id: 'education', label: 'Дипломы и сертификаты', path: '/#education' },
    { id: 'projects', label: 'Проекты', path: '/#projects' },
    { id: 'contact', label: 'Контакты', path: '/#contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие мобильного меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Закрытие мобильного меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id) => {
    // Закрываем мобильное меню при клике
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      // Если мы не на главной странице, переходим на главную и затем скроллим
      window.location.href = `/#${id}`;
    } else {
      // Небольшая задержка для закрытия меню перед скроллом
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerHeight = window.innerWidth <= 768 ? 60 : 80; // Адаптивная высота хедера
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.pathname]);

  const handleNavClick = useCallback((item) => {
    if (item.path.startsWith('/#')) {
      scrollToSection(item.id);
    }
  }, [scrollToSection]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Galina GCAS
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map((item, index) => (
              <motion.li 
                key={item.id} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button onClick={() => handleNavClick(item)}>
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Button */}
        <motion.button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 0 : -8 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 0 : 8 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button onClick={() => handleNavClick(item)}>
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
});

Header.displayName = 'Header';

export default Header;