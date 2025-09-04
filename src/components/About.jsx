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
            <motion.div
              className="about-content"
              variants={itemVariants}
            >
              <div className="about-text">
                <p>Я — предприниматель и разработчик. Автоматизирую процессы и создаю решения для своего бизнеса, а также оказываю услуги другим предпринимателям и малому бизнесу.</p>
                <p>Моя экспертиза — в быстрой разработке MVP, интеграции ИИ и автоматизации рутинных задач с помощью современных инструментов, включая вайб-кодинг и автономные агенты.</p>
                <p>Открыта к обсуждению ваших проектов и сотрудничеству под различные задачи в широком спектре ниш — от финтеха до e-commerce и недвижимости.</p>
              </div>
              
              <div className="skills-section">
                <h4>Мои навыки</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="about-education"
              variants={itemVariants}
            >
              <div className="education-card">
                <div className="education-icon">🎓</div>
                <h3>Обучение</h3>
                <p>Планируя работу с российским сегментом бизнеса, я целенаправленно инвестировала в обучение российским нейросетям и инструментам на курсе Университета Zerocoder: <strong>«Нейросети без границ: с российскими инструментами»</strong>.</p>
                <p>Сертификат: <a href="#" target="_blank" rel="noopener noreferrer">Посмотреть сертификат</a></p>
                <p>Сейчас прохожу мини-курс по <strong>вайб-кодингу и автономным агентам</strong>. Некоторые учебные проекты уже реализованы и доступны ниже.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;