interface AudienceCard {
  title: string;
  body: string;
}

interface AudienceProps {
  cards: AudienceCard[];
}

export function Audience({ cards }: AudienceProps) {
  return (
    <section className="section" id="audience" aria-labelledby="audience-title">
      <div className="section-heading">
        <span className="section-marker" aria-hidden="true" />
        <p className="eyebrow">WHO CAN JOIN</p>
        <h2 id="audience-title">이런 사람에게 열려 있어요</h2>
      </div>
      <div className="audience-grid">
        {cards.map((card) => (
          <article className="block-card" key={card.title}>
            <span className="card-cube" aria-hidden="true" />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
