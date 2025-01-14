'use client';

import TopBar from '@/components/common/top-bar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import useModal from '@/hooks/use-modal';

export default function Home() {
  const { openLoginModal, openLanguageModal } = useModal();
  return (
    <div>
      <TopBar state="education" />
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent className="max-w-[360px] h-[430px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button onClick={openLoginModal}>login</Button>
      <Button onClick={openLanguageModal}>language</Button>

      <div className="h-52">test</div>
      <div className="h-52">test</div>
      <div className="h-52">test</div>

      <div className="h-52">test</div>
      <div className="h-52">test</div>
      <div className="h-52">test</div>
      <div className="h-52">test</div>
    </div>
  );
}
