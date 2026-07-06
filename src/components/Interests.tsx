interface Interest {
  label: string;
  description: string;
}

interface InterestsProps {
  interests: Interest[];
}

export function Interests({ interests }: InterestsProps) {
  const first = interests[0];

  return (
    <section className="section" id="interests" aria-labelledby="interests-title">
      <div className="section-heading">
        <span className="section-marker" aria-hidden="true" />
        <p className="eyebrow">FIELDS</p>
        <h2 id="interests-title">관심 분야가 다양해도 괜찮아요</h2>
      </div>
      <div className="interest-shell" data-interest-picker>
        <div className="interest-chips" aria-label="관심 분야">
          {interests.map((interest, index) => (
            <button
              className="interest-chip"
              type="button"
              aria-pressed={index === 0}
              data-interest-label={interest.label}
              key={interest.label}
            >
              {interest.label}
            </button>
          ))}
        </div>
        <p className="interest-description" data-interest-description>
          {first.description}
        </p>
        <script type="application/json" data-interest-data dangerouslySetInnerHTML={{ __html: JSON.stringify(interests) }} />
      </div>
    </section>
  );
}
