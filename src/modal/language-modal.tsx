import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ModalProps } from '@/types/types';

export default function LanguageModal({ isOpen, closeModal }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      {/* h-213px */}
      <DialogContent className="max-w-[370px]">
        <DialogHeader>
          <DialogTitle>Language Modal</DialogTitle>
          <DialogDescription>It's don't work now...</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
