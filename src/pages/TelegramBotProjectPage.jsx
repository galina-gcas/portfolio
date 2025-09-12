import React from 'react';
import { motion } from 'framer-motion';

const TelegramBotProjectPage = () => {
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
    'Автоматический поиск новостей о климатических изменениях и стихийных бедствиях',
    'Анализ и фильтрация новостей по релевантности и достоверности',
    'Генерация постов для Threads на основе найденных новостей',
    'Настройка ключевых слов и источников новостей',
    'Уведомления о важных событиях в реальном времени',
    'Интеграция с различными новостными API'
  ];

  const screenshots = [
    {
      title: 'Главное меню бота',
      description: 'Интуитивно понятный интерфейс с основными функциями',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Main+Menu'
    },
    {
      title: 'Поиск новостей',
      description: 'Результаты поиска с фильтрацией по дате и источнику',
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=News+Search'
    },
    {
      title: 'Генерация постов',
      description: 'Автоматическое создание контента для социальных сетей',
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Post+Generation'
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
            <a href="/">Главная</a> / <a href="/#projects">Проекты</a> / Telegram-бот для климатических новостей
          </motion.div>

          {/* Project Header */}
          <motion.div 
            className="project-page-header"
            variants={itemVariants}
          >
            <div className="project-page-icon">🤖</div>
            <h1>Telegram-бот для климатических новостей</h1>
            <p className="project-page-subtitle"><strong>ИИ-решение для бизнеса</strong></p>
            <div className="project-page-meta">
              <span className="status completed">В продакшене</span>
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
              <p>Telegram-бот, который я создала для своего бизнеса, автоматизирует поиск и анализ новостей о климатических изменениях, стихийных бедствиях и катастрофах. Бот помогает создавать актуальный контент для социальных сетей, особенно для Threads.</p>
              <p>Проект активно используется в ежедневной работе и постоянно совершенствуется с добавлением новых функций и улучшением алгоритмов поиска.</p>
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
                  <h3>Backend</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Telegram Bot API</span>
                    <span className="tech-tag">FastAPI</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>ИИ и обработка данных</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">OpenAI GPT</span>
                    <span className="tech-tag">News API</span>
                    <span className="tech-tag">Web Scraping</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Инфраструктура</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Docker</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Redis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-page-section">
              <h2>Скриншоты интерфейса</h2>
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
              <h2>Результаты</h2>
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-icon">⚡</div>
                  <h3>Экономия времени</h3>
                  <p>Автоматизация поиска новостей экономит до 2-3 часов ежедневно</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">📈</div>
                  <h3>Качество контента</h3>
                  <p>ИИ помогает создавать более релевантный и актуальный контент</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">🎯</div>
                  <h3>Точность информации</h3>
                  <p>Фильтрация источников повышает достоверность новостей</p>
                </div>
              </div>
            </div>

            <div className="project-page-actions">
              <a href="https://t.me/climate_news_bot" className="btn" target="_blank" rel="noopener noreferrer">
                Попробовать бота →
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

export default TelegramBotProjectPage;
