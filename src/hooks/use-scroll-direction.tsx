'use client';

import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const useScrollDirection = (delay = 100) => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    }, delay);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Clean up debounce
    };
  }, [lastScrollY, delay]);

  return scrollDirection;
};

export default useScrollDirection;
