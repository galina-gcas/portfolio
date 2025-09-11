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
  const certSrc = `${import.meta.env.BASE_URL}images/diploma-rn.png`;

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
                Планируя работу с российским сегментом бизнеса, я целенаправленно инвестировала в обучение
                российским инструментам и нейросетям на курсе Университета Zerocoder.
              </p>
              <div className="project-actions" style={{ marginTop: '1rem' }}>
                <button className="btn-small" onClick={() => setIsOpen(true)}>Посмотреть сертификат</button>
              </div>
            </motion.div>

            {/* Курс 2 — заглушка */}
            <motion.div className="course-card education-card" variants={itemVariants}>
              <div className="education-icon">⚡</div>
              <h3 className="course-title">Мини‑курс: вайб‑кодинг и автономные агенты</h3>
              <span className="status in-progress">В процессе</span>
              <p>
                В процессе обучения. Здесь появится краткое описание, выводы и примеры реализованных мини‑проектов.
              </p>
            </motion.div>

            {/* Курс 3 — заглушка */}
            <motion.div className="course-card education-card" variants={itemVariants}>
              <div className="education-icon">💡</div>
              <h3 className="course-title">Промпт‑инжиниринг для бизнеса</h3>
              <span className="status planned">Запланировано</span>
              <p>
                Запланированный курс: методики постановки задач LLM, структурирование контекста и дизайн цепочек.
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


