export type Modal = {
  isOpen: boolean;
  type: 'login' | 'theme' | 'language' | null;
};

export type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export type headerSection = {
  label: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | null;
};
