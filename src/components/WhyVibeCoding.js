import React from 'react';
import { motion } from 'framer-motion';

const WhyVibeCoding = () => {
  const features = [
    {
      title: 'Быстрое тестирование гипотез',
      description: 'От идеи до рабочего прототипа — за несколько часов. Проверяйте бизнес-идеи без долгой разработки и высоких затрат.'
    },
    {
      title: 'Гибкость и адаптивность',
      description: 'Код генерируется под вашу задачу. Легко масштабируем и изменяем архитектуру без переписывания с нуля.'
    },
    {
      title: 'Конфигурация под задачу',
      description: 'Решения подстраиваются под ваши бизнес-процессы, нишу и целевую аудиторию — быстро и точно.'
    }
  ];

  return (
    <section id="why" className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Почему вайб-кодинг?
        </motion.h2>
        <div className="features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card fade-in-up"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVibeCoding;