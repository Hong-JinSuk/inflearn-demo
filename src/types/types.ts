export type Modal = {
  isOpen: boolean;
  type: 'login' | 'theme' | 'language' | null;
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

export type TopBarStates = 'education' | 'carrer';
