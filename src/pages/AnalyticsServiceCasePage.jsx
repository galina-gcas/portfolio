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
              <span className="status completed">Завершён</span>
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

              <div className="demo-section">
                <a href="https://project3-analytics.onrender.com/" target="_blank" rel="noopener noreferrer" className="demo-btn">
                  Попробовать сервис
                </a>
              </div>

            </div>

            <div className="case-page-section">
              <h2>Технологии</h2>
              <div className="technologies-grid">
                <div className="tech-category">
                  <h3>Backend</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Pandas</span>
                    <span className="tech-tag">openpyxl</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Визуализация</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Plotly</span>
                    <span className="tech-tag">Matplotlib</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>AI-интеграция</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">YandexGPT</span>
                    <span className="tech-tag">GigaChat</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="case-page-section">
              <h2>Результат разработки</h2>
              <p>Инструмент стал практическим решением для быстрого анализа бизнес-данных с AI-инсайтами.</p>
              <p>Реализация через вайб-кодинг с использованием Cursor AI позволила создать полнофункциональное приложение с минимальными затратами на тестирование и рефакторинг, сохранив высокое качество и читаемость кода.</p>
              <p>Проект продемонстрировал применимость LLM в создании бизнес-ориентированных решений — от идеи до рабочего прототипа за короткое время.</p>
              <p>Инструмент разработан в рамках курса «Вайб-кодинг и автономные агенты» и представляет готовую основу для SaaS-решения в нише бизнес-аналитики для малого бизнеса.</p>
            </div>

            <div className="case-page-section">
              <h2>Ключевые особенности</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Умная визуализация</h3>
                  <p>Автоматическое построение релевантных диаграмм на основе типов данных</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🤖</div>
                  <h3>AI-анализ</h3>
                  <p>Интеграция с YandexGPT и GigaChat для генерации экспертных заключений</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📋</div>
                  <h3>Готовые отчёты</h3>
                  <p>Экспорт полного анализа в PDF для презентаций и архива</p>
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
