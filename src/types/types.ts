export type Modal = {
  isOpen: boolean;
  type: 'login' | 'theme' | 'language' | 'skills' | null;
};

export type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

// header types

export type HeaderSection = {
  label: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | null;
};

export type HeaderMenuType = {
  label: string;
  value: string;
  to: string;
  children?: HeaderMenuChildren[];
};

export type HeaderMenuChildren = {
  label: string;
  value: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  children?: HeaderMenuChildren[];
};

export type SubHeaderMenusData = {
  label: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type TopBarStates = 'education' | 'carrer';

export type HeaderStates = 'courses' | 'roadmap' | 'mentoring' | 'community';

export type OrderStates =
  | 'recommend'
  | 'popularity'
  | 'lastest'
  | 'rating'
  | 'like';

export type classesType =
  | 'Python'
  | '알고리즘'
  | '코딩테스트'
  | '머신러닝'
  | 'AI'
  | 'Pandas'
  | 'Anaconda'
  | 'Java'
  | 'C++'
  | 'C#'
  | '투자'
  | '빅데이터'
  | '확률과 통계'
  | 'SQL'
  | 'MySQL'
  | '정보처리기사';

export type CardData = {
  image: string | null;
  title: string;
  author: string;
  to: string;
  price: number;
  description: string;
  level: '입문' | '초급' | '중급이상';
  classes: classesType[];
  upload: Date;
  reviewCount?: number;
  reviewScore?: number;
  students?: number;
  saleDate?: number;
  salePercent?: number;
  salePrice?: number;
};

export type FooterChildren = {
  value: string;
  to: string;
};

export type FooterData = {
  value: string;
  to?: string;
  children: FooterChildren[];
};
