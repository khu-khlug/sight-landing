const cubeLabels = ["WEB", "AI", "SECURITY", "APP", "UX", "DATA"];

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">경희대학교 중앙 IT 동아리</p>
        <h1 id="hero-title">쿠러그</h1>
        <p className="hero-lead">
          코딩으로 꿈을 펼치는 세상
          <br />
          프로그래밍으로 만들어질 미래
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#join">
            가입 신청하기
          </a>
          <a className="button button-secondary" href="https://khlug.org/about">
            쿠러그 알아보기
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
