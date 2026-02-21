# Readme Maker

> 채용 담당자가 주목하는 포트폴리오 README.md를 빠르게 만들어보세요.

## 프로젝트 소개

포트폴리오용 README.md 작성이 어려운 개발자를 위한 웹 도구입니다. 템플릿을 선택하고 프로젝트 정보를 입력하면 마크다운 README를 자동으로 생성해줍니다. 복사 한 번이면 GitHub에 바로 올릴 수 있습니다.

## 주요 기능

- **6종 템플릿 제공** - 프론트엔드, 백엔드, 풀스택, 모바일 앱, 데이터/AI, DevOps/인프라
- **실시간 미리보기** - Preview / Raw 모드 전환으로 결과물을 바로 확인
- **기술 스택 뱃지** - shields.io 기반 기술 스택 뱃지 자동 생성
- **섹션별 입력** - 프로젝트 개요, 기술 스택, 도전과 해결, 성과 및 결과
- **마크다운 직접 편집** - Raw 에디터에서 생성된 마크다운을 자유롭게 수정
- **복사 & 다운로드** - 클립보드 복사, README.md 파일 다운로드
- **반응형 디자인** - 모바일/데스크톱 모두 지원

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Markdown | react-markdown, remark-gfm |
| Build | PostCSS, ESLint |

## 프로젝트 구조

```
src/
├── app/                  # Next.js App Router
│   ├── page.tsx          # 메인 페이지
│   ├── layout.tsx        # 루트 레이아웃
│   └── globals.css       # 전역 스타일
├── components/
│   ├── form/             # 입력 폼 섹션
│   │   ├── OverviewSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ChallengesSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   └── shared/       # 공통 폼 컴포넌트
│   ├── preview/          # 미리보기 영역
│   │   ├── MarkdownPreview.tsx
│   │   ├── CopyButton.tsx
│   │   └── DownloadButton.tsx
│   ├── HeroSection.tsx   # 히어로 섹션
│   ├── ReadmeForm.tsx    # 폼 컨테이너
│   ├── TemplateSelector.tsx
│   └── ProgressBar.tsx
├── hooks/
│   └── useReadmeForm.ts  # 폼 상태 관리 훅
├── lib/
│   ├── generateMarkdown.ts  # 마크다운 생성 로직
│   ├── techBadges.ts        # 기술 스택 뱃지 매핑
│   └── templates.ts         # 템플릿 데이터
└── types/
    └── index.ts          # TypeScript 타입 정의
```


