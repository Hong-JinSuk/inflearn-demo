'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import useModal from '@/hooks/use-modal';
import { selectedSkillsAtom } from '@/store/atom';
import { OrderStates } from '@/types/types';
import { useAtom } from 'jotai';
import { ListFilter, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const levelOptions = [
  { label: 'introduction', value: '입문' },
  { label: 'begin', value: '초급' },
  { label: 'middle', value: '중급이상' },
];

const priceOptions = [
  { label: 'discount', value: '할인 중' },
  { label: 'free', value: '무료' },
  { label: 'pro', value: '유료' },
];

const orderOptions = [
  { label: 'recommend', value: '추천순' },
  { label: 'popularity', value: '인기순' },
  { label: 'latest', value: '최신순' },
  { label: 'rating', value: '평점순' },
  { label: 'like', value: '좋아요순' },
];

export default function Page() {
  const { openSkillsModal } = useModal();
  const [selectedSkills, setSelectedSkills] = useAtom(selectedSkillsAtom);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [orderType, setOrderType] = useState<OrderStates>('recommend');
  const [includeBoot, setIncludeBoot] = useState(false);

  useEffect(() => {
    console.log(selectedLevels);
  }, [selectedLevels]);

  const handleLevelChange = (value: string) => {
    setSelectedLevels((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (value: string) => {
    setSelectedPrices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handelSkillChange = (value: string) => {
    setSelectedSkills((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleOrderChange = (value: string) => {
    setOrderType(value as OrderStates);
  };

  const handleClickSwitch = () => {
    setIncludeBoot((prev) => !prev);
  };

  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col lg:flex-row lg: space-x-4 justify-between py-6">
          <div className="flex items-center justify-start space-x-2">
            <Button onClick={openSkillsModal} variant="outline">
              <ListFilter />
              <span>기술 검색</span>
            </Button>
            <Select>
              <SelectTrigger className="max-w-32">
                <div className="block max-w-[84px] truncate">
                  {selectedLevels.length > 0
                    ? selectedLevels.join(', ') // 선택된 항목 표시
                    : '난이도'}
                </div>
              </SelectTrigger>
              <SelectContent>
                {levelOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleLevelChange(option.value)}
                    className="flex items-center justify-start p-2 space-x-2 cursor-pointer hover:bg-gray-100 rounded-md"
                  >
                    {/* {selectedLevels.includes(option.value) && (
                  <Check className="h-4 w-4 " />
                )} */}
                    <input
                      type="checkbox"
                      checked={selectedLevels.includes(option.value)}
                      onChange={() => handleLevelChange(option.label)}
                      className="h-4 w-4 cursor-pointer"
                    />
                    <span>{option.value}</span>
                  </div>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="max-w-32">
                <div className="block max-w-[84px] truncate">
                  {selectedPrices.length > 0
                    ? selectedPrices.join(', ') // 선택된 항목 표시
                    : '가격'}
                </div>
              </SelectTrigger>
              <SelectContent>
                {priceOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handlePriceChange(option.value)}
                    className="flex items-center justify-start p-2 space-x-2 cursor-pointer hover:bg-gray-100 rounded-md"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(option.value)}
                      onChange={() => handlePriceChange(option.label)}
                      className="h-4 w-4 cursor-pointer"
                    />
                    <span>{option.value}</span>
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-grow items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm">모임/부트캠프</span>
              <Switch onClick={handleClickSwitch} checked={includeBoot} />
            </div>
            <Select onValueChange={handleOrderChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="추천순" />
              </SelectTrigger>
              <SelectContent>
                {orderOptions.map((item, index) => (
                  <SelectItem value={item.label} key={index}>
                    {item.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pb-4">
          {selectedPrices.map((item, index) => (
            <Button
              key={index}
              size="course"
              variant="course"
              onClick={() => handlePriceChange(item)}
            >
              {item}
              <X />
            </Button>
          ))}
          {selectedLevels.map((item, index) => (
            <Button
              key={index}
              size={'course'}
              variant={'course'}
              onClick={() => handleLevelChange(item)}
            >
              {item}
              <X />
            </Button>
          ))}
          {selectedSkills.map((item, index) => (
            <Button
              key={index}
              size={'course'}
              variant={'course'}
              onClick={() => handelSkillChange(item)}
            >
              {item}
              <X />
            </Button>
          ))}
        </div>
      </section>
      <section>
        <div className="h-52">courses1</div>
        <div className="h-52">courses2</div>
        <div className="h-52">courses3</div>
        <div className="h-52">courses</div>
        <div className="h-52">courses</div>
      </section>
    </>
  );
}
