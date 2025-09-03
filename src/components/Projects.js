import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'ИИ-чат-бот для поддержки клиентов',
      description: 'Автоматизация ответов, интеграция с CRM, обучение на вашей базе знаний.',
      image: 'https://via.placeholder.com/400x180?text=Chatbot+UI'
    },
    {
      title: 'Система аналитики продаж',
      description: 'Визуализация данных, прогнозирование, экспорт отчётов и уведомлений.',
      image: 'https://via.placeholder.com/400x180?text=Analytics+Dashboard'
    },
    {
      title: 'Конверсионное MVP приложение',
      description: 'Быстрая сборка прототипа для тестирования идеи на рынке.',
      image: 'https://via.placeholder.com/400x180?text=MVP+App'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Проекты
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="project-intro"
        >
          Для себя я создала проект <strong>"Финансовый помощник"</strong>, который активно совершенствую, добавляя новый функционал — от анализа расходов до прогнозирования бюджета с помощью ИИ.
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="project-subtitle"
        >
          Примеры проектов, которые мы можем сделать вместе:
        </motion.h3>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;