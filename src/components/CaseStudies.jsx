import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaseStudies = memo(() => {
  const caseStudies = useMemo(() => [
    {
      id: 1,
      icon: '💰',
      title: 'Финансовый калькулятор',
      status: 'completed',
      description: 'Полнофункциональный ипотечный калькулятор с графиком платежей, поддержкой досрочных погашений и экспортом в Excel.',
      technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript'],
      features: [
        'Расчёт ипотечных платежей',
        'График платежей с диаграммой',
        'Досрочные погашения',
        'Экспорт в Excel'
      ],
      result: 'Сокращение времени разработки на 80% благодаря вайб-кодингу',
      hasDetails: true,
      link: '/case-study/financial-calculator'
    },
    {
      id: 2,
      icon: '🍳',
      title: 'Telegram-бот для поиска рецептов',
      status: 'completed',
      description: 'Цифровой продукт для поиска рецептов с функцией избранного и рейтингом — вовлечение и удержание пользователей.',
      technologies: ['Python', 'Telegram API', 'SQLite', 'TheMealDB API'],
      features: [
        'Разнообразный поиск',
        'Карточки с изображениями',
        'Избранное с рейтингом',
        'Видео с YouTube'
      ],
      result: 'Создание долгосрочной точки взаимодействия с клиентом',
      hasDetails: true,
      link: '/case-study/recipe-bot'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Веб-сервис аналитики с помощью LLM',
      status: 'completed',
      description: 'Инструмент для быстрого анализа табличных данных из Excel и PDF-файлов с интеграцией LLM-моделей GigaChat и YandexGPT.',
      technologies: ['Python', 'Pandas', 'YandexGPT', 'GigaChat'],
      features: [
        'Поддержка Excel, CSV и PDF',
        'Автоматическая визуализация данных',
        'Экспорт отчётов в PDF'
      ],
      result: 'Автоматическое выявление трендов и аномалий в данныx',
      hasDetails: true,
      link: '/case-study/analytics-service'
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }), []);

  const getStatusClass = useMemo(() => (status) => {
    switch (status) {
      case 'completed': return 'completed';
      case 'in-progress': return 'in-progress';
      case 'planned': return 'planned';
      default: return 'planned';
    }
  }, []);

  const getStatusText = useMemo(() => (status) => {
    switch (status) {
      case 'completed': return 'Завершён';
      case 'in-progress': return 'В процессе';
      case 'planned': return 'Запланирован';
      default: return 'Запланирован';
    }
  }, []);

  return (
    <section id="case-studies" className="section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }}>
          <motion.h2 className="section-title" variants={itemVariants}>Учебные кейсы</motion.h2>
          <motion.p className="case-studies-note" variants={itemVariants}>
            Практические проекты, созданные в процессе обучения вайб-кодингу < br />и работе с AI-инструментами.
          </motion.p>

          <div className="case-studies-grid">
            {caseStudies.map((caseStudy) => (
              <motion.div 
                key={caseStudy.id} 
                className="case-study-card" 
                variants={itemVariants}
              >
                <div className="case-study-icon">{caseStudy.icon}</div>
                {caseStudy.hasDetails ? (
                  <Link to={caseStudy.link} className="case-study-title-link">
                    <h3 className="case-study-title">{caseStudy.title}</h3>
                  </Link>
                ) : (
                  <h3 className="case-study-title">{caseStudy.title}</h3>
                )}
                <span className={`status ${getStatusClass(caseStudy.status)}`}>
                  {getStatusText(caseStudy.status)}
                </span>
                
                <p className="case-study-description">{caseStudy.description}</p>
                
                <div className="case-study-technologies">
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="case-study-features">
                  <h4>Ключевые функции:</h4>
                  <ul>
                    {caseStudy.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-result">
                  <strong>Результат:</strong> {caseStudy.result}
                </div>

                <div className="case-study-actions">
                  {caseStudy.hasDetails ? (
                    <Link to={caseStudy.link} className="btn-small">
                      Подробнее
                    </Link>
                  ) : (
                    <button className="btn-small btn-outline" disabled>
                      Скоро
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CaseStudies.displayName = 'CaseStudies';

export default CaseStudies;
