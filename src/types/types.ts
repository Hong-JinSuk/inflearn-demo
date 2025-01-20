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
