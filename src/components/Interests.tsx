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
          쿠러그는 웹/어플리케이션 서비스, 보안/해킹, 인공지능/머신러닝, UX/UI 디자인 등 14개 관심 분야를
          기준으로 활동합니다. 전체 분야명과 설명은 소개 페이지에서 확인할 수 있습니다.
        </p>
        <a className="button button-secondary interest-link" href="https://khlug.org/about">
          관심 분야 전체 보기
        </a>
      </div>
    </section>
  );
}
