'use client';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import TopBar from '@/components/common/top-bar';
import { ScrollArea } from '@/components/ui/scroll-area';
import useScrollareaDirection from '@/hooks/use-scrollarea-direction';
import { useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [state, setState] = useState('education');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { scrollDirection, lastScrollTop } = useScrollareaDirection({
    scrollAreaRef,
  });

  const onStateClick = (label: string) => {
    setState(label);
  };

  return (
    <>
      <ScrollArea
        className="flex flex-col w-full h-full max-w-[1400px] min-w-[500px] px-8 mx-auto"
        ref={scrollAreaRef}
      >
        <div className="flex flex-col">
          <div className="w-full h-10 bg-slate-400">
            <TopBar state={state} />
          </div>
          <div
            className={`sticky top-10 left-0 w-full h-16 bg-rose-50 z-30 transition-transform duration-300 max-w-[1400px] min-w-[500px] px-8 mx-auto ${
              scrollDirection === 'down'
                ? '-translate-y-[104px]'
                : lastScrollTop > 20
                ? 'top-10 -translate-y-10'
                : 'top-0 -translate-y-0'
            }`}
          >
            <Header />
          </div>
          <main className="flex-grow bg-blue-200 h-full">{children}</main>
        </div>
        <Footer />
      </ScrollArea>
    </>
  );
}
