export interface RecentPost {
  category: string;
  title: string;
  date: string;
  href: string;
}

interface HelloPostResponse {
  posts: Array<{
    id: number;
    category: string | null;
    title: string;
    date: string;
  }>;
}

function getRequiredEnvironmentVariable(name: "API_V2_BASE_URL" | "INTERNAL_API_KEY") {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(`${name} 환경변수가 설정되지 않았습니다.`);
  }

  return value;
}

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error(`활동 기록 API가 유효하지 않은 날짜를 반환했습니다: ${date}`);
  }

  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(parsedDate);
  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  return `${values.year}.${values.month}.${values.day}`;
}

export async function getRecentPosts(): Promise<RecentPost[]> {
  const baseUrl = getRequiredEnvironmentVariable("API_V2_BASE_URL");
  const apiKey = getRequiredEnvironmentVariable("INTERNAL_API_KEY");
  const endpoint = new URL("internal/hello-posts", `${baseUrl.replace(/\/$/, "")}/`);
  endpoint.searchParams.set("limit", "3");

  const response = await fetch(endpoint, {
    headers: {
      "x-api-key": apiKey,
    },
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`활동 기록 API 요청에 실패했습니다: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json() as HelloPostResponse;

  if (!Array.isArray(payload.posts)) {
    throw new Error("활동 기록 API 응답에 posts 배열이 없습니다.");
  }

  return payload.posts.map((post) => {
    if (!Number.isInteger(post.id) || typeof post.title !== "string" || typeof post.date !== "string") {
      throw new Error("활동 기록 API 응답 형식이 올바르지 않습니다.");
    }

    return {
      category: post.category ?? "활동 기록",
      title: post.title,
      date: formatDate(post.date),
      href: `https://hello.khlug.org/${post.id}`,
    };
  });
}
