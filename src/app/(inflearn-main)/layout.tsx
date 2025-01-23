'use client';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import TopBar from '@/components/common/top-bar';
import { ScrollArea } from '@/components/ui/scroll-area';
import useScrollareaDirection from '@/hooks/use-scrollarea-direction';
import { HeaderStates, SubHeaderStates, TopBarStates } from '@/types/types';
import { useRef, useState } from 'react';
import CorSubHeader from './(cor&roadmap)/courses/components/cor-sub-header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [topBarState, setTopBarState] = useState<TopBarStates>('education');
  const [headerState, setHeaderState] = useState<HeaderStates>('courses');
  const [subHeaderState, setSubHeaderState] = useState<SubHeaderStates>('_all');
  const [hoverHeaderState, setHoverHeaderState] =
    useState<SubHeaderStates | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { scrollDirection, lastScrollTop } = useScrollareaDirection({
    scrollAreaRef,
    delay: 30,
  });

  const onHeaderStateClick = (label: HeaderStates) => {
    setHeaderState(label);
  };

  return (
    <ScrollArea className="flex flex-col w-full h-full" ref={scrollAreaRef}>
      <div className="flex flex-col">
        <div className="w-full h-10 border-b">
          <TopBar state={topBarState} />
        </div>
        <div
          className={`sticky top-0 left-0 w-full h-16 z-30 transition-transform duration-300 bg-white
              ${
                headerState === 'courses' && lastScrollTop > 40
                  ? `${
                      scrollDirection === 'down'
                        ? '-translate-y-16'
                        : 'translate-y-0'
                    }`
                  : ''
              } ${subHeaderState === '_all' ? '' : 'mb-[54px]'}`}
        >
          <Header onStateClick={onHeaderStateClick} />
          {headerState === 'courses' && (
            <CorSubHeader
              setHeaderState={setSubHeaderState}
              subHeaderState={subHeaderState}
              setHoverHeaderState={setHoverHeaderState}
              hoverHeaderState={hoverHeaderState}
            />
          )}
        </div>
        <main
          className={`${
            headerState === 'courses' ? 'mt-20' : ''
          } flex-grow h-full w-full max-w-[1440px] min-w-[500px] px-8 mx-auto`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </ScrollArea>
  );
}
