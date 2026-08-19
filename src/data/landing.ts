export const navItems: Array<{
  label: string;
  href: string;
  variant?: "primary" | "login";
}> = [
  { label: "소개", href: "#audience" },
  { label: "활동", href: "#activities" },
  { label: "활동 기록", href: "#recent" },
  { label: "로그인", href: "https://app.khlug.org", variant: "login" },
  { label: "가입 신청", href: "#join", variant: "primary" },
];

export const audienceCards = [
  {
    title: "처음 시작하는 사람",
    body: "프로그래밍 경험이 많지 않아도 기초부터 함께 배울 수 있습니다.",
  },
  {
    title: "관심으로 시작하는 사람",
    body: "전공이나 경험에 관계없이 배우고 만들어 보고 싶은 마음이 있다면 충분합니다.",
  },
  {
    title: "만들고 싶은 사람",
    body: "아이디어를 서비스, 도구, 실험으로 구체화하는 과정을 함께 경험합니다.",
  },
  {
    title: "나누고 싶은 사람",
    body: "알고 있는 기술과 시행착오를 세미나와 그룹 활동으로 공유하고 성장합니다.",
  },
];

export const activities = [
  {
    id: "group",
    title: "그룹",
    summary: "관심사 기반 스터디와 프로젝트",
    body: "함께 배우고 싶은 주제나 만들어보고 싶은 아이디어를 중심으로 작은 그룹을 구성합니다.",
  },
  {
    id: "education",
    title: "교육",
    summary: "기초부터 웹, 보안, AI까지",
    body: "프로그래밍 기초부터 실전 개발 분야까지 동아리원이 서로 배우고 가르치는 교육을 진행합니다.",
  },
  {
    id: "seminar",
    title: "세미나",
    summary: "배운 것과 만든 것을 공유",
    body: "프로젝트 결과, 기술 탐구, 삽질 기록까지 다음 사람에게 도움이 될 수 있는 내용을 발표합니다.",
  },
  {
    id: "track",
    title: "트랙",
    summary: "특정 분야를 더 깊게 탐색",
    body: "보안, 웹, AI 등 관심 분야를 정해 더 깊게 파고드는 흐름을 만듭니다.",
  },
];

export const recentPosts = [
  {
    category: "세미나",
    title: "[2026-1 세미나: 먼저 말하기] 오픈소스에 기여해보자",
    date: "2026.06.23",
    href: "https://hello.khlug.org/117531",
  },
  {
    category: "세미나",
    title: "[2026-1 세미나: 먼저 말하기] 게임 만들며 익히는 바이브코딩",
    date: "2026.06.23",
    href: "https://hello.khlug.org/117530",
  },
  {
    category: "세미나",
    title: "[2026-1 세미나: 먼저 말하기] WASM 스터디",
    date: "2026.06.23",
    href: "https://hello.khlug.org/117529",
  },
];
