'use client';

import useScrollDirection from '@/hooks/use-scroll-direction';
import { headerSection } from '@/types/types';
import { Car, Leaf } from 'lucide-react';
import { Separator } from '../ui/separator';

const topHeaderSection: headerSection[][] = [
  [
    {
      label: 'education',
      value: '교육',
      icon: Leaf,
    },
    {
      label: 'career',
      value: '커리어',
      icon: Car,
    },
  ],
  [
    {
      label: 'our-story',
      value: 'Our story',
      icon: null,
    },
    { label: 'company-service', value: '기업 서비스', icon: null },
    { label: 'join-us', value: '지식공유 참여', icon: null },
  ],
];

type headerProps = {
  state: string;
};

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <header className="flex items-center justify-center w-full h-10 bg-slate-100 z-30">
        <section className="w-full h-full flex items-center justify-between max-w-[1440px] bg-slate-300">
          {topHeaderSection.map((sides, sidesIndex) => (
            <ul key={sidesIndex} className="flex items-center space-x-2">
              {sides.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center space-x-2">
                  {item.icon && (
                    <item.icon className="text-green-500 size-5" /> // 스타일 전달
                  )}
                  <span className="text-sm">{item.value}</span>
                  {itemIndex < topHeaderSection[sidesIndex].length - 1 && (
                    <Separator orientation="vertical" className="h-3" />
                  )}
                </li>
              ))}
            </ul>
          ))}
        </section>
        <section></section>
      </header>
    </>
  );
}
