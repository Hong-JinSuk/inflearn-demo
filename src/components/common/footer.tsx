import useWindowResize from '@/hooks/use-window-resize';
import { FooterData } from '@/types/types';
import {
  Ellipsis,
  Facebook,
  FlipHorizontal,
  Home,
  Instagram,
  Leaf,
  List,
  QrCode,
  Twitter,
  UserCheck,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';

const footerData: FooterData[] = [
  {
    value: '인프런',
    children: [
      { value: '인프런 소개', to: '#' },
      { value: '인프런 피드', to: '#' },
      { value: '인프런 모아보기', to: '#' },
      { value: '수강평 모아보기', to: '#' },
      { value: '블로그', to: '#' },
    ],
  },
  {
    value: '신청하기',
    children: [
      { value: '지식공유참여', to: '#' },
      { value: '멘토링소개', to: '#' },
      { value: '인프런 비즈니스', to: '#' },
      { value: '인프런 제휴', to: '#' },
    ],
  },
  {
    value: '코드 등록',
    children: [
      { value: '수강코드 등록', to: '#' },
      { value: '포인트코드 등록', to: '#' },
    ],
  },
  {
    value: '고객센터',
    to: '고객센터',
    children: [
      { value: '공지사항', to: '#' },
      { value: '자주묻는 질문', to: '#' },
      { value: '저작권 신고센터', to: '#' },
      { value: '수료증 확인', to: '#' },
      { value: '강의 · 기능요청', to: '#' },
    ],
  },
  {
    value: '인프랩',
    children: [
      { value: '인프랩 실Log', to: '#' },
      { value: 'With us', to: '#' },
      { value: '인프랩 스토리', to: '#' },
      { value: '인프랩 테크', to: '#' },
      { value: 'IT 인재 채용 서비스', to: '#' },
    ],
  },
];

const footdata = [
  {
    icon: UserCheck,
    value: '대시보드',
  },
  {
    icon: List,
    value: '강의',
  },
  {
    icon: Home,
    value: '홈',
  },
  {
    icon: FlipHorizontal,
    value: '로드맵',
  },
  {
    icon: Ellipsis,
    value: '더보기',
  },
];

export default function Footer() {
  const { width } = useWindowResize();

  return (
    <>
      <div className="w-full h-[480px] bg-[#303740]">
        <div className="w-full h-full">
          <div className="flex py-4 max-w-[1440px] min-w-[500px] px-8 mx-auto justify-between">
            {footerData.map((item, index) => (
              <div className="flex flex-col space-y-4 py-4" key={index}>
                {item.to ? (
                  <Link href={item.to ? item.to : ''} aria-disabled={!item.to}>
                    <span className="text-white font-bold hover:underline underline-offset-4 text-sm">
                      {item.value}
                    </span>
                  </Link>
                ) : (
                  <span className="text-white font-bold text-sm">
                    {item.value}
                  </span>
                )}
                {item.children.map((child, childIndex) => (
                  <div
                    className="flex flex-col text-sm text-white space-y-2"
                    key={childIndex}
                  >
                    <Link href={child.to}>
                      <span className="hover:underline underline-offset-4 text-slate-200">
                        {child.value}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex flex-col space-y-2 items-center">
              <QrCode className="text-white size-20" />
              <span className="text-white text-xs font-semibold">
                Get the app
              </span>
            </div>
          </div>
          <div className="w-full border-gray-700 border"></div>
          <div className="w-full flex-grow mt-3 flex justify-between max-w-[1440px] min-w-[500px] px-8 mx-auto">
            <div className="flex flex-col basis-[60%]">
              <div className="flex space-x-2 items-center py-3">
                <div className="flex items-center">
                  <Link href={'/'} className="flex items-center">
                    <Leaf className="text-green-500 size-5" />
                    <span className="text-xl text-green-500">Inflearn</span>
                  </Link>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-3 text-[#BDBDBD]"
                />
                <span className="hover:underline underline-offset-4 hover:cursor-pointer text-[#BDBDBD] text-xs font-semibold">
                  개인정보처리방침
                </span>
                <Separator
                  orientation="vertical"
                  className="h-3 text-[#BDBDBD]"
                />
                <span className="hover:underline underline-offset-4 hover:cursor-pointer text-[#BDBDBD] text-xs font-semibold">
                  이용약관
                </span>
                <Separator
                  orientation="vertical"
                  className="h-3 text-[#BDBDBD]"
                />
                <span className="hover:underline underline-offset-4 hover:cursor-pointer text-[#BDBDBD] text-xs font-semibold">
                  We Are Hiring
                </span>
              </div>
              <span className="text-xs text-[#BDBDBD]">
                (주)인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612 사업자
                정보 확인
              </span>
              <span className="text-xs text-[#BDBDBD]">
                통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 |
                이메일:info@inflearn.com
              </span>
              <span className="text-xs text-[#BDBDBD]">
                전화번호: 070-4948-1181 | 주소:경기도 성남시 분당구
                판교로289번길 20 3동 5층
              </span>
              <span className="text-xs text-[#BDBDBD]">
                ©INFLAB. ALL RIGHTS RESERVED
              </span>
            </div>
            <div className="flex flex-grow justify-end items-center space-x-2">
              <div className="flex items-center justify-center bg-[#BDBDBD] p-[8px] size-9 rounded-full font-bold text-2xl cursor-pointer">
                <span className="text-center">N</span>
              </div>
              <div className="flex items-center justify-center bg-[#BDBDBD] p-[8px] size-9 rounded-full font-bold text-2xl cursor-pointer">
                <span className="text-center">B</span>
              </div>
              <Instagram className="bg-[#BDBDBD] p-[8px] size-9 rounded-full cursor-pointer" />
              <Youtube className="bg-[#BDBDBD] p-[8px] size-9 rounded-full cursor-pointer" />
              <Facebook className="bg-[#BDBDBD] p-[8px] size-9 rounded-full cursor-pointer" />
              <Twitter className="bg-[#BDBDBD] p-[8px] size-9 rounded-full cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {width < 1024 && (
        <ul
          className="flex absolute bottom-0 w-full h-[66px] bg-white items-center justify-center space-x-36"
          style={{
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {footdata.map((item, index) => (
            <li className="flex space-y-1 cursor-pointer" key={index}>
              <a
                href=""
                className="flex flex-col items-center justify-center space-y-1"
              >
                <item.icon className="size-7" strokeWidth={1} />
                <span className="text-center text-xs">{item.value}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
