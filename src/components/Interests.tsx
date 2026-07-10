const interestGroups = [
  {
    title: "서비스와 경험",
    body: "사용자와 만나는 제품과 인터페이스를 만듭니다.",
    fields: ["웹/어플리케이션 서비스", "게임/가상현실", "UX/UI 디자인"],
  },
  {
    title: "데이터와 지능",
    body: "데이터를 다루고, 모델과 알고리즘으로 문제를 풉니다.",
    fields: ["인공지능/머신러닝", "데이터 사이언스/통계학", "알고리즘/전산수학", "영상처리/시각화"],
  },
  {
    title: "시스템과 인프라",
    body: "소프트웨어가 안정적으로 움직이는 기반을 탐구합니다.",
    fields: ["보안/해킹", "데이터베이스/클라우드", "네트워크/통신", "운영체제/미들웨어"],
  },
  {
    title: "하드웨어와 로우레벨",
    body: "기계와 회로, 하드웨어 가까이에서 동작하는 기술을 다룹니다.",
    fields: ["사물인터넷/로봇", "어셈블리/전처리", "하드웨어/전자회로"],
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
        <p className="interest-description">
          쿠러그의 회원은 아래 14개 관심 분야 중 하나 이상을 바탕으로 스터디, 프로젝트,
          세미나를 함께 만들어갑니다.
        </p>
        <div className="interest-grid" aria-label="쿠러그 14개 관심 분야">
          {interestGroups.map((interest) => (
            <article className="interest-card" key={interest.title}>
              <span aria-hidden="true" />
              <h3>{interest.title}</h3>
              <p>{interest.body}</p>
              <ul className="interest-tags" aria-label={`${interest.title} 관심 분야`}>
                {interest.fields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="interest-cta">
          <p>각 분야의 자세한 설명은 쿠러그 소개 페이지에서 확인할 수 있습니다.</p>
          <a className="button button-secondary interest-link" href="https://khlug.org/about">
            관심 분야 전체 보기
          </a>
        </div>
      </div>
    </section>
  );
}
