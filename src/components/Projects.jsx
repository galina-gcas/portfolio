import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'ИИ-чат-бот для поддержки клиентов',
      description: 'Автоматизация ответов, интеграция с CRM, обучение на вашей базе знаний.',
      image: 'https://via.placeholder.com/400x200/6366f1/ffffff?text=Chatbot+UI',
      technologies: ['Python', 'OpenAI', 'FastAPI'],
      category: 'ИИ решения'
    },
    {
      title: 'Система аналитики продаж',
      description: 'Визуализация данных, прогнозирование, экспорт отчётов и уведомления.',
      image: 'https://via.placeholder.com/400x200/06b6d4/ffffff?text=Analytics+Dashboard',
      technologies: ['React', 'D3.js', 'Node.js'],
      category: 'Аналитика'
    },
    {
      title: 'Конверсионное MVP приложение',
      description: 'Быстрая сборка прототипа для тестирования идеи на рынке.',
      image: 'https://via.placeholder.com/400x200/f97316/ffffff?text=MVP+App',
      technologies: ['React', 'Firebase', 'Stripe'],
      category: 'MVP'
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
              <p>Для своего бизнеса я создала <strong>Telegram-бот для климатических новостей</strong>, который активно использую для поиска актуальной информации и создания контента для социальных сетей.</p>
            </div>
          </motion.div>

          {/* Мой проект - выделенный блок */}
          <motion.div
            variants={cardVariants}
            className="my-project-section"
          >
            <div className="my-project-card">
              <div className="my-project-image-container">
                <img src="https://via.placeholder.com/400x200/10b981/ffffff?text=Telegram+Bot" alt="Telegram-бот для климатических новостей" />
                <div className="my-project-category">Мой проект</div>
              </div>
              <div className="my-project-content">
                <h3>Telegram-бот для климатических новостей</h3>
                <p>ИИ-бот, который ищет новости о климатических изменениях, стихийных бедствиях и катастрофах, помогает писать посты для Threads на основе этих новостей.</p>
                <div className="my-project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Telegram API</span>
                  <span className="tech-tag">OpenAI</span>
                  <span className="tech-tag">News API</span>
                </div>
                <div className="my-project-actions">
                  <Link to="/project/telegram-bot" className="btn-small">
                    Подробнее
                  </Link>
                  <a href="https://t.me/climate_news_bot" className="btn-small btn-outline" target="_blank" rel="noopener noreferrer">
                    Попробовать бота
                  </a>
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
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button className="btn-small">Подробнее</button>
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