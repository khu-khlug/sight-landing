import type { RecentPost } from "../lib/recent-posts";

interface RecentPostsProps {
  posts: RecentPost[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="section section-muted" id="recent" aria-labelledby="recent-title">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-marker" aria-hidden="true" />
          <p className="eyebrow">RECORDS</p>
          <h2 id="recent-title">활동 기록</h2>
        </div>
        <div className="section-actions">
          <a className="text-link" href="https://hello.khlug.org/">
            Hello 블로그 보기
          </a>
          <a className="text-link" href="https://www.instagram.com/khu_khlug">
            Instagram 보기
          </a>
        </div>
      </div>
      <div className="post-grid">
        {posts.map((post) => (
          <a className="post-card" href={post.href} key={post.title}>
            <span className="post-bar" aria-hidden="true" />
            <p>{post.category}</p>
            <h3>{post.title}</h3>
            <time>{post.date}</time>
          </a>
        ))}
      </div>
    </section>
  );
}
