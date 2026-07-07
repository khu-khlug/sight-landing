interface Post {
  category: string;
  title: string;
  date: string;
  href: string;
}

interface RecentPostsProps {
  posts: Post[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="section section-muted" id="recent" aria-labelledby="recent-title">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-marker" aria-hidden="true" />
          <p className="eyebrow">RECENT</p>
          <h2 id="recent-title">최근 활동</h2>
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
