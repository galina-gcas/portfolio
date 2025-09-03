import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    { icon: '📱', label: 'Telegram', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '💻', label: 'GitHub', href: '#' },
    { icon: '.VK', label: 'VK', href: '#' }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Готовы начать?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Я открыта к обсуждению ваших задач и проектов. Напишите — и мы вместе создадим решение, которое работает.
        </motion.p>

        <div className="contacts">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Мои контакты</h3>
            <p><strong>Email:</strong> <a href="mailto:hello@galinagcas.com">hello@galinagcas.com</a></p>
            <p><strong>Телефон:</strong> +7 (XXX) XXX-XX-XX</p>
            <p><strong>Telegram:</strong> <a href="https://t.me/galinagcas" target="_blank" rel="noopener noreferrer">@galinagcas</a></p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Мои соцсети</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p style={{ marginTop: '2rem' }}>
              Также доступен <a href="#" target="_blank" rel="noopener noreferrer">портфолио-документ</a> с деталями проектов и отзывами.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;