import Link from "next/link";

import { appNavigation } from "@/lib/navigation";

export function AppSidebar() {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-kicker">GOUB</span>
        <h2>Workspace OS</h2>
        <p>Compare-first workflow for documents that need action, not another chat tab.</p>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        {appNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href} className="sidebar-link">
              <Icon aria-hidden="true" size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
