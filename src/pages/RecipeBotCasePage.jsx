import React from 'react';
import { motion } from 'framer-motion';
import { telegramBotMainMenu, telegramBotNewsSearch, telegramBotPostGeneration } from '../assets/images';

const RecipeBotCasePage = () => {
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
    'Поиск рецептов по названию, ингредиенту или категории (завтрак, вегетарианское)',
    'Визуально привлекательные карточки с изображением и кратким описанием',
    'Полные рецепты с ингредиентами, пошаговым приготовлением и ссылками на YouTube',
    'Функция "Избранное" с возможностью оценки рецептов от 1 до 5 звёзд',
    'Просмотр сохранённых рецептов в виде сетки или списка с сортировкой по рейтингу',
    'Интуитивный интерфейс без необходимости регистрации — всё в рамках Telegram'
  ];

  const businessApplications = [
    {
      category: 'Food-tech',
      examples: ['Доставка еды', 'Магазины продуктов', 'Ресторанные сети'],
      description: 'Персонализация меню и рекомендации блюд'
    },
    {
      category: 'Медиа и блоги',
      examples: ['Кулинарные блогеры', 'Медиа о здоровом питании', 'YouTube-каналы'],
      description: 'Монетизация контента и удержание подписчиков'
    },
    {
      category: 'Wellness',
      examples: ['Фитнес-приложения', 'Диетологические сервисы', 'Здоровое питание'],
      description: 'Рецепты питания, диеты и планы тренировок'
    }
  ];

  const screenshots = [
    {
      title: 'Поиск рецептов',
      description: 'Интуитивный поиск по названию, ингредиентам или категориям',
      image: telegramBotMainMenu
    },
    {
      title: 'Карточка рецепта',
      description: 'Привлекательное отображение с изображением и описанием',
      image: telegramBotNewsSearch
    },
    {
      title: 'Избранное с рейтингами',
      description: 'Персональная библиотека с системой оценок',
      image: telegramBotPostGeneration
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
            <a href="/">Главная</a> / <a href="/#case-studies">Учебные кейсы</a> / Telegram-бот для поиска рецептов
          </motion.div>

          {/* Header Section */}
          <motion.div className="case-page-header" variants={itemVariants}>
            <span className="case-page-icon">🍳</span>
            <h1>Telegram-бот для поиска рецептов</h1>
            <p className="case-page-subtitle">Как цифровой продукт создаёт вовлеченность и обеспечивает удержание</p>
            <div className="case-page-meta">
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div className="case-page-content" variants={itemVariants}>
            <div className="case-page-section">
              <h2>Цель проекта</h2>
              <p>Создать удобный, автономный инструмент для пользователей, который решает реальную повседневную задачу — быстрый поиск подходящего блюда и сохранение любимых рецептов. Цель — продемонстрировать, как даже простой бот может стать точкой регулярного взаимодействия с аудиторией, формируя привычку и лояльность.</p>
            </div>

            <div className="case-page-section">
              <h2>Что было реализовано</h2>
              <p>Разработан функциональный Telegram-бот, ориентированный на пользователей, которые ищут вдохновение в готовке. Бот позволяет:</p>
              
              <div className="demo-section">
                <a href="https://t.me/recipe_base2025_bot" target="_blank" rel="noopener noreferrer" className="demo-btn">
                  Попробовать бота
                </a>
              </div>
              
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p>Интерфейс интуитивный, работает без инструкций. Пользователь заходит — ищет — сохраняет — возвращается. Никаких сложных регистраций, всё происходит внутри мессенджера.</p>
            </div>

            <div className="case-page-section">
              <h2>Технологии</h2>
              <div className="technologies-grid">
                <div className="tech-category">
                  <h3>Backend</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Telegram API</span>
                    <span className="tech-tag">SQLite</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Парсинг данных</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">Beautiful Soup</span>
                    <span className="tech-tag">Requests</span>
                    <span className="tech-tag">JSON API</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3>Интеграции</h3>
                  <div className="tech-tags">
                    <span className="tech-tag">YouTube API</span>
                    <span className="tech-tag">Image Processing</span>
                    <span className="tech-tag">Telegram Bot API</span>
                  </div>
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
              <p>Функция избранного с рейтингом превращает сервис из поискового инструмента в <strong>личную библиотеку рецептов</strong>, что усиливает эмоциональную привязанность.</p>
              
              <h3>Возможности масштабирования:</h3>
              <p>Аналогичная логика применима для различных ниш:</p>
              
              <div className="business-applications">
                {businessApplications.map((app, index) => (
                  <div key={index} className="business-app">
                    <h4>{app.category}</h4>
                    <p className="app-description">{app.description}</p>
                    <div className="app-examples">
                      {app.examples.map((example, exIndex) => (
                        <span key={exIndex} className="example-tag">{example}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-page-section">
              <h2>Почему это важно для бизнеса?</h2>
              <p>Telegram — один из самых активных каналов коммуникации. Бот внутри него работает как <strong>персональный ассистент</strong>, который:</p>
              <ul>
                <li>экономит время пользователя,</li>
                <li>снижает зависимость от сторонних платформ (вроде маркетплейсов и сайтов),</li>
                <li>даёт бизнесу <strong>прямой, бесшумный канал связи</strong> с клиентом.</li>
              </ul>
              <p>Такой инструмент можно использовать не только для рецептов: та же модель подойдёт под подбора товаров, программ тренировок, финансовых советов, планов питания — любые ниши, где важны <strong>персонализация, повторное использование и контент в формате «по запросу»</strong>.</p>
            </div>

            <div className="case-page-section">
              <h2>Вывод</h2>
              <p>Это не просто бот. Это пример того, как небольшой digital-продукт может стать <strong>долгосрочной точкой контакта</strong> с клиентом — без push-уведомлений, рекламы и алгоритмов соцсетей. Для бизнеса — это шанс выстроить экосистему вокруг своей аудитории, где каждое взаимодействие увеличивает лояльность.</p>
              <p><strong>Готова реализовать аналогичное решение под вашу нишу</strong> — с учётом целевой аудитории, бизнес-целей и существующих активов.</p>
              
              <div className="demo-section">
                <a href="https://t.me/recipe_base2025_bot" target="_blank" rel="noopener noreferrer" className="demo-btn">
                  Попробовать бота
                </a>
              </div>
            </div>

            <div className="case-page-section">
              <h2>Ключевые особенности</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🔍</span>
                  <h3>Умный поиск</h3>
                  <p>Поиск по названию, ингредиентам и категориям с мгновенными результатами.</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⭐</span>
                  <h3>Система рейтингов</h3>
                  <p>Персональная библиотека с оценками и автоматической сортировкой.</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎥</span>
                  <h3>Мультимедиа</h3>
                  <p>Интеграция с YouTube для видео-инструкций и визуального контента.</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <h3>Telegram-экосистема</h3>
                  <p>Работает внутри популярного мессенджера без дополнительных установок.</p>
                </div>
              </div>
            </div>

            <div className="case-page-actions">
              <a href="/portfolio/#case-studies" className="btn-small btn-outline">
                ← Назад к кейсам
              </a>
              <a href="/portfolio/#contact" className="btn-small">
                Обсудить проект →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeBotCasePage;
