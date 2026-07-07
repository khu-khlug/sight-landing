const featuredInterests = [
  {
    title: "웹/어플리케이션 서비스",
    body: "사용자와 만나는 서비스를 만들고 운영합니다.",
  },
  {
    title: "보안/해킹",
    body: "시스템과 데이터를 안전하게 지키는 방법을 탐구합니다.",
  },
  {
    title: "인공지능/머신러닝",
    body: "데이터와 모델로 문제를 정의하고 해결합니다.",
  },
  {
    title: "UX/UI 디자인",
    body: "사람이 이해하고 쓰기 쉬운 흐름을 설계합니다.",
  },
];

export function Interests() {
  return (
    <section className="section" id="interests" aria-labelledby="interests-title">
      <div className="section-heading">
        <span className="section-marker" aria-hidden="true" />
        <p className="eyebrow">FIELDS</p>
        <h2 id="interests-title">관심 분야가 다양해도 괜찮아요</h2>
      </div>
      <div className="interest-shell">
        <div className="interest-grid" aria-label="대표 관심 분야">
          {featuredInterests.map((interest) => (
            <article className="interest-card" key={interest.title}>
              <span aria-hidden="true" />
              <h3>{interest.title}</h3>
              <p>{interest.body}</p>
            </article>
          ))}
        </div>
        <div className="interest-cta">
          <p>전체 14개 관심 분야명과 설명은 소개 페이지에서 확인할 수 있습니다.</p>
          <a className="button button-secondary interest-link" href="https://khlug.org/about">
            관심 분야 전체 보기
          </a>
        </div>
      </div>
    </section>
  );
}
