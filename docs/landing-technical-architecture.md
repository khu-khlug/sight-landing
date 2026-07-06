# 쿠러그 랜딩 기술 아키텍처

## 구현 기술 선택

배포는 Cloudflare Pages를 기준으로 한다.

요구사항:

- 약 10분 정도의 지연을 허용하는 데이터 수정 가능
- client side rendering 없이 구현
- SEO 세팅 가능
- React 스타일에 가까운 컴포넌트 작성 경험
- Next.js는 사용하지 않음

권장 기술 조합:

- Astro SSG
- React 컴포넌트
- JSON 또는 Markdown 기반 콘텐츠
- Cloudflare Pages
- 필요 최소한의 vanilla JavaScript
- Hero 전용 canvas 또는 DOM 기반 애니메이션

## 왜 Astro인가

이 프로젝트는 복잡한 웹 애플리케이션이 아니라 랜딩 페이지다. 핵심은 빠른 정적 HTML, SEO, 쉬운 배포, 낮은 운영 복잡도다.

Astro는 정적 사이트 생성에 강하고, Cloudflare Pages와 궁합이 좋다. 페이지를 빌드 타임에 HTML로 생성할 수 있으므로 client side rendering 없이도 랜딩을 제공할 수 있다.

Astro 단독 문법은 React와 완전히 같지는 않다. `.astro` 파일은 JSX와 비슷해 보이지만 React 컴포넌트 모델은 아니다.

차이점:

- `useState`, `useEffect` 같은 React hook을 기본적으로 사용하지 않음
- 브라우저에서 자동으로 hydrate되지 않음
- JSX의 `onClick={() => ...}` 방식이 기본 모델이 아님
- frontmatter와 template이 분리된 Astro 고유 문법을 사용

따라서 모든 UI를 Astro 문법만으로 작성하면 React 스타일과는 거리가 생길 수 있다.

## 왜 Astro + React 컴포넌트인가

React 스타일의 작성 경험을 살리기 위해 주요 UI 섹션은 React 컴포넌트로 작성한다.

예시:

```tsx
export function Hero() {
  return (
    <section>
      <h1>경희대학교 중앙 IT 동아리, 쿠러그</h1>
      <p>코딩으로 꿈을 펼치는 세상, 프로그래밍으로 만들어질 미래</p>
      <a href="/join">가입 신청하기</a>
    </section>
  );
}
```

Astro 페이지에서는 각 섹션을 조립하는 역할만 맡긴다.

```astro
---
import { Hero } from "../components/Hero";
import { Audience } from "../components/Audience";
import { Activities } from "../components/Activities";
---

<Hero />
<Audience />
<Activities />
```

중요한 점은 React 컴포넌트를 기본적으로 hydrate하지 않는 것이다. Astro에서 React 컴포넌트를 hydration 지시어 없이 사용하면 정적 HTML로 출력할 수 있다.

이 방식의 장점:

- UI는 React 스타일로 작성 가능
- 최종 출력은 정적 HTML 중심
- SEO에 유리
- React 런타임을 대부분의 섹션에 싣지 않아도 됨
- Cloudflare Pages에서 단순하게 배포 가능

## 인터랙션 구현 방식

랜딩의 대부분의 인터랙션은 React state 없이 처리한다.

권장 방식:

- hover/focus 효과: CSS transition
- 버튼, 카드, 칩의 시각적 반응: CSS
- 탭/칩 선택: 작은 vanilla TypeScript 모듈
- Hero 애니메이션: 독립 canvas 또는 DOM script
- 스크롤 이동: native anchor 또는 작은 script

React hydration은 정말 필요한 경우에만 제한적으로 사용한다.

예를 들어, 관심 분야 칩 선택이나 활동 탭 전환은 React로 hydrate해서 만들 수도 있지만, 랜딩 규모에서는 vanilla JavaScript로 충분하다. 이렇게 하면 client side rendering 구조로 흐르지 않고, 정적 HTML 위에 작은 상호작용만 얹을 수 있다.

## 데이터 수정 방식

콘텐츠는 코드와 분리해 JSON 또는 Markdown으로 관리한다.

예시 구조:

```text
src/content/landing/hero.json
src/content/landing/audience.json
src/content/landing/activities.json
src/content/landing/interests.json
src/content/landing/recent-posts.json
src/content/landing/join.json
```

운영 방식:

1. 콘텐츠 파일 수정
2. Git commit 또는 CMS 저장
3. Cloudflare Pages 빌드 실행
4. 정적 HTML 재생성
5. 몇 분 뒤 사이트 반영

수정 반영에 약 10분 정도의 지연을 허용한다면, 별도의 런타임 데이터베이스나 서버 API가 필요하지 않다.

비개발자도 수정해야 한다면 Git 기반 CMS를 붙일 수 있다. Pages CMS, Decap CMS 같은 도구를 사용하면 콘텐츠 수정이 Git commit으로 이어지고, Cloudflare Pages가 다시 빌드하는 구조를 만들 수 있다.

외부 Headless CMS도 가능하지만, 이 랜딩 규모에서는 Sanity, Contentful, Strapi 같은 별도 CMS를 운영하는 것은 다소 과하다.

## SEO 구성

정적 HTML 기반으로 다음 항목을 설정한다.

- 페이지별 `<title>`
- meta description
- canonical URL
- Open Graph meta
- Twitter card meta
- favicon
- `robots.txt`
- sitemap
- 구조화 데이터가 필요하다면 JSON-LD

Astro에서는 sitemap integration을 사용할 수 있고, `astro.config`에 사이트 URL을 명시해 sitemap을 생성할 수 있다.

## 고려했지만 우선순위를 낮춘 선택지

### Next.js

React 스타일과 SEO, 정적 생성 측면에서는 적합할 수 있지만 사용하지 않는다.

이유:

- 프로젝트 성격에 비해 프레임워크가 무거움
- 최근 생태계 방향성에 대한 선호 문제
- 이 랜딩의 요구사항은 Next.js 없이도 충분히 만족 가능

### SolidStart

React와 비슷한 JSX 작성 경험을 제공하고, SSR/SSG도 가능하다.

장점:

- JSX 기반 컴포넌트 작성
- 작은 런타임
- React와 비슷한 개발 경험

하지만 이 프로젝트에서는 프레임워크 비중이 다소 크다. 랜딩 페이지 하나를 위해 라우팅과 서버 렌더링 프레임워크를 본격 도입하는 느낌이 있다.

### Astro 단독

정적 랜딩에는 가장 단순하고 안정적이다.

하지만 React 스타일로 구현하고 싶은 요구와는 거리가 있다. `.astro` 문법은 React와 닮은 부분이 있지만, React 컴포넌트 모델과는 다르다.

## 최종 선택

이 프로젝트의 권장 구현은 다음과 같다.

```text
Astro SSG
+ React section components
+ JSON/Markdown content files
+ minimal vanilla JavaScript
+ Cloudflare Pages
```

렌더링은 빌드 타임에 끝내고, 브라우저 JavaScript는 장식과 상호작용만 담당하게 한다. 이 방식이 구현 경험, 배포 안정성, SEO, 성능, 유지보수 사이에서 가장 현실적인 균형이다.
