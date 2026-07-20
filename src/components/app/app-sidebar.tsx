import Link from "next/link";

import { appNavigation } from "@/lib/navigation";

export function AppSidebar() {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-kicker">
          <span className="wm-g">G</span>
          <span className="wm-o">O</span>
          <span className="wm-u">U</span>
          <span className="wm-b">B</span>
        </span>
        <h2>Executive Workspace</h2>
        <p>Premium document operations for procurement, legal review, and high-stakes back office work.</p>
      </div>

      <div className="sidebar-insight">
        <span className="section-kicker">Mode</span>
        <strong>Compare-first</strong>
        <p>Every document should move toward a decision, not sit inside another AI chat transcript.</p>
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

      <div className="sidebar-footer">
        <span className="sidebar-kicker">Security posture</span>
        <div className="sidebar-security-row">
          <span>Private storage</span>
          <span>RLS</span>
          <span>Audit trail</span>
        </div>
      </div>
    </aside>
  );
}
