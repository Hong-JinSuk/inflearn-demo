import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { selectedSkillsAtom } from '@/store/atom';
import { ModalProps } from '@/types/types';
import { useAtom } from 'jotai';
import { debounce } from 'lodash';
import { RefreshCcw, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const recommendSkills_ = [
  { label: 'python', value: 'Python' },
  { label: 'javascript', value: 'JavaScript' },
  { label: 'html/css', value: 'HTML/CSS' },
  { label: 'ms-office', value: 'MS-Office' },
  { label: 'java', value: 'Java' },
  { label: 'excel', value: 'Excel' },
  { label: 'react', value: 'React' },
  { label: 'team-building', value: '팀빌딩' },
  { label: 'sql', value: 'SQL' },
  { label: 'chatgpt', value: 'ChatGPT' },
  { label: 'c#', value: 'C#' },
  { label: 'big-data', value: '빅데이터' },
  { label: 'unity', value: 'Unity' },
  { label: 'aws', value: 'AWS' },
  { label: 'spring', value: 'Spring' },
  { label: 'productivity', value: '업무 생산성' },
  { label: 'android', value: 'Android' },
  { label: 'spring-boot', value: 'Spring Boot' },
  { label: 'node.js', value: 'Node.js' },
  { label: 'ios', value: 'iOS' },
  { label: 'english', value: '영어' },
  { label: 'object-oriented', value: '객체지향' },
  { label: 'digital-marketing', value: '디지털 마케팅' },
  { label: 'mysql', value: 'MySQL' },
  { label: 'c++', value: 'C++' },
  { label: 'coding-test', value: '코딩 테스트' },
  { label: 'swift', value: 'Swift' },
  { label: 'pandas', value: 'Pandas' },
  { label: 'dbms/rdbms', value: 'DBMS/RDBMS' },
  { label: 'kotlin', value: 'Kotlin' },
  { label: 'ai', value: '인공지능(AI)' },
  { label: 'algorithm', value: '알고리즘' },
  { label: 'network', value: '네트워크' },
  { label: 'typescript', value: 'TypeScript' },
  { label: 'linux', value: 'Linux' },
  { label: 'c', value: 'C' },
  { label: 'video-production', value: '영상제작' },
  { label: 'interview', value: '면접' },
  { label: 'portfolio', value: '포트폴리오' },
  { label: 'ethical-hacking', value: '모의해킹' },
  { label: 'docker', value: 'Docker' },
  { label: 'jquery', value: 'jQuery' },
  { label: 'web-crawling', value: '웹 크롤링' },
  { label: 'data-literacy', value: '데이터 리터러시' },
  { label: 'content-marketing', value: '콘텐츠 마케팅' },
  { label: 'blockchain', value: '블록체인' },
  { label: 'web-design', value: '웹 디자인' },
  { label: 'vue.js', value: 'Vue.js' },
  { label: 'unreal-engine', value: 'Unreal Engine' },
  { label: 'django', value: 'Django' },
  { label: 'flask', value: 'Flask' },
  { label: 'rust', value: 'Rust' },
  { label: 'go', value: 'Go' },
  { label: 'machine-learning', value: 'Machine Learning' },
  { label: 'deep-learning', value: 'Deep Learning' },
  { label: 'cloud-computing', value: 'Cloud Computing' },
  { label: 'ci-cd', value: 'CI/CD' },
  { label: 'azure', value: 'Azure' },
  { label: 'google-cloud', value: 'Google Cloud' },
  { label: 'firebase', value: 'Firebase' },
  { label: 'tailwind-css', value: 'Tailwind CSS' },
  { label: 'chakra-ui', value: 'Chakra UI' },
  { label: 'bootstrap', value: 'Bootstrap' },
  { label: 'material-ui', value: 'Material UI' },
  { label: 'nestjs', value: 'NestJS' },
  { label: 'fastapi', value: 'FastAPI' },
  { label: 'svelte', value: 'Svelte' },
  { label: 'elastic-search', value: 'Elastic Search' },
  { label: 'grafana', value: 'Grafana' },
  { label: 'prometheus', value: 'Prometheus' },
  { label: 'terraform', value: 'Terraform' },
  { label: 'kubernetes', value: 'Kubernetes' },
  { label: 'ansible', value: 'Ansible' },
  { label: 'webpack', value: 'Webpack' },
  { label: 'babel', value: 'Babel' },
  { label: 'eslint', value: 'ESLint' },
  { label: 'prettier', value: 'Prettier' },
  { label: 'redux', value: 'Redux' },
  { label: 'graphql', value: 'GraphQL' },
  { label: 'apollo', value: 'Apollo' },
  { label: 'three-js', value: 'Three.js' },
  { label: 'd3.js', value: 'D3.js' },
  { label: 'electron', value: 'Electron' },
  { label: 'capacitor', value: 'Capacitor' },
  { label: 'ionic', value: 'Ionic' },
  { label: 'flutter', value: 'Flutter' },
  { label: 'solidity', value: 'Solidity' },
  { label: 'smart-contracts', value: 'Smart Contracts' },
  { label: 'system-design', value: 'System Design' },
  { label: 'rest-api', value: 'REST API' },
  { label: 'openapi', value: 'OpenAPI' },
  { label: 'microservices', value: 'Microservices' },
  { label: 'data-visualization', value: 'Data Visualization' },
  { label: 'unit-testing', value: 'Unit Testing' },
  { label: 'integration-testing', value: 'Integration Testing' },
  { label: 'jenkins', value: 'Jenkins' },
  { label: 'github-actions', value: 'GitHub Actions' },
  { label: 'hadoop', value: 'Hadoop' },
  { label: 'spark', value: 'Spark' },
  { label: 'airflow', value: 'Airflow' },
  { label: 'scala', value: 'Scala' },
  { label: 'nosql', value: 'NoSQL' },
  { label: 'mongodb', value: 'MongoDB' },
  { label: 'cassandra', value: 'Cassandra' },
  { label: 'neo4j', value: 'Neo4j' },
  { label: 'salesforce', value: 'Salesforce' },
  { label: 'power-bi', value: 'Power BI' },
  { label: 'tableau', value: 'Tableau' },
  { label: 'sap', value: 'SAP' },
  { label: 'erp', value: 'ERP' },
  { label: 'game-development', value: 'Game Development' },
  { label: 'blender', value: 'Blender' },
  { label: 'unity-3d', value: 'Unity 3D' },
  { label: 'vr-ar', value: 'VR/AR' },
  { label: 'cyber-security', value: 'Cyber Security' },
  { label: 'penetration-testing', value: 'Penetration Testing' },
  { label: 'metasploit', value: 'Metasploit' },
  { label: 'kali-linux', value: 'Kali Linux' },
  { label: 'digital-forensics', value: 'Digital Forensics' },
  { label: 'blockchain-development', value: 'Blockchain Development' },
  { label: 'nft', value: 'NFT' },
  { label: 'metaverse', value: 'Metaverse' },
  { label: 'quantum-computing', value: 'Quantum Computing' },
  { label: 'bioinformatics', value: 'Bioinformatics' },
  { label: 'genomics', value: 'Genomics' },
  { label: 'robotics', value: 'Robotics' },
  { label: 'iot', value: 'IoT' },
  { label: 'edge-computing', value: 'Edge Computing' },
  { label: '5g-technology', value: '5G Technology' },
  { label: 'ethical-ai', value: 'Ethical AI' },
  { label: 'explainable-ai', value: 'Explainable AI' },
  { label: 'data-governance', value: 'Data Governance' },
  { label: 'data-engineering', value: 'Data Engineering' },
  { label: 'data-ops', value: 'DataOps' },
  { label: 'fintech', value: 'FinTech' },
  { label: 'agile-methodology', value: 'Agile Methodology' },
  { label: 'scrum', value: 'Scrum' },
  { label: 'kanban', value: 'Kanban' },
  { label: 'product-management', value: 'Product Management' },
  { label: 'project-management', value: 'Project Management' },
  { label: 'time-management', value: 'Time Management' },
  { label: 'decision-making', value: 'Decision Making' },
  { label: 'critical-thinking', value: 'Critical Thinking' },
];

export default function SkillModal({ isOpen, closeModal }: ModalProps) {
  const [selectedSkills, setSelectedSkills] = useAtom(selectedSkillsAtom);
  const [tempSelectedSkills, setTempSelectedSkills] = useState<string[]>([]); // 임시 상태
  const [recommendSkills, setRecommendSkills] =
    useState<{ label: string; value: string }[]>(recommendSkills_);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setTempSelectedSkills([...selectedSkills]); // 모달 열릴 때 상태 복사
    }
  }, [isOpen]);

  const toggleSkill = (label: string) => {
    if (tempSelectedSkills.includes(label)) {
      setTempSelectedSkills((prev) => prev.filter((item) => item !== label));
      const skillToAdd = recommendSkills_.find((item) => item.label === label);
      if (skillToAdd) {
        setRecommendSkills((prev) => [...prev, skillToAdd]);
      }
    } else {
      setTempSelectedSkills((prev) => [...prev, label]);
      setRecommendSkills((prev) => prev.filter((item) => item.label !== label));
    }
  };

  const onValueChange = useCallback(
    debounce((value: string) => {
      setSearchValue(value);
    }, 300),
    []
  );

  const handleApply = () => {
    setSelectedSkills(tempSelectedSkills); // 선택된 상태 확정
    closeModal(); // 모달 닫기
  };

  const handleReset = () => {
    setTempSelectedSkills([]); // 임시 상태 초기화
    setRecommendSkills(recommendSkills_); // 추천 상태 초기화
  };

  const handleClose = () => {
    handleReset(); // 모달 닫힐 때 초기화
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="flex flex-col max-w-[620px] h-[500px] overflow-hidden">
        <div className="w-full space-y-2">
          <span className="font-bold text-lg">기술</span>
          <Input
            placeholder="기술 검색"
            onChange={(e) => onValueChange(e.target.value)}
            className="w-full h-11"
          />
        </div>
        <ScrollArea className="w-full flex-grow">
          <div className="flex mb-2 gap-2 flex-wrap">
            {tempSelectedSkills?.map((label, index) => (
              <Button
                key={index}
                onClick={() => toggleSkill(label)}
                variant={'recommended'}
                size={'recommended'}
              >
                {recommendSkills_.find((item) => item.label === label)?.value}
                <X />
              </Button>
            ))}
          </div>
          <div className="space-x-2 space-y-2">
            {recommendSkills
              .filter(
                (item) =>
                  searchValue === '' ||
                  item.value.toLowerCase().includes(searchValue.toLowerCase())
              )
              .slice(0, 50)
              .map((item, index) => (
                <Button
                  onClick={() => toggleSkill(item.label)}
                  variant="recommend"
                  size="recommend"
                  key={index}
                >
                  {item.value}
                </Button>
              ))}
          </div>
        </ScrollArea>
        <div className="mt-auto h-10 w-full flex space-x-2">
          <Button
            className="flex-grow h-10 w-full"
            variant={'outline'}
            onClick={handleReset}
          >
            <RefreshCcw />
            <span className="font-semibold text-base">초기화</span>
          </Button>
          <Button
            className="flex-grow bg-green-500 h-10 w-full hover:bg-green-600"
            onClick={handleApply}
          >
            <span className="font-semibold text-base">적용</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
