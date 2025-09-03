import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'why', label: 'Почему вайб-кодинг?' },
    { id: 'about', label: 'Кто я' },
    { id: 'projects', label: 'Проекты' },
    { id: 'contact', label: 'Контакты' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="logo">
          Galina <span>GCAS</span>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                <button onClick={() => scrollToSection(item.id)}>
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