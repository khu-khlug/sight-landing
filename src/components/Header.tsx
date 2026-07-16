import { BrandMark } from "./BrandMark";

interface NavItem {
  label: string;
  href: string;
  variant?: "primary" | "login";
}

interface HeaderProps {
  navItems: NavItem[];
}

export function Header({ navItems }: HeaderProps) {
  const menuItems = navItems.filter((item) => !item.variant);
  const actionItems = navItems.filter((item) => item.variant);

  return (
    <header className="site-header">
      <a className="site-logo" href="/" aria-label="쿠러그 홈">
        <BrandMark />
      </a>
      <nav className="site-nav" aria-label="주요 메뉴">
        <div className="nav-menu">
          {menuItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          {actionItems.map((item) => (
            <a
              key={item.href}
              className={`nav-link nav-link-${item.variant}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
