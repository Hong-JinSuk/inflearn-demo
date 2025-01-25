'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useWindowResize from '@/hooks/use-window-resize';
import { SubHeaderMenusData, SubHeaderStates } from '@/types/types';
import {
  Atom,
  BookOpen,
  BookUser,
  Brain,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Gamepad2,
  Laptop,
  Layers,
  Paintbrush,
  PersonStanding,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const subHeaderMenus: SubHeaderMenusData[] = [
  { label: '_all', value: '전체', icon: Layers },
  {
    label: 'programming',
    value: '개발·프로그래밍',
    icon: Laptop,
    children: [{ label: 'programming-all', value: '전체', to: '#' }],
  },
  {
    label: 'game',
    value: '게임 개발',
    icon: Gamepad2,
    children: [
      { label: 'game-all', value: '전체', to: '#' },
      { label: 'game-programming', value: '게임 프로그래밍', to: '#' },
      { label: 'game-project', value: '게임 기획', to: '#' },
      { label: 'game-artgrp', value: '게임 아트·그래픽', to: '#' },
      { label: 'game-andsoon', value: '개임 개발 기타', to: '#' },
    ],
  },
  {
    label: 'data-science',
    value: '데이터 사이언스',
    icon: Atom,
    children: [{ label: 'data-all', value: '전체', to: '#' }],
  },
  {
    label: 'artificial-intelligence',
    value: '인공지능',
    icon: Brain,
    children: [{ label: 'ai-all', value: '전체', to: '#' }],
  },
  {
    label: 'security-network',
    value: '보안·네트워크',
    icon: ShieldCheck,
    children: [{ label: 'senet-all', value: '전체', to: '#' }],
  },
  {
    label: 'hardware',
    value: '하드웨어',
    icon: Cpu,
    children: [{ label: 'hardware-all', value: '전체', to: '#' }],
  },
  {
    label: 'design-art',
    value: '디자인·아트',
    icon: Paintbrush,
    children: [{ label: 'design-all', value: '전체', to: '#' }],
  },
  {
    label: 'marketting',
    value: '기획·경영·마케팅',
    icon: BriefcaseBusiness,
    children: [{ label: 'marketting-all', value: '전체', to: '#' }],
  },
  {
    label: 'productivity',
    value: '업무 생산성',
    icon: BookOpen,
    children: [{ label: 'product-all', value: '전체', to: '#' }],
  },
  {
    label: 'carrer',
    value: '커리어·자기계발',
    icon: PersonStanding,
    children: [{ label: 'carrer-all', value: '전체', to: '#' }],
  },
  {
    label: 'university-education',
    value: '대학 교육육',
    icon: BookUser,
    children: [{ label: 'edu-all', value: '전체', to: '#' }],
  },
];

type CorSubHeaderProps = {
  subHeaderState: SubHeaderStates;
  setHeaderState: (state: SubHeaderStates) => void;
  hoverHeaderState: SubHeaderStates | null;
  setHoverHeaderState: (state: SubHeaderStates | null) => void;
};

export default function CorSubHeader({
  subHeaderState,
  setHeaderState,
  hoverHeaderState,
  setHoverHeaderState,
}: CorSubHeaderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [chevronDir, setChevronDir] = useState<'left' | 'right'>('right');
  const { width } = useWindowResize();

  useEffect(() => {
    const handleScrollEvent = () => {
      if (scrollRef.current) {
        const currentScroll = scrollRef.current.scrollLeft;
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        const tolerance = 1; // mac과 window에서의 허용오차
        if (currentScroll <= 0) {
          setChevronDir('right');
        } else if (Math.abs(currentScroll - maxScroll) <= tolerance) {
          setChevronDir('left');
        }
      }
    };

    scrollRef.current?.addEventListener('scroll', handleScrollEvent);

    return () => {
      scrollRef.current?.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 1000; // 스크롤 거리
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleHeaderState = (state: SubHeaderStates) => {
    setHeaderState(state);
  };

  return (
    <>
      <div className="flex items-center h-20 w-full max-w-[1440px] min-w-[500px] mx-auto px-4 relative bg-white">
        {width < 1290 && (
          <ChevronLeft
            onClick={() => {
              handleScroll('left');
            }}
            className={`${
              chevronDir === 'right' ? 'hidden' : ''
            } absolute left-8 z-10 cursor-pointer bg-white border size-8 rounded-full p-1`}
            strokeWidth={1}
          />
        )}
        <div
          className="flex items-center w-[97vw] px-4 overflow-x-auto scroll-container"
          ref={scrollRef}
          style={{
            maskImage:
              width < 1290
                ? chevronDir === 'left'
                  ? 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0))'
                  : 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))'
                : undefined,
            WebkitMaskImage:
              width < 1290
                ? chevronDir === 'left'
                  ? 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0))'
                  : 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))'
                : undefined,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <Search strokeWidth={2} />
            <span className="text-xs font-medium">검색</span>
          </div>
          <Separator orientation="vertical" className="h-8 mx-6" />
          <div className="flex items-center space-x-8">
            {subHeaderMenus.map((item, index) => (
              <div
                className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
                key={index}
                onClick={() => handleHeaderState(item.label)}
                onMouseEnter={() => setHoverHeaderState(item.label)}
                onMouseLeave={() => setHoverHeaderState(null)}
              >
                <item.icon
                  strokeWidth={`${
                    (subHeaderState === item.label ||
                      hoverHeaderState === item.label) &&
                    2.2
                  }`}
                />
                <span
                  className={`${
                    (subHeaderState === item.label ||
                      hoverHeaderState === item.label) &&
                    'text-green-600'
                  } text-xs font-medium whitespace-nowrap`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        {width < 1290 && (
          <ChevronRight
            onClick={() => {
              handleScroll('right');
            }}
            className={`${
              chevronDir === 'left' ? 'hidden' : ''
            } absolute right-8 z-10 cursor-pointer bg-white border size-8 rounded-full p-1`}
            strokeWidth={1}
          />
        )}
      </div>
      {(hoverHeaderState || subHeaderState !== '_all') && (
        <div className="w-full h-[54px] bg-slate-200">
          <div className="flex items-center justify-start max-w-[1440px] min-w-[500px] mx-auto px-8 w-full h-full space-x-3">
            {hoverHeaderState !== '_all' && hoverHeaderState !== null
              ? subHeaderMenus
                  .find((menu) => menu.label === hoverHeaderState)
                  ?.children?.map((child, index) => (
                    <Button
                      key={index}
                      className="rounded-full"
                      variant={'outline'}
                      size={'sm'}
                    >
                      {child.value}
                    </Button>
                  ))
              : subHeaderMenus
                  .find((menu) => menu.label === subHeaderState)
                  ?.children?.map((child, index) => (
                    <Button
                      key={index}
                      className="rounded-full"
                      variant={'outline'}
                      size={'sm'}
                    >
                      {child.value}
                    </Button>
                  ))}
          </div>
        </div>
      )}
    </>
  );
}

// {subHeaderState
//   ? (() => {
//       const selectedMenu = subHeaderMenus.find(
//         (menu) => menu.label === subHeaderState
//       );

//       if (!selectedMenu) return null;

//       return selectedMenu.children ? (
//         <div className="w-full h-[54px] bg-slate-200">
//           <div className="flex items-center justify-start max-w-[1440px] min-w-[500px] mx-auto px-8 w-full h-full space-x-3">
//             {selectedMenu.children.map((child, index) => (
//               <Button
//                 key={index}
//                 className="rounded-full"
//                 variant={'outline'}
//                 size={'sm'}
//               >
//                 {child.value}
//               </Button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         ''
//       );
//     })()
//   : ''}
