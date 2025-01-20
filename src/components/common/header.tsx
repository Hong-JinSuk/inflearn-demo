import useModal from '@/hooks/use-modal';
import { cn } from '@/lib/utils';
import {
  HeaderMenuChildren,
  HeaderMenuType,
  HeaderStates,
} from '@/types/types';
import {
  BookOpenText,
  CodeSquare,
  Earth,
  Leaf,
  MenuSquare,
  MessageCircleMore,
  MessageCircleQuestion,
  Star,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type HeaderProps = {
  onStateClick: (label: HeaderStates) => void;
};

type HeaderMenusProps = {
  className?: string;
  menus: HeaderMenuChildren[];
};

const headerMenus: HeaderMenuType[] = [
  {
    label: 'courses',
    value: '강의',
    to: '/courses',
    children: [
      {
        label: 'programming',
        value: '개발 & 프로그래밍',
        children: [
          {
            label: 'web-programming',
            value: '웹 개발',
            children: [
              {
                label: 'javascript',
                value: '자바스크립트',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
            ],
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
        ],
      },
      {
        label: 'game',
        value: '게임 개발',
        children: [
          {
            label: 'game-progarmming',
            value: '게임 프로그래밍',
            children: [
              {
                label: 'unity',
                value: '유니티',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
            ],
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
        ],
      },
      {
        label: 'courses',
        value: '강의',
        children: [
          {
            label: 'web-programming',
            value: '웹 개발',
            children: [
              {
                label: 'javascript',
                value: '자바스크립트',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
            ],
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
        ],
      },
      {
        label: 'courses',
        value: '강의',
        children: [
          {
            label: 'web-programming',
            value: '웹 개발',
            children: [
              {
                label: 'javascript',
                value: '자바스크립트',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
            ],
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
        ],
      },
      {
        label: 'courses',
        value: '강의',
        children: [
          {
            label: 'web-programming',
            value: '웹 개발',
            children: [
              {
                label: 'javascript',
                value: '자바스크립트',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
            ],
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
        ],
      },
      {
        label: 'courses',
        value: '강의',
        children: [
          {
            label: 'web-programming',
            value: '웹 개발',
            children: [
              {
                label: 'javascript',
                value: '자바스크립트',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
              {
                label: 'courses',
                value: '강의',
              },
            ],
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
          {
            label: 'courses',
            value: '강의',
          },
        ],
      },
    ],
  },
  {
    label: 'roadmap',
    value: '로드맵',
    to: '/roadmaps',
  },
  {
    label: 'mentoring',
    value: '멘토링',
    to: '/mentoring',
  },
  {
    label: 'community',
    value: '커뮤니티',
    to: '/community',
    children: [
      {
        label: 'question',
        value: '질문 & 답변',
        icon: MessageCircleQuestion,
      },
      {
        label: 'gomin',
        value: '고민있어요',
        icon: MessageCircleMore,
      },
      {
        label: 'study',
        value: '스터디',
        icon: BookOpenText,
      },
      {
        label: 'team-project',
        value: '팀 프로젝트',
        icon: CodeSquare,
      },
      {
        label: 'running-score',
        value: '수강평',
        icon: Star,
      },
      {
        label: 'mentoring-as',
        value: '멘토링 후기',
        icon: Zap,
      },
    ],
  },
];

export default function Header({ onStateClick }: HeaderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { openLoginModal, openLanguageModal } = useModal();

  return (
    <div className="w-full h-full flex items-center justify-between max-w-[1440px] min-w-[500px] mx-auto px-8">
      <section className="lg:hidden">
        <MenuSquare />
      </section>
      <section className="flex items-center space-x-2 mr-2">
        <div className="flex items-center">
          <Link href={'/'} className="flex items-center">
            <Leaf className="text-green-500" />
            <span className="text-2xl text-green-500">Inflearn</span>
          </Link>
        </div>
        {headerMenus.map((menu, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Link href={menu.to} className="hidden lg:block">
              <div
                className="font-semibold hover:text-green-500"
                onClick={() => onStateClick(menu.label as HeaderStates)}
              >
                {menu.value}
              </div>
            </Link>
            <div className="flex">
              {activeIndex === index && menu.children && (
                <HeaderMenu
                  menus={menu.children}
                  className="absolute top-full bg-white rounded-md shadow-md z-50"
                />
              )}
            </div>
          </div>
        ))}
      </section>
      <section className="flex lg:flex-grow items-center justify-end space-x-2">
        <Input
          className="hidden lg:block"
          placeholder="나의 진짜 성장을 도와줄 실무 강의를 찾아보세요!"
        />
        <div
          className="flex items-center p-1 rounded-sm cursor-pointer hover:bg-accent space-x-1 opacity-70"
          onClick={openLanguageModal}
        >
          <Earth className="size-5" />
          <span className="font-semibold whitespace-nowrap text-sm hidden lg:block">
            한국어
          </span>
        </div>
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={openLoginModal}
        >
          <span className="font-semibold">로그인</span>
        </Button>
      </section>
    </div>
  );
}

const HeaderMenu = ({ className, menus }: HeaderMenusProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <ul className={cn('w-48 h-96 flex flex-col border', className)}>
      {menus.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer hover:font-bold text-sm p-3 py-2"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="flex items-center space-x-1">
            {item.icon && <item.icon className="size-5" />}
            <span className="text-xs">{item.value}</span>
          </div>
          {activeIndex === index && item.children && (
            <HeaderMenu
              className="absolute top-0 ml-[178px] shadow-md rounded-md bg-white"
              menus={item.children || []}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
