import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsSystemProjectPage = () => {
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
    'Интерактивные дашборды с ключевыми метриками',
    'Прогнозирование продаж с помощью машинного обучения',
    'Автоматическая генерация отчетов и презентаций',
    'Интеграция с CRM, ERP и другими системами',
    'Настраиваемые уведомления о важных событиях',
    'Экспорт данных в различных форматах'
  ];

  const screenshots = [
    {
      title: 'Главный дашборд',
      description: 'Обзор ключевых показателей и трендов продаж',
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Main+Dashboard'
    },
    {
      title: 'Детальная аналитика',
      description: 'Глубокий анализ по сегментам и продуктам',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Detailed+Analytics'
    },
    {
      title: 'Прогнозы и тренды',
      description: 'Предсказательная аналитика и планирование',
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Forecasts+Trends'
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
            <a href="/">Главная</a> / <a href="/#projects">Проекты</a> / Система аналитики продаж
          </motion.div>

          {/* Project Header */}
          <motion.div 
            className="project-page-header"
            variants={itemVariants}
          >
            <div className="project-page-icon">📊</div>
            <h1>Система аналитики продаж</h1>
            <p className="project-page-subtitle"><strong>Умная аналитика для бизнеса</strong></p>
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
              <p>Комплексная система аналитики продаж, которая превращает ваши данные в понятные инсайты и прогнозы. Система автоматически собирает данные из различных источников и предоставляет детальную аналитику в удобном формате.</p>
              <p>Решение помогает принимать обоснованные бизнес-решения на основе данных и повышать эффективность продаж.</p>
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
                  <h3>Frontend</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">D3.js</span>
                    <span className="tech-tag">Chart.js</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Backend</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">MongoDB</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Аналитика</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Pandas</span>
                    <span className="tech-tag">TensorFlow</span>
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
              <h2>Результаты</h2>
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-icon">📈</div>
                  <h3>Рост продаж</h3>
                  <p>Увеличение эффективности продаж на 25-40%</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">🎯</div>
                  <h3>Точность прогнозов</h3>
                  <p>Прогнозирование с точностью до 85%</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">⚡</div>
                  <h3>Скорость анализа</h3>
                  <p>Сокращение времени анализа данных в 10 раз</p>
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

export default AnalyticsSystemProjectPage;
