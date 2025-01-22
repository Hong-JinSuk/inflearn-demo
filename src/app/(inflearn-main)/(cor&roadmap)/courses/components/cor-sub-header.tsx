'use client';
import { Separator } from '@/components/ui/separator';
import { SubHeaderMenusData } from '@/types/types';
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
  { label: 'progarmming', value: '개발·프로그래밍', icon: Laptop },
  { label: 'game', value: '게임 개발', icon: Gamepad2 },
  { label: 'data-science', value: '데이터 사이언스', icon: Atom },
  { label: 'artificial-intelligence', value: '인공지능', icon: Brain },
  { label: 'security-network', value: '보안·네트워크', icon: ShieldCheck },
  { label: 'hardware', value: '하드웨어', icon: Cpu },
  { label: 'design-art', value: '디자인·아트', icon: Paintbrush },
  { label: 'marketting', value: '기획·경영·마케팅', icon: BriefcaseBusiness },
  { label: 'productivity', value: '업무 생산성', icon: BookOpen },
  { label: 'carrer', value: '커리어·자기계발', icon: PersonStanding },
  { label: 'university-education', value: '대학 교육육', icon: BookUser },
];
export default function CorSubHeader() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [chevronDir, setChevronDir] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const handleScrollEvent = () => {
      if (scrollRef.current) {
        const currentScroll = scrollRef.current.scrollLeft;
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        if (currentScroll <= 0) {
          setChevronDir('right');
        } else if (currentScroll >= maxScroll) {
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

  return (
    <div className="flex items-center h-20 w-full max-w-[1440px] min-w-[500px] mx-auto px-4 relative bg-white">
      <ChevronLeft
        onClick={() => {
          handleScroll('left');
        }}
        className={`${
          chevronDir === 'right' ? 'hidden' : ''
        } absolute left-8 z-10 cursor-pointer bg-white border size-8 rounded-full p-1`}
        strokeWidth={1}
      />
      <div
        className="flex items-center w-[97vw] px-4 overflow-x-auto scroll-container"
        // onMouseEnter={() => setIsHover(true)} // 마우스 오버 시 활성화
        // onMouseLeave={() => setIsHover(false)} // 마우스 나가면 비활성화
        ref={scrollRef}
        style={{
          maskImage:
            chevronDir === 'left'
              ? 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0))'
              : 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))',
          WebkitMaskImage:
            chevronDir === 'left'
              ? 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0))'
              : 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))',
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
              className="flex flex-col items-center justify-center space-y-2"
              key={index}
            >
              <item.icon className="shrink-0" />
              <span className="text-xs font-medium whitespace-nowrap">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ChevronRight
        onClick={() => {
          handleScroll('right');
        }}
        className={`${
          chevronDir === 'left' ? 'hidden' : ''
        } absolute right-8 z-10 cursor-pointer bg-white border size-8 rounded-full p-1`}
        strokeWidth={1}
      />
    </div>
  );
}

// 마우스 호버하고 스크롤시 움직이게 하는 기능
// const [isHover, setIsHover] = useState(false);
// useEffect(() => {
//   const handleWheel = (e: WheelEvent) => {
//     if (!scrollRef.current || !isHover) return;

//     e.preventDefault();
//     scrollRef.current.scrollLeft += e.deltaY;
//   };

//   const refElement = scrollRef.current;

//   if (refElement) {
//     refElement.addEventListener('wheel', handleWheel, { passive: false });
//   }

//   return () => {
//     if (refElement) {
//       refElement.removeEventListener('wheel', handleWheel);
//     }
//   };
// }, [isHover]);
