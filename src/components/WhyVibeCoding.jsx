import React from 'react';
import { motion } from 'framer-motion';

const WhyVibeCoding = () => {
  const features = [
    {
      title: 'Быстрое тестирование гипотез',
      description: 'От идеи до рабочего прототипа — за несколько часов. Проверяйте бизнес-идеи без долгой разработки и высоких затрат.',
      icon: '⚡',
      color: 'var(--coral)'
    },
    {
      title: 'Гибкость и адаптивность',
      description: 'Код генерируется под вашу задачу. Архитектура легко масштабируема и изменяема без переписывания с нуля.',
      icon: '🔄',
      color: 'var(--electric-blue)'
    },
    {
      title: 'Конфигурация под задачу',
      description: 'Решения подстраиваются под ваши бизнес-процессы, нишу и целевую аудиторию — быстро и точно.',
      icon: '🎯',
      color: 'var(--primary-purple)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="why" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Почему вайб-кодинг?
          </motion.h2>
          
          <div className="features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={cardVariants}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-accent" style={{ background: feature.color }}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVibeCoding;