import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              Galina <span>GCAS</span>
            </div>
            <p className="footer-tagline">Вайб-кодинг для бизнеса</p>
          </motion.div>

          <motion.div
            className="footer-info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="footer-copyright">
              &copy; {currentYear} Galina GCAS. Все права защищены.
            </p>
            <p className="footer-description">
              Создание функциональных MVP с помощью современных ИИ-инструментов
            </p>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <p className="footer-motto">
            От идеи до реализации — быстро, качественно, эффективно
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;