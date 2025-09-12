import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'ai-chatbot',
      title: 'ИИ-чат-бот для поддержки клиентов',
      description: 'Умный помощник, который автоматически отвечает на вопросы клиентов 24/7. Интегрируется с вашей CRM-системой, обучается на базе знаний компании и может обрабатывать до 80% типовых запросов без участия человека.',
      icon: '🤖',
      technologies: ['Python', 'OpenAI', 'FastAPI'],
      category: 'ИИ решения',
      hasDetails: true,
      link: '/project/ai-chatbot'
    },
    {
      id: 'analytics-system',
      title: 'Система аналитики продаж',
      description: 'Комплексная платформа для анализа бизнес-метрик с интерактивными дэшбордами, прогнозированием трендов и автоматическими отчётами. Помогает принимать решения на основе данных и выявлять скрытые возможности роста.',
      icon: '📊',
      technologies: ['React', 'D3.js', 'Node.js'],
      category: 'Аналитика',
      hasDetails: true,
      link: '/project/analytics-system'
    },
    {
      id: 'mvp-app',
      title: 'Конверсионное MVP приложение',
      description: 'Быстрый прототип для валидации бизнес-идеи на рынке. Включает ключевой функционал, систему аналитики и возможность монетизации. Позволяет за 2-4 недели получить обратную связь от пользователей и скорректировать стратегию.',
      icon: '🚀',
      technologies: ['React', 'Firebase', 'Stripe'],
      category: 'MVP',
      hasDetails: true,
      link: '/project/mvp-app'
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={cardVariants}
            className="section-title"
          >
            Проекты
          </motion.h2>
          
          <motion.div
            variants={cardVariants}
            className="project-intro"
          >
            <div className="intro-card">
              <div className="intro-icon">🤖</div>
              <p>Для своего бизнеса я создала <strong>Telegram-бота для поиска климатических новостей и стихийных бедствий</strong>, который активно использую для поиска актуальной информации и создания контента для социальных сетей.</p>
            </div>
          </motion.div>

          {/* Мой проект - выделенный блок */}
          <motion.div
            variants={cardVariants}
            className="my-project-section"
          >
            <div className="my-project-card">
              <div className="my-project-image-container">
                <img src="/images/telegram-bot-climate.png" alt="Telegram-бот для климатических новостей" />
                <div className="my-project-category">Мой проект</div>
              </div>
              <div className="my-project-content">
                <h3>Telegram-бот для поиска климатических новостей</h3>
                <p>Он ищет новости о климатических изменениях, стихийных бедствиях и катастрофах, помогает писать посты для Threads на основе этих новостей.</p>
                <div className="my-project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Telegram API</span>
                  <span className="tech-tag">GigaChat</span>
                </div>
                <div className="my-project-actions">
                  <Link to="/project/telegram-bot" className="btn-small btn-outline">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.h3 
            variants={cardVariants}
            className="project-subtitle"
          >
            Примеры проектов, которые мы можем сделать вместе:
          </motion.h3>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={cardVariants}
              >
                <div className="project-icon-container">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="content">
                  <h3 className="project-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button className="btn-small btn-outline">Обсудить</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;