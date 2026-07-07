import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <BrandMark />
      <div className="footer-copy">
        <p>코딩으로 꿈을 펼치는 세상, 프로그래밍으로 만들어질 미래</p>
        <address>17104 경기도 용인시 기흥구 덕영대로 1732, 경희대학교 국제캠퍼스 학생회관 405호</address>
      </div>
      <a href="#top">맨 위로</a>
    </footer>
  );
}
