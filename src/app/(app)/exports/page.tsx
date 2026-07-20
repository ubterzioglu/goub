import { exportsFeed } from "@/lib/mock-data";

export default function ExportsPage() {
  return (
    <section className="content-panel">
      <div className="panel-header">
        <div>
          <span className="section-kicker">Exports</span>
          <h1>Output lane</h1>
        </div>
      </div>

      <ul className="export-list">
        {exportsFeed.map((item) => (
          <li key={item.id} className="export-item">
            <strong>
              {item.format.toUpperCase()} from {item.source}
            </strong>
            <p className="muted">
              {item.status} · {item.createdAt}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
