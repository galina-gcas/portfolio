import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Education = () => {
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

  const [isOpen, setIsOpen] = useState(false);
  const certSrc = 'images/diploma-rn.png';

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }}>
          <motion.h2 className="section-title" variants={itemVariants}>Дипломы и сертификаты</motion.h2>
          <motion.p className="education-note" variants={itemVariants}>
            Это мой личный трек обучения: что я прошла, прохожу сейчас и планирую дальше.
          </motion.p>

          <div className="education-grid">
            {/* Курс 1 с сертификатом */}
            <motion.div className="course-card education-card" variants={itemVariants}>
              <div className="education-icon">🎓</div>
              <h3 className="course-title">Российские нейросети без границ</h3>
              <span className="status completed">Пройдено</span>
              <p>
                Эффективная работа с российскими нейросетями < br/>и ИИ-инструментами, < br/> от генерации текста, создания презентаций до автоматизации рутинных задач.
              </p>
              <div className="project-actions" style={{ marginTop: '1rem' }}>
                <button className="btn-small" onClick={() => setIsOpen(true)}>Посмотреть сертификат</button>
              </div>
            </motion.div>

            {/* Курс 2 — заглушка */}
            <motion.div className="course-card education-card" variants={itemVariants}>
              <div className="education-icon">⚡</div>
              <h3 className="course-title">Мини‑курс: вайб‑кодинг < br />и автономные агенты</h3>
              <span className="status in-progress">В процессе</span>
              <p>
                Гибкая разработка широкого спектра решений < br />без традиционного программирования < br /> с помощью Cursor AI < br /> и API популярных нейросетей.
              </p>
            </motion.div>

            {/* Курс 3 — заглушка */}
            <motion.div className="course-card education-card" variants={itemVariants}>
              <div className="education-icon">💡</div>
              <h3 className="course-title">Промпт‑инжиниринг < br />для бизнес-процессов</h3>
              <span className="status in-progress">В процессе</span>
              <p>
                Автоматизация процессов < br />от разработки промптов < br />до интеграции LLM в бизнес-задачи. No-code инструменты < br />и Python для более тонкой настройки и интеграции.
              </p>
            </motion.div>
          </div>

          {/* Modal */}
          {isOpen && (
            <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" aria-label="Закрыть" onClick={() => setIsOpen(false)}>×</button>
                <img src={certSrc} alt="Сертификат — Нейросети без границ" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;


