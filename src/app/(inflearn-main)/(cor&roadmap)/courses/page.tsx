'use client';

import img from '@/asset/img-1.png';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { CardData, OrderStates } from '@/types/types';
import { useAtom } from 'jotai';
import { Heart, ListFilter, ShoppingCart, Star, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

const cardDatas: CardData[] = [
  {
    image: null,
    title: '인공지능 활용 추천 시스템',
    author: '인프런',
    to: '/ai-recomd-sys',
    price: 88000,
    description:
      '본 강의는 추천시스템의 기본개념부터 딥러닝 작용원리까지 다룹니다. 그리고 이제 truncate 적용',
    level: '중급이상',
    classes: ['Python', '머신러닝', '머신러닝'],
    reviewCount: 2,
    reviewScore: 4.5,
    students: 10,
    saleDate: 56,
    salePercent: 25,
    salePrice: 66000,
    upload: new Date('2023-01-01T12:30:00Z'),
  },
  {
    image: null,
    title: '2주 만에 통과하는 알고리즘 코딩 테스트 (2024년)',
    author: '코딩 선생님',
    to: '/code-test',
    price: 33000,
    description:
      '단 2주만의 분량으로 알고리즘 테스트 성공 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
    level: '초급',
    classes: ['Python', '코딩테스트', '알고리즘'],
    reviewCount: 59,
    reviewScore: 4.9,
    students: 1900,
    upload: new Date('2025-01-20T12:30:00Z'),
  },
  {
    image: null,
    title: 'test title',
    author: 'test author',
    to: '/test',
    price: 3300000000,
    description:
      'test test test testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest test',
    level: '초급',
    classes: ['Python', '코딩테스트', '알고리즘', 'AI', 'Anaconda'],
    reviewCount: 12329,
    reviewScore: 4.8,
    students: 19000,
    saleDate: 6,
    salePercent: 50,
    salePrice: 1650000000,
    upload: new Date('2025-01-10T12:30:00Z'),
  },
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

  const formatWithComma = (price: number) => {
    return price.toLocaleString('en-US');
  };

  const formatDate = (hour: number) => {
    return hour > 12 ? (
      <span>{Math.floor(hour / 12)}일만</span>
    ) : (
      <span>{hour}시간만</span>
    );
  };

  const isUpload = (dateString: Date): boolean => {
    const inputDate = new Date(dateString);
    const currentDate = new Date();

    const twoWeeksInMilliseconds = 14 * 24 * 60 * 60 * 1000;
    const timeDifference = Math.abs(
      currentDate.getTime() - inputDate.getTime()
    );

    return timeDifference <= twoWeeksInMilliseconds;
  };

  return (
    <>
      <section className="flex flex-col pb-4 pt-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:space-x-4 justify-between">
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
        <div className="flex flex-wrap gap-2">
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
      <section className="flex flex-wrap gap-6 spacey">
        {cardDatas.map((item, index) => (
          <Card
            className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 h-[370px] group border-none shadow-none"
            key={index}
          >
            <Link href={item.to}>
              <CardHeader className="w-full p-0">
                <CardTitle>
                  <Image
                    src={item.image ?? img}
                    alt=""
                    className="aspect-video rounded-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                  />
                </CardTitle>
                <span className="text-sm font-semibold min-h-11">
                  {item.title}
                </span>
              </CardHeader>
              <CardContent className="flex flex-col items-start justify-start max-h-48 p-0 space-y-1 relative">
                <span>{item.author}</span>
                <div className="absolute top-full opacity-100 group-hover:opacity-0 duration-500 flex flex-col items-start justify-start">
                  {item.saleDate ? (
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <span className="text-red-500 font-bold">
                          {formatDate(item.saleDate)} {item.salePercent}%
                        </span>
                        <span className="flex items-center">
                          ₩{formatWithComma(item.salePrice!)}
                        </span>
                      </div>
                      <span className="flex items-center line-through opacity-50">
                        ₩{formatWithComma(item.price)}
                      </span>
                    </div>
                  ) : (
                    <span className="flex items-center">
                      ₩{formatWithComma(item.price)}
                    </span>
                  )}
                  {item.reviewScore && (
                    <div className="flex items-center space-x-1 py-1">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold opacity-70">
                        {item.reviewScore}
                      </span>
                      <span className="text-sm">({item.reviewCount})</span>
                      <div className="flex items-center opacity-70">
                        <User className="size-4 fill-black" />
                        <span className="text-sm">
                          {formatWithComma(item.students!)}+
                        </span>
                      </div>
                    </div>
                  )}
                  {isUpload(item.upload) ? (
                    <span className="bg-green-600 rounded-sm px-[5px] py-[3px] text-xs font-extrabold text-white">
                      update
                    </span>
                  ) : null}
                </div>
                <div className="absolute top-full opacity-0 group-hover:opacity-100 duration-500 flex flex-col items-start justify-start space-y-1">
                  <span className="line-clamp-2 text-sm opacity-30 font-semibold">
                    {item.description}
                  </span>
                  <div className="flex w-full">
                    <div className="basis-1/2 flex flex-col">
                      <span className="text-sm font-semibold opacity-80">
                        {item.level}
                      </span>
                      <div className="line-clamp-2">
                        {item.classes.map((item, index) => (
                          <span
                            key={index}
                            className="text-xs font-semibold opacity-80"
                          >
                            {item},
                          </span>
                        ))}
                      </div>
                    </div>
                    <ShoppingCart className="flex-grow size-5 text-green-600" />
                    <Heart className="size-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 max-h-[371px] group shadow-none border-none">
          <Link href={'/courses'}>
            <CardHeader className="w-full p-0">
              <CardTitle>
                <Image
                  src={img}
                  alt=""
                  className="aspect-video rounded-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                />
              </CardTitle>
              <span className="text-sm font-semibold min-h-11">
                인공지능 활용 추천 시스템222
              </span>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-start overflow-hidden max-h-36 p-0">
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="flex-grow basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
