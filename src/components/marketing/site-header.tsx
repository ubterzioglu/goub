import Link from "next/link";

import { marketingNavigation } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">
        <span>GOUB</span>
        <small>Get Out of Busywork.</small>
      </Link>

      <nav className="marketing-nav" aria-label="Marketing">
        {marketingNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
