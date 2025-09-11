import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingElements = [
    { delay: 0, duration: 3 },
    { delay: 1, duration: 4 },
    { delay: 2, duration: 3.5 },
    { delay: 0.5, duration: 4.5 }
  ];

  return (
    <motion.section 
      id="home" 
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating background elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'rgba(99, 102, 241, 0.1)',
            borderRadius: '50%',
            top: `${20 + index * 20}%`,
            left: `${10 + index * 25}%`,
            zIndex: 1
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container">
        <motion.h1 
          variants={itemVariants}
          className="hero-title"
        >
          Функциональные и конверсионные MVP быстро и чётко под вашу задачу — на вайб-кодинге.
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="hero-subtitle"
        >
          Чат-боты, ИИ-ассистенты, системы аналитики<br/>и другие решения за 1-3 дня.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="hero-actions"
        >
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(73, 185, 255, 0.35)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Обсудить проект
          </motion.a>
          
          <motion.a 
            href="#projects" 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Посмотреть проекты
          </motion.a>
        </motion.div>

        {/* Stats section (под hero как было) */}
        <motion.div
          variants={itemVariants}
          className="hero-stats"
        >
          <div className="stat">
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            >
              80%
            </motion.div>
            <div className="stat-label">Сокращение времени разработки</div>
          </div>
          <div className="stat">
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
            >
              24ч
            </motion.div>
            <div className="stat-label">От идеи до MVP</div>
          </div>
          <div className="stat">
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
            >
              100%
            </motion.div>
            <div className="stat-label">Готовность к масштабированию</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;