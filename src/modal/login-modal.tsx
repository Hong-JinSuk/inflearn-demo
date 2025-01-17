import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ModalProps } from '@/types/types';
import { Apple, Github, Leaf, MapPin, MessageCircle, X } from 'lucide-react';
import Link from 'next/link';

export default function LoginModal({ isOpen, closeModal }: ModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={closeModal}>
      <AlertDialogContent className="max-w-[360px] h-[430px] p-0 transition-all">
        <AlertDialogTitle className="h-0">
          <X
            onClick={closeModal}
            className="opacity-50 size-9 absolute top-2 right-1 p-2 rounded-lg cursor-pointer hover:bg-accent"
          />
        </AlertDialogTitle>
        <div className="flex flex-col h-full items-center px-5 space-y-4">
          <div className="flex justify-center items-center mb-2">
            <Leaf className="text-green-500" />
            <span className="text-2xl font-extralight text-green-500">
              Inflearn
            </span>
          </div>
          <div className="flex flex-col w-full space-y-3">
            <Input type="email" className="w-full" placeholder="이메일"></Input>
            <Input className="w-full" placeholder="비밀번호"></Input>
            <Button className="bg-green-500 hover:bg-green-600 h-11">
              <span className="font-bold">로그인</span>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-2 my-3">
            <Link href={'/find-password'}>
              <span className="text-xs underline underline-offset-4">
                비밀번호 찾기
              </span>
            </Link>
            <Separator orientation="vertical" className="h-3" />
            <Link href={'/signup'}>
              <span className="text-xs underline underline-offset-4">
                회원 가입
              </span>
            </Link>
            <Separator orientation="vertical" className="h-3" />
            <Link href={'/find-email'}>
              <span className="text-xs underline underline-offset-4">
                아이디(이메일) 찾기
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-5 pt-4">
            <Separator />
            <span className="whitespace-nowrap text-xs opacity-50">
              간편 로그인
            </span>
            <Separator />
          </div>
          <div className="flex items-center justify-center space-x-3 pt-2">
            <Button className="size-11 bg-yellow-200">
              <MessageCircle className="text-black" />
            </Button>
            <Button className="size-11 bg-slate-100">
              <MapPin className="text-blue-400" />
            </Button>
            <Button className="size-11">
              <Github />
            </Button>
            <Button className="size-11">
              <Apple />
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
