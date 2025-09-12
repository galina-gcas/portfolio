import React from 'react';
import { motion } from 'framer-motion';

const AIChatbotProjectPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const features = [
    'Автоматические ответы на типовые вопросы клиентов',
    'Интеграция с существующими CRM системами',
    'Обучение на вашей базе знаний и документации',
    'Передача сложных вопросов живым операторам',
    'Аналитика диалогов и метрики эффективности',
    'Многоязычная поддержка и персонализация'
  ];

  const screenshots = [
    {
      title: 'Интерфейс чат-бота',
      description: 'Современный дизайн с поддержкой различных типов сообщений',
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Chat+Interface'
    },
    {
      title: 'Панель администратора',
      description: 'Управление базой знаний и настройка ответов',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Admin+Panel'
    },
    {
      title: 'Аналитика и отчеты',
      description: 'Детальная статистика по эффективности бота',
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Analytics+Dashboard'
    }
  ];

  return (
    <div className="project-page">
      <div className="container">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={containerVariants} 
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Breadcrumb */}
          <motion.div className="breadcrumb" variants={itemVariants}>
            <a href="/">Главная</a> / <a href="/#projects">Проекты</a> / ИИ-чат-бот для поддержки клиентов
          </motion.div>

          {/* Project Header */}
          <motion.div 
            className="project-page-header"
            variants={itemVariants}
          >
            <div className="project-page-icon">🤖</div>
            <h1>ИИ-чат-бот для поддержки клиентов</h1>
            <p className="project-page-subtitle"><strong>Автоматизация клиентского сервиса</strong></p>
            <div className="project-page-meta">
              <span className="status completed">Готов к реализации</span>
              <span className="project-page-date">2024</span>
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div 
            className="project-page-content"
            variants={itemVariants}
          >
            <div className="project-page-section">
              <h2>О проекте</h2>
              <p>Интеллектуальный чат-бот на основе современных ИИ-технологий, который автоматизирует работу службы поддержки клиентов. Бот способен понимать контекст, обучаться на ваших данных и предоставлять персонализированные ответы.</p>
              <p>Решение идеально подходит для компаний любого размера, которые хотят улучшить качество клиентского сервиса и снизить нагрузку на операторов.</p>
            </div>

            <div className="project-page-section">
              <h2>Основной функционал</h2>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-page-section">
              <h2>Технологии</h2>
              <div className="technologies-grid">
                <div className="tech-category">
                  <h3>ИИ и ML</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">OpenAI GPT</span>
                    <span className="tech-tag">LangChain</span>
                    <span className="tech-tag">Vector DB</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Backend</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">FastAPI</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Интеграции</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">CRM API</span>
                    <span className="tech-tag">Webhook</span>
                    <span className="tech-tag">REST API</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-page-section">
              <h2>Интерфейс и возможности</h2>
              <div className="screenshots-grid">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot-item">
                    <img src={screenshot.image} alt={screenshot.title} />
                    <h3>{screenshot.title}</h3>
                    <p>{screenshot.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-page-section">
              <h2>Преимущества</h2>
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-icon">⚡</div>
                  <h3>Экономия времени</h3>
                  <p>Сокращение времени ответа клиентам до 80%</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">💰</div>
                  <h3>Снижение затрат</h3>
                  <p>Уменьшение нагрузки на операторов на 60%</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">📈</div>
                  <h3>Повышение качества</h3>
                  <p>Стабильные и точные ответы 24/7</p>
                </div>
              </div>
            </div>

            <div className="project-page-actions">
              <a href="/#contact" className="btn">
                Обсудить проект →
              </a>
              <a href="/#projects" className="btn btn-secondary">
                ← Назад к проектам
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIChatbotProjectPage;
