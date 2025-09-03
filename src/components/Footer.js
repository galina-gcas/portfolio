import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <p>&copy; 2025 Galina GCAS. Все права защищены. Вайб-кодинг для бизнеса.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;