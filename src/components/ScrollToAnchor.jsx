import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Работаем только на главной странице
    if (pathname === '/' && hash) {
      // Небольшая задержка для того, чтобы страница успела загрузиться
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80; // Высота хедера
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToAnchor;
