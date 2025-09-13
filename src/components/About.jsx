import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Вайб-кодинг', level: 90 },
    { name: 'ИИ интеграция', level: 85 },
    { name: 'MVP разработка', level: 95 },
    { name: 'Автоматизация', level: 88 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section id="about" className="section">
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
            Кто я?
          </motion.h2>
          
          <div className="about">
            {/* Левая колонка: текст */}
            <motion.div
              className="about-content"
              variants={itemVariants}
            >
              <div className="about-text">
                <p>Я — предприниматель и разработчик. Автоматизирую процессы и создаю решения для своего бизнеса, а также оказываю услуги другим предпринимателям и малому бизнесу.</p>
                <p>Моя экспертиза — в быстрой разработке MVP, интеграции ИИ и автоматизации рутинных задач с помощью современных инструментов, включая вайб-кодинг и автономные агенты.</p>
                <p>Открыта к обсуждению ваших проектов и сотрудничеству под различные задачи в широком спектре ниш — от финтеха до e-commerce и недвижимости.</p>
              </div>
            </motion.div>
            
            {/* Правая колонка: фото */}
            <motion.div
              className="about-photo"
              variants={itemVariants}
            >
              <div className="photo-card">
                <img src="images/profile.jpg" alt="Galina GCAS" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;