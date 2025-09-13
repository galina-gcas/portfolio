import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    // Redirect to home page for SPA routing
    const pathSegmentsToKeep = 1;
    const l = window.location;
    
    // Only redirect if we're not already on the home page
    if (l.pathname !== '/portfolio/' && l.pathname !== '/portfolio') {
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    }
  }, []);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      className="not-found-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--slate-50) 0%, var(--electric-blue-50) 100%)',
        padding: '2rem'
      }}
    >
      <motion.div
        className="not-found-content"
        variants={itemVariants}
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          padding: '3rem',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
        }}
      >
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: '6rem',
            fontWeight: '800',
            color: 'var(--electric-blue)',
            margin: '0 0 1rem 0',
            lineHeight: '1'
          }}
        >
          404
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: 'var(--slate-800)',
            margin: '0 0 1rem 0'
          }}
        >
          Страница не найдена
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1.1rem',
            color: 'var(--slate-600)',
            margin: '0 0 2rem 0',
            lineHeight: '1.6'
          }}
        >
          Похоже, вы попали на страницу, которой не существует. 
          Давайте вернемся на главную страницу портфолио.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'var(--electric-blue)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
            }}
          >
            Вернуться на главную
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
