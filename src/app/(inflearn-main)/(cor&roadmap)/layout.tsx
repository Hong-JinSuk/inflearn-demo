'use client';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import TopBar from '@/components/common/top-bar';
import { ScrollArea } from '@/components/ui/scroll-area';
import useScrollareaDirection from '@/hooks/use-scrollarea-direction';
import { TopBarStates } from '@/types/types';
import { useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [state, setState] = useState<TopBarStates>('education');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { scrollDirection, lastScrollTop } = useScrollareaDirection({
    scrollAreaRef,
    delay: 10,
  });

  const onStateClick = (label: string) => {};

  return (
    <>
      <ScrollArea className="flex flex-col w-full h-full" ref={scrollAreaRef}>
        <div className="flex flex-col max-w-[1400px] min-w-[500px] px-8 mx-auto">
          <div className="w-full h-10 bg-slate-400">
            <TopBar state={state} />
          </div>
          <div
            className={`sticky top-0 left-0 w-full h-16 z-30 transition-transform duration-300
              ${
                state === 'education' && lastScrollTop > 40
                  ? `${
                      scrollDirection === 'down'
                        ? '-translate-y-16'
                        : 'translate-y-0'
                    }`
                  : ''
              }`}
          >
            <Header onStateClick={onStateClick} />
            <div className="sticky top-0 h-20 bg-red-400"></div>
          </div>
          <main className="flex-grow bg-blue-200 h-full">{children}</main>
        </div>
        <Footer />
      </ScrollArea>
    </>
  );
}
