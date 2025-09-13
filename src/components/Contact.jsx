import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    { 
      icon: 'images/Telegram_2019_Logo.svg', 
      label: 'Telegram', 
      href: 'https://t.me/galina_gcas', 
      color: '#0088cc',
      isImage: true
    },
    { 
      icon: 'images/Threads_(app)_logo.svg.png', 
      label: 'Threads', 
      href: 'https://threads.com/@galina_gcas', 
      color: '#000000',
      isImage: true
    }
  ];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'galina.gcas@gmail.com', href: 'mailto:galina.gcas@gmail.com' },
    { icon: '📱', label: 'Telegram', value: '@galina_g_cas', href: 'https://t.me/galina_g_cas' },
    { icon: '⏰', label: 'Время ответа', value: 'В течение 24 часов' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="section-title"
          >
            Готовы начать?
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="contact-intro"
          >
            <div className="intro-card">
              <div className="intro-icon">🚀</div>
              <p>Я открыта для обсуждения ваших проектов — давайте вместе создадим решение.</p>
            </div>
          </motion.div>

          <div className="contacts">
            <motion.div
              className="contact-info"
              variants={itemVariants}
            >
              <div className="contact-card">
                <h3>Мои контакты</h3>
                <div className="contact-list">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      className="contact-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="contact-icon">{contact.icon}</div>
                      <div className="contact-details">
                        <span className="contact-label">{contact.label}</span>
                        {contact.href ? (
                          <a href={contact.href} className="contact-value" target="_blank" rel="noopener noreferrer">
                            {contact.value}
                          </a>
                        ) : (
                          <span className="contact-value">{contact.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="social-section"
              variants={itemVariants}
            >
              <div className="social-card">
                <h3>Мои соцсети</h3>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--link-color': link.color }}
                      whileHover={{ 
                        boxShadow: `0 10px 20px ${link.color}30`
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {link.isImage ? (
                        <img src={link.icon} alt={link.label} className="social-icon-img" />
                      ) : (
                        <span className="social-icon">{link.icon}</span>
                      )}
                      <span className="social-label">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;