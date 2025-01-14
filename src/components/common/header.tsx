import { Leaf } from 'lucide-react';

type headerProps = [
  {
    label: 'courses';
    value: '강의';
    to: '/courses';
  },
  {
    label: 'roadmap';
    value: '로드맵';
    to: '/roadmaps';
  },
  {
    label: 'mentoring';
    value: '멘토링';
    to: '/mentoring';
  },
  {
    label: 'community';
    value: '커뮤니티';
    to: '/community';
  }
];

export default function Header() {
  return (
    <>
      <div className={`w-full h-full flex items-center z-30`}>
        <div className="flex items-center">
          <Leaf className="text-green-500" />
          <span className="text-2xl text-green-500">Inflearn</span>
        </div>
      </div>
    </>
  );
}
