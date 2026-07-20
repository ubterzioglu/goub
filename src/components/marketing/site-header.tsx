import Link from "next/link";

import { marketingNavigation } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">
        <span>
          <span className="wm-g">G</span>
          <span className="wm-o">O</span>
          <span className="wm-u">U</span>
          <span className="wm-b">B</span>
        </span>
        <small>Document intelligence for serious teams.</small>
      </Link>

      <div className="header-actions">
        <nav className="marketing-nav" aria-label="Marketing">
          {marketingNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/login" className="header-cta">
          Open Workspace
        </Link>
      </div>
    </header>
  );
}
