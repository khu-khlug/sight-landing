import { BrandMark } from "./BrandMark";

interface NavItem {
  label: string;
  href: string;
  variant?: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="site-logo" href="/" aria-label="쿠러그 홈">
        <BrandMark />
      </a>
      <nav className="site-nav" aria-label="주요 메뉴">
        {navItems.map((item) => (
          <a
            key={item.href}
            className={item.variant === "primary" ? "nav-link nav-link-primary" : "nav-link"}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
