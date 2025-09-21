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
    'Загрузка файлов Excel (.xlsx, .xls), CSV и PDF (до 200 MB)',
    'Автоматическое извлечение таблиц из PDF файлов',
    'Умное распознавание типов данных (числа, даты, категории)',
    'Постраничный просмотр данных (первые 100 строк + "Показать ещё")',
    'Автоматическая аналитика: суммы, средние, уникальные значения',
    'Интерактивные диаграммы: столбчатые и линейные графики',
    'AI-анализ через YandexGPT и GigaChat',
    'Экспорт полного отчёта в PDF для презентаций'
  ];

  const screenshots = [
    {
      title: 'Загрузка и просмотр данных',
      description: 'Drag & drop интерфейс для загрузки файлов и красивая таблица с первыми 100 строками',
      image: 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Data+Upload+View'
    },
    {
      title: 'Автоматическая аналитика',
      description: 'Статистика по числовым столбцам и количество уникальных значений',
      image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Auto+Analytics'
    },
    {
      title: 'AI-анализ от нейросети',
      description: 'Экспертное заключение с выявлением трендов, аномалий и сезонности',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=AI+Analysis'
    },
    {
      title: 'Интерактивные диаграммы',
      description: 'Автоматически построенные графики на основе типов данных',
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Interactive+Charts'
    }
  ];

  const businessCases = [
    {
      icon: '💰',
      title: 'Анализ расходов',
      description: 'Загрузите выписку по расходам и получите анализ: "В феврале наблюдается пик расходов при снижении конверсии"'
    },
    {
      icon: '📈',
      title: 'Отчёты по продажам',
      description: 'Анализ продаж с выявлением сезонности и рекомендациями по оптимизации'
    },
    {
      icon: '📊',
      title: 'Маркетинговая аналитика',
      description: 'Анализ логов рекламы с выявлением эффективных каналов и перерасхода бюджета'
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
            <a href="/portfolio/">Главная</a> / <a href="/portfolio/#projects">Проекты</a> / Веб-сервис аналитики данных
          </motion.div>

          {/* Project Header */}
          <motion.div 
            className="project-page-header"
            variants={itemVariants}
          >
            <div className="project-page-icon">📊</div>
            <h1>Веб-сервис аналитики данных с LLM</h1>
            <p className="project-page-subtitle"><strong>Инструмент для быстрого анализа бизнес-данных</strong></p>
            <div className="project-page-meta">
              <span className="status completed">Завершён</span>
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
              <p>Современный веб-сервис для предпринимателей и владельцев малого бизнеса, который превращает «сырые» таблицы в понятную визуализацию и содержательные выводы за минуты, а не часы ручной обработки.</p>
              <p>Сервис поддерживает загрузку файлов в форматах XLSX, XLS, CSV и PDF. После загрузки автоматически определяются типы данных, строятся релевантные диаграммы, а первые 15 строк отправляются в YandexGPT или GigaChat для генерации экспертного анализа.</p>
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
                    <span className="tech-tag">Flask</span>
                    <span className="tech-tag">Pandas</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>AI & Аналитика</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">YandexGPT</span>
                    <span className="tech-tag">GigaChat</span>
                    <span className="tech-tag">Plotly</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Обработка данных</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">openpyxl</span>
                    <span className="tech-tag">xlrd</span>
                    <span className="tech-tag">PyPDF2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-page-section">
              <h2>Бизнес-кейсы</h2>
              <div className="business-cases-grid">
                {businessCases.map((businessCase, index) => (
                  <div key={index} className="business-case-item">
                    <div className="business-case-icon">{businessCase.icon}</div>
                    <h3>{businessCase.title}</h3>
                    <p>{businessCase.description}</p>
                  </div>
                ))}
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
                  <div className="result-icon">⚡</div>
                  <h3>Скорость разработки</h3>
                  <p>Разработка за 2 рабочих дня с минимальными затратами на тестирование</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">🤖</div>
                  <h3>AI-анализ</h3>
                  <p>Автоматическое выявление трендов, аномалий и сезонности в данных</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">📋</div>
                  <h3>Готовые отчёты</h3>
                  <p>Экспорт полного анализа в PDF для презентаций и архива</p>
                </div>
                <div className="result-item">
                  <div className="result-icon">🎯</div>
                  <h3>Бизнес-ориентированность</h3>
                  <p>Готовая основа для SaaS-решения в нише бизнес-аналитики</p>
                </div>
              </div>
            </div>

            <div className="project-page-section">
              <h2>Особенности реализации</h2>
              <div className="implementation-details">
                <div className="detail-item">
                  <h3>🛠️ Вайб-кодинг с Cursor AI</h3>
                  <p>Проект реализован с использованием подхода вайб-кодинга и инструмента Cursor AI на базе передовых LLM. Это позволило ускорить цикл разработки и повысить качество кода.</p>
                </div>
                <div className="detail-item">
                  <h3>🔧 Модульная архитектура</h3>
                  <p>Код остался модульным и легко расширяемым. Отдельные модули для работы с YandexGPT и GigaChat, обработки PDF и генерации отчётов.</p>
                </div>
                <div className="detail-item">
                  <h3>🚀 Готовность к развёртыванию</h3>
                  <p>Проект готов для развёртывания на Render.com с автоматическим деплоем при push в GitHub. Включены все необходимые конфигурационные файлы.</p>
                </div>
              </div>
            </div>

            <div className="project-page-actions">
              <a href="https://github.com/galina-gcas/project3-analytics" target="_blank" rel="noopener noreferrer" className="btn">
                Посмотреть код на GitHub →
              </a>
              <a href="/portfolio/#contact" className="btn btn-secondary">
                Обсудить проект →
              </a>
              <a href="/portfolio/#projects" className="btn btn-outline">
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
