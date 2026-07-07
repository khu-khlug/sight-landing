interface Step {
  title: string;
  body: string;
}

interface JoinProps {
  steps: Step[];
}

export function Join({ steps }: JoinProps) {
  return (
    <section className="section join-section" id="join" aria-labelledby="join-title">
      <div className="join-copy">
        <span className="section-marker" aria-hidden="true" />
        <p className="eyebrow">JOIN</p>
        <h2 id="join-title">함께 시작해요</h2>
        <p>
          경희대학교 학생이라면 온라인 신청 후 검토와 면접 절차를 거쳐 활동을 시작할 수 있습니다.
          궁금한 점은 이메일로 문의해주세요.
        </p>
        <div className="join-actions">
          <a className="button button-primary" href="https://khlug.org/join">
            가입 신청하기
          </a>
          <a className="text-link" href="mailto:we_are@khlug.org">
            문의: we_are@khlug.org
          </a>
        </div>
      </div>
      <ol className="join-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
