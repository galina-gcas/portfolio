import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
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

  const caseStudies = [
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
      result: 'Сокращение времени разработки на 80% благодаря вайб-кодингу с Cursor AI',
      hasDetails: true,
      link: '/case-study/financial-calculator'
    },
    {
      id: 2,
      icon: '🤖',
      title: 'AI-ассистент для бизнеса',
      status: 'in-progress',
      description: 'Интеллектуальный помощник для автоматизации рутинных задач в бизнес-процессах.',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'React'],
      features: [
        'Обработка документов',
        'Автоматические ответы',
        'Анализ данных',
        'Интеграция с CRM'
      ],
      result: 'В процессе разработки',
      hasDetails: false
    },
    {
      id: 3,
      icon: '📊',
      title: 'Дашборд аналитики',
      status: 'planned',
      description: 'Интерактивная панель для визуализации бизнес-метрик и KPI в реальном времени.',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      features: [
        'Интерактивные графики',
        'Real-time обновления',
        'Кастомные виджеты',
        'Экспорт отчётов'
      ],
      result: 'Запланирован к разработке',
      hasDetails: false
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'completed';
      case 'in-progress': return 'in-progress';
      case 'planned': return 'planned';
      default: return 'planned';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Завершён';
      case 'in-progress': return 'В процессе';
      case 'planned': return 'Запланирован';
      default: return 'Запланирован';
    }
  };

  return (
    <section id="case-studies" className="section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }}>
          <motion.h2 className="section-title" variants={itemVariants}>Учебные кейсы</motion.h2>
          <motion.p className="case-studies-note" variants={itemVariants}>
            Практические проекты, созданные в процессе обучения вайб-кодингу и работе с AI-инструментами.
          </motion.p>

          <div className="case-studies-grid">
            {caseStudies.map((caseStudy) => (
              <motion.div 
                key={caseStudy.id} 
                className="case-study-card" 
                variants={itemVariants}
              >
                <div className="case-study-icon">{caseStudy.icon}</div>
                <h3 className="case-study-title">{caseStudy.title}</h3>
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
};

export default CaseStudies;
