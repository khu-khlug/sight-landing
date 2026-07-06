interface Activity {
  id: string;
  title: string;
  summary: string;
  body: string;
}

interface ActivitiesProps {
  activities: Activity[];
}

export function Activities({ activities }: ActivitiesProps) {
  const first = activities[0];

  return (
    <section className="section section-muted" id="activities" aria-labelledby="activities-title">
      <div className="section-heading">
        <span className="section-marker" aria-hidden="true" />
        <p className="eyebrow">ACTIVITIES</p>
        <h2 id="activities-title">쿠러그에서 하는 활동</h2>
      </div>
      <div className="activity-panel" data-activity-tabs>
        <div className="activity-tabs" role="tablist" aria-label="활동 유형">
          {activities.map((activity, index) => (
            <button
              className="activity-tab"
              type="button"
              role="tab"
              aria-selected={index === 0}
              aria-controls="activity-content"
              data-activity-id={activity.id}
              key={activity.id}
            >
              {activity.title}
            </button>
          ))}
        </div>
        <article className="activity-content" id="activity-content" tabIndex={-1}>
          <p className="activity-kicker" data-activity-summary>{first.summary}</p>
          <h3 data-activity-title>{first.title}</h3>
          <p data-activity-body>{first.body}</p>
        </article>
        <script type="application/json" data-activity-data dangerouslySetInnerHTML={{ __html: JSON.stringify(activities) }} />
      </div>
    </section>
  );
}
