import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Кто я?
        </motion.h2>
        <div className="about">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>Я — предприниматель и разработчик. Автоматизирую процессы и создаю решения для своего бизнеса, а также оказываю услуги другим предпринимателям и малому бизнесу.</p>
            <p>Моя экспертиза — в быстрой разработке MVP, интеграции ИИ и автоматизации рутинных задач с помощью современных инструментов, включая вайб-кодинг и автономные агенты.</p>
            <p>Открыта к обсуждению ваших проектов и сотрудничеству под различные задачи в широком спектре ниш — от финтеха до e-commerce и недвижимости.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Обучение</h3>
            <p>Планируя работу с российским сегментом бизнеса, я целенаправленно инвестировала в обучение российским нейросетям и инструментам на курсе Университета Zerocoder: <strong>«Нейросети без границ: с российскими инструментами»</strong>.</p>
            <p>Сертификат: <a href="#" target="_blank" rel="noopener noreferrer">Посмотреть сертификат</a></p>
            <p>Сейчас прохожу мини-курс по <strong>вайб-кодингу и автономным агентам</strong>. Некоторые учебные проекты уже реализованы и доступны ниже.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;