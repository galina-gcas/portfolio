import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsServiceCasePage = () => {
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

  const highlights = [
    'Автоматическое извлечение первой таблицы из PDF файла с сохранением структуры данных;',
    'Отображение первых 100 строк данных в адаптивной, легко читаемой таблице;',
    'Автоматическое определение типов данных (числовые, дата, категориальные и текстовые) для умной визуализации;',
    'Построение 1–2 релевантных диаграмм: столбчатые (для категорий с числовыми значениями) и линейные (при наличии временных рядов);',
    'Секция «Анализ от нейросети»: первые 15 строк таблицы отправляются в YandexGPT или GigaChat;',
    'Генерация текстового отчёта с выявлением трендов, аномалий, сезонности или структурных особенностей данных;',
    'Функция экспорта полного отчёта (таблица + анализ от нейросетей) в PDF — готовый документ для презентации или архива.'
  ];

  const businessApplications = [
    {
      category: 'Финансовая аналитика',
      examples: ['Анализ расходов', 'Отчёты по продажам', 'Бюджетирование'],
      description: 'Быстрый анализ финансовых данных с выявлением трендов и аномалий'
    },
    {
      category: 'Маркетинговая аналитика',
      examples: ['Анализ рекламных кампаний', 'Конверсионная воронка', 'ROI по каналам'],
      description: 'Автоматическое выявление эффективных каналов и перерасхода бюджета'
    },
    {
      category: 'Операционная аналитика',
      examples: ['Анализ производительности', 'Логи операций', 'KPI дашборды'],
      description: 'Мониторинг ключевых показателей с AI-инсайтами'
    }
  ];

  const screenshots = [
    {
      title: 'Загрузка и просмотр данных',
      description: 'Интерфейс для загрузки файлов и красивая таблица с первыми 100 строками',
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
    }
  ];

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
            <a href="/portfolio/">Главная</a> / <a href="/portfolio/#case-studies">Учебные кейсы</a> / Веб-сервис аналитики данных
          </motion.div>

          {/* Header Section */}
          <motion.div className="case-page-header" variants={itemVariants}>
            <span className="case-page-icon">📊</span>
            <h1>Веб-сервис аналитики с помощью LLM</h1>
            <p className="case-page-subtitle">Как AI превращает сырые данные в бизнес-инсайты за минуты</p>
            <div className="case-page-meta">
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div className="case-page-content" variants={itemVariants}>
            <div className="case-page-section">
              <h2>Цель проекта</h2>
              <p>Создать инструмент для предпринимателей и владельцев малого бизнеса, который позволяет быстро анализировать финансовые, операционные или маркетинговые данные из Excel и PDF без необходимости в технических навыках. Основная задача — превратить «сырые» таблицы в понятную визуализацию и содержательные выводы за минуты, а не часы ручной обработки.</p>
            </div>

            <div className="case-page-section">
              <h2>Что было реализовано</h2>
              <p>Разработано веб-приложение с использованием подхода вайб-кодинга и инструмента Cursor AI на базе передовых LLM. Проект реализован как часть мини-курса «Вайб-кодинг и автономные агенты», но ориентирован на практическое применение в бизнесе.</p>
              
              <p>Сервис поддерживает загрузку файлов в форматах XLSX, XLS и PDF. После загрузки:</p>
              <ul>
                {highlights.map((highlight, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
                ))}
              </ul>

            </div>

            <div className="case-page-section">
              <h2>Применение в бизнесе</h2>
              <div className="business-applications">
                {businessApplications.map((app, index) => (
                  <div key={index} className="business-application">
                    <h3>{app.category}</h3>
                    <p className="business-description">{app.description}</p>
                    <div className="business-examples">
                      <strong>Примеры:</strong> {app.examples.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-page-section">
              <h2>Технические особенности</h2>
              <div className="tech-features">
                <div className="tech-feature">
                  <h3>🛠️ Вайб-кодинг подход</h3>
                  <p>Использование Cursor AI с передовыми LLM-моделями позволило ускорить разработку в разы по сравнению с традиционным подходом.</p>
                </div>
                <div className="tech-feature">
                  <h3>🔧 Модульная архитектура</h3>
                  <p>Отдельные модули для работы с YandexGPT и GigaChat, обработки PDF, генерации отчётов. Это обеспечивает лёгкость расширения и поддержки.</p>
                </div>
                <div className="tech-feature">
                  <h3>🚀 Готовность к масштабированию</h3>
                  <p>Проект развернут на Render с автоматическим деплоем. Включены все необходимые конфигурационные файлы и инструкции по развёртыванию.</p>
                </div>
              </div>
            </div>

            <div className="case-page-section">
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

            <div className="case-page-section">
              <h2>Результат и эффект</h2>
              <p>Инструмент позволяет предпринимателю, например, загрузить выписку по расходам, отчёт по продажам или логи рекламы — и мгновенно получить не только график, но и текстовое объяснение: <em>"В феврале наблюдается пик расходов при снижении конверсии — возможно, перерасход бюджета на неэффективные каналы"</em>.</p>
              
              <p>Благодаря вайб-кодингу и генеративному ИИ (Cursor AI + LLM), приложение было разработано с минимальными затратами на тестирование и рефакторинг. Код остался модульным и легко расширяемым. Сегодня это готовая основа для SaaS-решения в нише бизнес-аналитики для малого бизнеса.</p>

              <div className="results-highlight">
                <div className="result-item">
                  <div className="result-icon">⚡</div>
                  <div className="result-content">
                    <h3>Скорость разработки</h3>
                    <p>Быстрая разработка с минимальными затратами на тестирование</p>
                  </div>
                </div>
                <div className="result-item">
                  <div className="result-icon">🤖</div>
                  <div className="result-content">
                    <h3>AI-анализ</h3>
                    <p>Автоматическое выявление трендов, аномалий и сезонности в данных</p>
                  </div>
                </div>
                <div className="result-item">
                  <div className="result-icon">📋</div>
                  <div className="result-content">
                    <h3>Готовые отчёты</h3>
                    <p>Экспорт полного анализа в PDF для презентаций и архива</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-page-actions">
              <a href="/portfolio/#contact" className="btn">
                Обсудить проект →
              </a>
              <a href="/portfolio/#case-studies" className="btn btn-outline">
                ← Назад к кейсам
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsServiceCasePage;
