import { Modal } from '@/types/types';
import { atom } from 'jotai';

export const modalAtom = atom<Modal>({
  isOpen: false,
  type: null,
});

export const selectedSkillsAtom = atom<string[]>([]);
