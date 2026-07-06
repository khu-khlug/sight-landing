const cubeLabels = ["WEB", "AI", "SECURITY", "APP", "UX", "DATA"];

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">경희대학교 중앙 IT 동아리</p>
        <h1 id="hero-title">쿠러그</h1>
        <p className="hero-lead">처음이어도, 전공이 달라도, 함께 배우고 만드는 IT 동아리</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#join">
            가입 신청하기
          </a>
          <a className="button button-secondary" href="#activities">
            활동 알아보기
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true" data-cube-field>
        <div className="cube-stack">
          {cubeLabels.map((label, index) => (
            <span className={`cube cube-${index + 1}`} key={label}>
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
