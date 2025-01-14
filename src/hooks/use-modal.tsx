import { modalAtom } from '@/store/atom';
import { useAtom } from 'jotai';

export default function useModal() {
  const [modal, setModal] = useAtom(modalAtom);

  const openLoginModal = () => {
    setModal({
      isOpen: true,
      type: 'login',
    });
  };

  const openThemeModal = () => {
    setModal({
      isOpen: true,
      type: 'theme',
    });
  };

  const openLanguageModal = () => {
    setModal({
      isOpen: true,
      type: 'language',
    });
  };

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return {
    openLoginModal,
    openThemeModal,
    openLanguageModal,
    closeModal,
    modal,
  };
}
