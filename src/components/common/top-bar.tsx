'use client';

import { HeaderSection } from '@/types/types';
import { Car, Leaf } from 'lucide-react';
import React from 'react';
import { Separator } from '../ui/separator';

const topHeaderSection: HeaderSection[][] = [
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

export default function TopBar({ state = 'education' }: headerProps) {
  return (
    <div className="flex items-center justify-center w-full h-full z-30">
      <div className="w-full h-full flex items-center justify-between max-w-[1440px] min-w-[500px] mx-auto px-8 bg-white">
        {topHeaderSection.map((sides, sidesIndex) => (
          <ul key={sidesIndex} className="flex items-center space-x-2">
            {sides.map((item, itemIndex) => (
              <React.Fragment key={`fragment-${itemIndex}`}>
                <li
                  key={`item-${itemIndex}`}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  {item.icon && (
                    <item.icon
                      className={`${
                        state === item.label ? 'text-green-500' : ''
                      } size-5`}
                    />
                  )}
                  <span
                    className={`${
                      state === item.label ? 'font-semibold' : ''
                    } text-sm`}
                  >
                    {item.value}
                  </span>
                </li>
                {itemIndex < sides.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-3"
                    key={`separator-${itemIndex}`}
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
