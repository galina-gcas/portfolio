import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { id: 'why', label: 'Почему вайб-кодинг?', path: '/#why' },
    { id: 'about', label: 'Кто я', path: '/#about' },
    { id: 'education', label: 'Дипломы и сертификаты', path: '/#education' },
    { id: 'projects', label: 'Проекты', path: '/#projects' },
    { id: 'contact', label: 'Контакты', path: '/#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // Если мы не на главной странице, переходим на главную и затем скроллим
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 80; // Высота хедера
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavClick = (item) => {
    if (item.path.startsWith('/#')) {
      scrollToSection(item.id);
    }
  };

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
        <nav>
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
      </div>
    </motion.header>
  );
};

export default Header;