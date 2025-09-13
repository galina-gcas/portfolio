import React from 'react';
import { motion } from 'framer-motion';

const MVPAppProjectPage = () => {
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
    'Быстрая разработка и запуск за 2-4 недели',
    'Минимальный функционал для тестирования гипотез',
    'Интеграция с платежными системами',
    'Аналитика пользовательского поведения',
    'Адаптивный дизайн для всех устройств',
    'Масштабируемая архитектура для роста'
  ];

  const screenshots = [
    {
      title: 'Главный экран приложения',
      description: 'Современный и интуитивный интерфейс',
      image: 'https://via.placeholder.com/600x400/f97316/ffffff?text=Main+Screen'
    },
    {
      title: 'Процесс регистрации',
      description: 'Упрощенная форма регистрации и авторизации',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Registration+Flow'
    },
    {
      title: 'Панель управления',
      description: 'Административная панель для управления контентом',
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Admin+Panel'
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
            <a href="/portfolio/">Главная</a> / <a href="/portfolio/#projects">Проекты</a> / Конверсионное MVP приложение
          </motion.div>

          {/* Project Header */}
          <motion.div 
            className="project-page-header"
            variants={itemVariants}
          >
            <div className="project-page-icon">🚀</div>
            <h1>Конверсионное MVP приложение</h1>
            <p className="project-page-subtitle"><strong>Быстрый старт для вашей идеи</strong></p>
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
              <p>Минимально жизнеспособный продукт (MVP), созданный для быстрого тестирования бизнес-идеи на рынке. Приложение содержит только ключевой функционал, необходимый для валидации концепции и получения первых пользователей.</p>
              <p>Идеально подходит для стартапов и предпринимателей, которые хотят быстро проверить свою идею с минимальными затратами.</p>
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
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Backend</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Supabase</span>
                    <span className="tech-tag">Vercel</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Платежи</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Stripe</span>
                    <span className="tech-tag">PayPal</span>
                    <span className="tech-tag">Webhook</span>
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
              <h2>Преимущества MVP</h2>
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-icon">⚡</div>
                  <h3>Быстрый запуск</h3>
                  <p>От идеи до продукта за 2-4 недели</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">💰</div>
                  <h3>Минимальные затраты</h3>
                  <p>Экономия бюджета на 60-80%</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">📊</div>
                  <h3>Быстрая валидация</h3>
                  <p>Получение обратной связи от пользователей</p>
                </div>
              </div>
            </div>

            <div className="project-page-section">
              <h2>Процесс разработки</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Анализ идеи</h3>
                  <p>Определяем ключевой функционал и целевую аудиторию</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Прототипирование</h3>
                  <p>Создаем wireframes и пользовательские сценарии</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Разработка</h3>
                  <p>Быстрая разработка с использованием современных технологий</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Запуск</h3>
                  <p>Деплой и тестирование с реальными пользователями</p>
                </div>
              </div>
            </div>

            <div className="project-page-actions">
              <a href="/portfolio/#contact" className="btn">
                Обсудить проект →
              </a>
              <a href="/portfolio/#projects" className="btn btn-secondary">
                ← Назад к проектам
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MVPAppProjectPage;
