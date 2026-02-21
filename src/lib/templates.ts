import { PortfolioReadmeData } from "@/types";

export interface Template {
  id: string;
  label: string;
  emoji: string;
  description: string;
  data: Omit<PortfolioReadmeData, "techStack"> & {
    techStack: Record<string, string[]>;
  };
}

export const templates: Template[] = [
  {
    id: "frontend",
    label: "프론트엔드",
    emoji: "\uD83C\uDFA8",
    description: "React/Vue 등 프론트엔드 웹 프로젝트",
    data: {
      overview: {
        projectName: "TaskFlow",
        tagline: "직관적인 실시간 협업 프로젝트 관리 도구",
        background:
          "기존 프로젝트 관리 도구들이 너무 복잡하고 무거워서, 소규모 팀이 빠르게 사용할 수 있는 가벼운 태스크 관리 웹앱을 만들었습니다. 드래그 앤 드롭 칸반보드와 실시간 동기화에 집중했습니다.",
        role: "프론트엔드 개발",
        duration: "2024.09 ~ 2024.12",
        teamSize: "3인 (프론트 2, 백엔드 1)",
        projectUrl: "https://taskflow-demo.vercel.app",
        githubUrl: "https://github.com/username/taskflow",
      },
      techStack: {
        Frontend: ["React", "TypeScript", "Tailwind CSS", "Zustand", "React Query"],
        Backend: ["Node.js", "Express"],
        Database: ["PostgreSQL", "Prisma"],
        DevOps: ["Vercel", "GitHub Actions"],
      },
      challenges: [
        {
          id: "",
          challenge: "칸반보드 드래그 앤 드롭 시 상태 동기화 이슈",
          solution:
            "Optimistic UI 패턴을 적용하여 드래그 즉시 UI를 업데이트하고, 서버 응답 실패 시 롤백하는 방식으로 해결했습니다.",
          learning:
            "Optimistic UI와 서버 상태 동기화의 트레이드오프를 이해하게 되었습니다.",
        },
        {
          id: "",
          challenge: "대량 태스크 렌더링 시 성능 저하",
          solution:
            "React.memo와 가상 스크롤링(react-window)을 도입하여 100개 이상의 태스크에서도 60fps를 유지했습니다.",
          learning:
            "렌더링 최적화 기법과 프로파일링 도구(React DevTools) 활용법을 익혔습니다.",
        },
      ],
      achievements: {
        metrics: [
          { id: "", metric: "Lighthouse 성능 점수", value: "95점", description: "초기 42점에서 최적화" },
          { id: "", metric: "First Contentful Paint", value: "0.8초", description: "코드 스플리팅 적용" },
          { id: "", metric: "번들 사이즈", value: "148KB", description: "Tree-shaking으로 62% 감소" },
        ],
        achievements: [
          { id: "", text: "Lighthouse 성능 점수 42점 → 95점 개선" },
          { id: "", text: "WebSocket 기반 실시간 동기화 구현" },
        ],
        imageUrls: [],
      },
    },
  },
  {
    id: "backend",
    label: "백엔드",
    emoji: "\u2699\uFE0F",
    description: "REST API / 서버 중심 프로젝트",
    data: {
      overview: {
        projectName: "PayGate API",
        tagline: "소규모 커머스를 위한 결제 게이트웨이 API 서버",
        background:
          "소규모 쇼핑몰에서 여러 PG사를 통합 관리하기 어려운 문제를 해결하기 위해, 단일 API로 토스페이먼츠/카카오페이 등을 연동할 수 있는 결제 게이트웨이를 개발했습니다.",
        role: "백엔드 개발",
        duration: "2024.06 ~ 2024.10",
        teamSize: "2인 (백엔드 1, 프론트 1)",
        projectUrl: "",
        githubUrl: "https://github.com/username/paygate-api",
      },
      techStack: {
        Frontend: [],
        Backend: ["Java", "Spring Boot", "Spring Security", "JPA"],
        Database: ["MySQL", "Redis"],
        DevOps: ["Docker", "AWS EC2", "GitHub Actions"],
      },
      challenges: [
        {
          id: "",
          challenge: "PG사별 결제 응답 포맷이 달라 통합 처리가 어려움",
          solution:
            "Strategy 패턴으로 PG사별 어댑터를 분리하고, 공통 응답 DTO로 통합하여 클라이언트는 동일한 인터페이스로 사용할 수 있게 했습니다.",
          learning:
            "디자인 패턴의 실전 적용과 외부 API 통합 시 추상화 계층의 중요성을 체감했습니다.",
        },
        {
          id: "",
          challenge: "동시 결제 요청 시 중복 결제 발생",
          solution:
            "Redis 분산 락(Redisson)을 적용하여 동일 주문에 대한 동시 결제를 방지했습니다.",
          learning:
            "분산 환경에서의 동시성 제어와 멱등성 설계의 중요성을 배웠습니다.",
        },
      ],
      achievements: {
        metrics: [
          { id: "", metric: "API 응답 시간", value: "평균 85ms", description: "Redis 캐싱 적용 후" },
          { id: "", metric: "동시 처리량", value: "500 TPS", description: "JMeter 부하 테스트 기준" },
          { id: "", metric: "테스트 커버리지", value: "87%", description: "JUnit + MockMvc" },
        ],
        achievements: [
          { id: "", text: "3개 PG사 통합 결제 API 설계 및 구현" },
          { id: "", text: "Redis 분산 락으로 중복 결제 0건 달성" },
        ],
        imageUrls: [],
      },
    },
  },
  {
    id: "fullstack",
    label: "풀스택",
    emoji: "\uD83D\uDE80",
    description: "프론트 + 백엔드 모두 다룬 프로젝트",
    data: {
      overview: {
        projectName: "DevLog",
        tagline: "개발자를 위한 기술 블로그 플랫폼",
        background:
          "마크다운 기반으로 글을 작성하고, 코드 하이라이팅과 시리즈 기능을 지원하는 기술 블로그 플랫폼을 개발했습니다. velog에서 영감을 받아 더 가벼운 버전을 목표로 했습니다.",
        role: "풀스택 개발 (1인)",
        duration: "2024.07 ~ 2024.11",
        teamSize: "1인 개발",
        projectUrl: "https://devlog-demo.vercel.app",
        githubUrl: "https://github.com/username/devlog",
      },
      techStack: {
        Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
        Backend: ["Next.js API Routes", "NextAuth.js"],
        Database: ["PostgreSQL", "Prisma"],
        DevOps: ["Vercel", "AWS S3"],
      },
      challenges: [
        {
          id: "",
          challenge: "마크다운 에디터에서 이미지 업로드 및 미리보기 처리",
          solution:
            "AWS S3 Presigned URL로 클라이언트에서 직접 업로드하고, 에디터에 드래그 앤 드롭 이미지 삽입 기능을 구현했습니다.",
          learning:
            "Presigned URL 방식의 파일 업로드 아키텍처와 보안 설정을 익혔습니다.",
        },
        {
          id: "",
          challenge: "SSR/SSG 혼합 전략으로 SEO와 성능 모두 확보",
          solution:
            "글 목록은 ISR(30초), 글 상세는 SSG + On-demand Revalidation을 적용하여 빌드 시간을 줄이면서 최신 콘텐츠를 제공했습니다.",
          learning:
            "Next.js의 렌더링 전략별 트레이드오프를 실전에서 비교하며 이해했습니다.",
        },
      ],
      achievements: {
        metrics: [
          { id: "", metric: "Google 검색 노출", value: "상위 10위 내", description: "주요 키워드 기준" },
          { id: "", metric: "페이지 로드 시간", value: "1.2초", description: "LCP 기준" },
          { id: "", metric: "이미지 업로드 속도", value: "2초 이내", description: "Presigned URL 직접 업로드" },
        ],
        achievements: [
          { id: "", text: "마크다운 에디터 + 실시간 미리보기 구현" },
          { id: "", text: "OAuth 소셜 로그인 (Google, GitHub) 연동" },
          { id: "", text: "ISR + On-demand Revalidation으로 SEO 최적화" },
        ],
        imageUrls: [],
      },
    },
  },
  {
    id: "mobile",
    label: "모바일 앱",
    emoji: "\uD83D\uDCF1",
    description: "React Native / Flutter 앱 프로젝트",
    data: {
      overview: {
        projectName: "FitMate",
        tagline: "AI 기반 홈트레이닝 자세 교정 앱",
        background:
          "홈트레이닝 시 잘못된 자세로 인한 부상 위험을 줄이기 위해, 카메라로 실시간 자세를 분석하고 피드백을 제공하는 모바일 앱을 개발했습니다.",
        role: "모바일 앱 개발",
        duration: "2024.03 ~ 2024.08",
        teamSize: "4인 (앱 2, AI 1, 디자이너 1)",
        projectUrl: "",
        githubUrl: "https://github.com/username/fitmate",
      },
      techStack: {
        Frontend: ["React Native", "TypeScript", "Reanimated", "Expo"],
        Backend: ["FastAPI", "Python"],
        Database: ["Firebase Firestore"],
        DevOps: ["Firebase", "AWS Lambda"],
        "기타": ["TensorFlow Lite", "MediaPipe"],
      },
      challenges: [
        {
          id: "",
          challenge: "실시간 카메라 프레임에서 자세 추정 시 앱이 버벅임",
          solution:
            "TensorFlow Lite 모델을 온디바이스로 실행하고, 프레임 처리를 네이티브 모듈로 분리하여 UI 스레드 블로킹을 방지했습니다.",
          learning:
            "모바일 환경에서의 ML 모델 최적화와 네이티브 브릿지 활용법을 익혔습니다.",
        },
        {
          id: "",
          challenge: "iOS/Android 카메라 권한 및 동작 차이 처리",
          solution:
            "Expo Camera + 커스텀 네이티브 모듈로 플랫폼별 분기 처리를 최소화하고, 공통 인터페이스로 추상화했습니다.",
          learning:
            "크로스 플랫폼 개발에서 네이티브 차이를 다루는 전략을 배웠습니다.",
        },
      ],
      achievements: {
        metrics: [
          { id: "", metric: "자세 인식 정확도", value: "92%", description: "주요 운동 5종 기준" },
          { id: "", metric: "실시간 처리 속도", value: "30 FPS", description: "iPhone 12 기준" },
          { id: "", metric: "앱 크기", value: "38MB", description: "ML 모델 포함" },
        ],
        achievements: [
          { id: "", text: "온디바이스 ML로 네트워크 없이 실시간 자세 분석" },
          { id: "", text: "운동 기록 대시보드 및 통계 시각화" },
        ],
        imageUrls: [],
      },
    },
  },
  {
    id: "data",
    label: "데이터/AI",
    emoji: "\uD83E\uDDE0",
    description: "데이터 분석, ML/AI 프로젝트",
    data: {
      overview: {
        projectName: "NewsLens",
        tagline: "뉴스 기사 감성 분석 및 트렌드 대시보드",
        background:
          "특정 주제에 대한 여론 추이를 파악하기 위해, 뉴스 기사를 크롤링하고 자연어 처리로 감성을 분석하여 시각화하는 대시보드를 개발했습니다.",
        role: "데이터 엔지니어링 & 백엔드",
        duration: "2024.05 ~ 2024.09",
        teamSize: "2인 (데이터 1, 프론트 1)",
        projectUrl: "https://newslens-demo.streamlit.app",
        githubUrl: "https://github.com/username/newslens",
      },
      techStack: {
        Frontend: ["Streamlit", "Plotly"],
        Backend: ["Python", "FastAPI", "Celery"],
        Database: ["MongoDB", "Elasticsearch"],
        DevOps: ["Docker", "AWS EC2"],
        "기타": ["KoNLPy", "Hugging Face Transformers", "BeautifulSoup"],
      },
      challenges: [
        {
          id: "",
          challenge: "한국어 뉴스 기사의 감성 분석 정확도가 낮음",
          solution:
            "KcELECTRA 모델을 뉴스 도메인 데이터로 파인튜닝하여 감성 분류 정확도를 78%에서 91%로 개선했습니다.",
          learning:
            "사전학습 모델의 도메인 적응(Fine-tuning)과 한국어 NLP 파이프라인 구축 경험을 쌓았습니다.",
        },
        {
          id: "",
          challenge: "일일 수천 건의 기사를 실시간으로 처리해야 함",
          solution:
            "Celery + Redis 비동기 작업 큐를 구축하고, 크롤링-분석-저장 파이프라인을 자동화했습니다.",
          learning:
            "비동기 작업 처리 아키텍처와 데이터 파이프라인 설계를 배웠습니다.",
        },
      ],
      achievements: {
        metrics: [
          { id: "", metric: "감성 분석 정확도", value: "91%", description: "KcELECTRA 파인튜닝 후" },
          { id: "", metric: "일일 처리량", value: "3,000건+", description: "뉴스 기사 크롤링 & 분석" },
          { id: "", metric: "대시보드 응답 시간", value: "1.5초", description: "Elasticsearch 집계 쿼리" },
        ],
        achievements: [
          { id: "", text: "KcELECTRA 파인튜닝으로 감성 분류 78% → 91% 개선" },
          { id: "", text: "Celery 기반 자동화 파이프라인으로 무중단 수집" },
        ],
        imageUrls: [],
      },
    },
  },
  {
    id: "devops",
    label: "DevOps/인프라",
    emoji: "\u2601\uFE0F",
    description: "CI/CD, 클라우드, 인프라 프로젝트",
    data: {
      overview: {
        projectName: "DeployPilot",
        tagline: "마이크로서비스 자동 배포 파이프라인",
        background:
          "서비스 수가 늘어남에 따라 수동 배포의 비효율과 장애 위험이 커져, GitOps 기반 자동 배포 파이프라인과 모니터링 시스템을 구축했습니다.",
        role: "DevOps 엔지니어",
        duration: "2024.04 ~ 2024.08",
        teamSize: "2인 (인프라 1, 백엔드 1)",
        projectUrl: "",
        githubUrl: "https://github.com/username/deploy-pilot",
      },
      techStack: {
        Frontend: [],
        Backend: ["Go", "gRPC"],
        Database: ["PostgreSQL", "InfluxDB"],
        DevOps: [
          "Kubernetes",
          "Docker",
          "Terraform",
          "ArgoCD",
          "GitHub Actions",
          "Prometheus",
          "Grafana",
        ],
      },
      challenges: [
        {
          id: "",
          challenge: "배포 중 서비스 다운타임 발생",
          solution:
            "Kubernetes Rolling Update 전략과 Readiness Probe를 설정하고, ArgoCD로 GitOps 기반 자동 롤백을 구현하여 무중단 배포를 달성했습니다.",
          learning:
            "Kubernetes 배포 전략과 헬스체크 설계의 중요성을 체감했습니다.",
        },
        {
          id: "",
          challenge: "장애 발생 시 원인 파악에 시간이 오래 걸림",
          solution:
            "Prometheus + Grafana로 메트릭 수집 및 대시보드를 구축하고, Alertmanager로 슬랙 알림을 연동했습니다.",
          learning:
            "Observability(관측 가능성) 3요소(메트릭, 로그, 트레이스)의 중요성을 이해했습니다.",
        },
      ],
      achievements: {
        metrics: [
          { id: "", metric: "배포 다운타임", value: "0초", description: "Rolling Update + Readiness Probe" },
          { id: "", metric: "배포 소요 시간", value: "3분", description: "기존 30분에서 단축" },
          { id: "", metric: "장애 감지 시간", value: "30초 이내", description: "Prometheus Alert 기준" },
        ],
        achievements: [
          { id: "", text: "GitOps 기반 무중단 자동 배포 파이프라인 구축" },
          { id: "", text: "Terraform으로 인프라 코드화 (IaC) 100% 달성" },
        ],
        imageUrls: [],
      },
    },
  },
];
