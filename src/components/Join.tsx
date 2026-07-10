export function Join() {
  return (
    <section className="section join-section" id="join" aria-labelledby="join-title">
      <div className="join-copy">
        <p className="eyebrow">JOIN KHLUG</p>
        <h2 id="join-title">쿠러그에서 같이 만들어요.</h2>
      </div>
      <div className="join-content">
        <p>
          <span>경희대학교 학생이라면 전공과 경험에 관계없이 온라인으로 가입을 신청할 수 있습니다.</span>
          <span>신청서 제출 후 간단한 확인 절차를 거쳐 쿠러그 활동을 시작합니다.</span>
        </p>
        <div className="join-actions">
          <a className="button button-primary" href="https://khlug.org/join">
            가입 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
