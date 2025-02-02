import useModal from '@/hooks/use-modal';
import LanguageModal from './language-modal';
import LoginModal from './login-modal';
import SkillModal from './skill-modal';

export default function ModalProvider() {
  const { modal, closeModal } = useModal();
  return (
    <>
      <LoginModal
        isOpen={modal.isOpen && modal.type === 'login'}
        closeModal={closeModal}
      />
      <LanguageModal
        isOpen={modal.isOpen && modal.type === 'language'}
        closeModal={closeModal}
      />
      <SkillModal
        isOpen={modal.isOpen && modal.type === 'skills'}
        closeModal={closeModal}
      />
    </>
  );
}
