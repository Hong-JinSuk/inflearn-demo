'use client';

import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

type Props = {
  scrollAreaRef: any;
  delay?: number;
};

export default function useScrollareaDirection({
  scrollAreaRef,
  delay = 30,
}: Props) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    // 내부 스크롤 컨테이너 참조
    const scrollContainer = scrollAreaRef.current.querySelector(
      '[data-radix-scroll-area-viewport]'
    ) as HTMLElement | null;

    if (!scrollContainer) {
      return;
    }

    const handleScroll = debounce(() => {
      const currentScrollTop = scrollContainer.scrollTop;

      // 스크롤 방향 설정
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection('up');
      }

      setLastScrollTop(currentScrollTop);
    }, delay);

    // 스크롤 이벤트 리스너 추가
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return { scrollDirection, lastScrollTop };
}
