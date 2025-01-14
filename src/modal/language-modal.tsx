import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ModalProps } from '@/types/types';

export default function LanguageModal({ isOpen, closeModal }: ModalProps) {
  if (!isOpen) return null;
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      {/* h-213px */}
      <DialogContent className="max-w-[370px]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
