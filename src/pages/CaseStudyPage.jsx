import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyPage = () => {
  const highlights = [
    'Ввод ключевых параметров: сумма кредита, срок (в годах), первоначальный взнос, процентная ставка (с возможностью отключения — для расчёта рассрочки);',
    'Автоматический расчёт: итоговой суммы кредита, переплаты по процентам и минимального необходимого ежемесячного дохода;',
    'Блок «График платежей» с круговой диаграммой распределения выплат (<span class="highlight">проценты vs тело кредита</span>) и детализированной таблицей по месяцам;',
    'Поддержка досрочных погашений с выбором сценария — сокращение срока или уменьшение платежа;',
    'Функция экспорта расчётной таблицы в Excel (формат .xlsx) для дальнейшего анализа.'
  ];

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

  return (
    <div className="case-study-page">
      <div className="container">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={containerVariants} 
          viewport={{ once: true, margin: '-100px' }}
        >
            {/* Breadcrumb */}
            <motion.div className="breadcrumb" variants={itemVariants}>
              <a href="/">Главная</a> / <a href="/#case-studies">Учебные кейсы</a> / Финансовый калькулятор
            </motion.div>

            {/* Case Header */}
            <motion.div 
              className="case-page-header"
              variants={itemVariants}
            >
              <div className="case-page-icon">💰</div>
              <h1>Финансовый калькулятор</h1>
              <p className="case-page-subtitle"><strong>вайб-кодинг на Cursor AI</strong></p>
              <div className="case-page-meta">
                <span className="status completed">Завершён</span>
              </div>
            </motion.div>

            {/* Case Content */}
            <motion.div 
              className="case-page-content"
              variants={itemVariants}
            >
              <div className="case-page-section">
                <h2>Цель проекта</h2>
                <p>Создать интуитивно понятный и функциональный ипотечный калькулятор — инструмент, позволяющий быстро оценить финансовую нагрузку по кредиту, спланировать бюджет и принимать обоснованные решения при покупке недвижимости или привлечении заемных средств.</p>
              </div>

              <div className="case-page-section">
                <h2>Что было сделано</h2>
                <p>Разработан полноценный веб-калькулятор на Python (фреймворк Flask). Проект реализован в среде <strong>Cursor AI</strong> с применением передовых LLM-моделей, что позволило ускорить цикл разработки и повысить качество кода.</p>
                
                <div className="demo-section">
                  <a href="https://galinagcas.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="demo-btn">
                    🧮 Попробовать калькулятор
                  </a>
                </div>
                
                <p>В калькуляторе реализованы:</p>
                <ul>
                  {highlights.map((highlight, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
                  ))}
                </ul>
              </div>

              <div className="case-page-section">
                <h2>Технологии</h2>
                <div className="technologies-grid">
                  <div className="tech-category">
                    <h3>Backend</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Flask</span>
                    </div>
                  </div>
                  <div className="tech-category">
                    <h3>Frontend</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">HTML5</span>
                      <span className="tech-tag">CSS3</span>
                      <span className="tech-tag">JavaScript</span>
                    </div>
                  </div>
                  <div className="tech-category">
                    <h3>Инструменты</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Cursor AI</span>
                      <span className="tech-tag">Chart.js</span>
                    </div>
                  </div>
                </div>
              </div>

            <div className="case-page-section">
              <h2>Результат разработки</h2>
              <p>Калькулятор стал практическим инструментом для оценки кредитной нагрузки в реальном времени.</p>
              <p>Реализация через вайб-кодинг с использованием Cursor AI позволила <strong>сократить время разработки на 80%</strong> по сравнению с традиционным циклом, сохранив высокое качество и читаемость кода.</p>
              <p>Проект продемонстрировал применимость LLM в создании бизнес-ориентированных решений — от идеи до рабочего прототипа за несколько часов.</p>
              <p>Инструмент разработан в рамках курса «Вайб-кодинг и автономные агенты» и может быть легко адаптирован под другие типы кредитов.</p>
              
              <div className="demo-section">
                <a href="https://galinagcas.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="demo-btn">
                  🧮 Попробовать калькулятор
                </a>
              </div>
            </div>

              <div className="case-page-section">
                <h2>Ключевые особенности</h2>
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">📊</div>
                    <h3>Интерактивные графики</h3>
                    <p>Круговая диаграмма показывает распределение платежей между процентами и телом кредита</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📅</div>
                    <h3>Детальный график</h3>
                    <p>Месячная таблица с разбивкой каждого платежа и остатком долга</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">⚡</div>
                    <h3>Досрочные погашения</h3>
                    <p>Расчёт сценариев сокращения срока или уменьшения платежа</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📁</div>
                    <h3>Экспорт данных</h3>
                    <p>Сохранение результатов расчёта в Excel для дальнейшего анализа</p>
                  </div>
                </div>
              </div>

              <div className="case-page-actions">
                <a href="/#case-studies" className="btn-small btn-outline">
                  ← Назад к кейсам
                </a>
                <a href="/#projects" className="btn-small">
                  Смотреть проекты →
                </a>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
