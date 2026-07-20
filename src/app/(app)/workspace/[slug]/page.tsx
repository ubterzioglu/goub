import { documents, exportsFeed, tasks, workspace } from "@/lib/mock-data";

const decisionSignals = [
  {
    label: "Priority lane",
    value: "Pricing + lead time mismatch",
    note: "Two suppliers diverge on payment structure."
  },
  {
    label: "Review load",
    value: "12 files active",
    note: "Three are ready for compare, one needs OCR fallback."
  },
  {
    label: "Exec output",
    value: "Latest board pack ready",
    note: "XLSX compare export generated 18 minutes ago."
  }
];

export default async function WorkspacePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="workspace-hero">
      <section className="workspace-header">
        <div className="workspace-hero-copy">
          <span className="section-kicker">Workspace</span>
          <h1 className="workspace-title">{workspace.name}</h1>
          <p className="workspace-copy">
            {workspace.focus}. A premium command surface for {slug} where offers,
            contracts, and exports are staged like final deliverables rather than raw files.
          </p>
          <div className="workspace-command-row">
            <span className="workspace-command-pill">Compare lane</span>
            <span className="workspace-command-pill">Risk highlights</span>
            <span className="workspace-command-pill">Decision exports</span>
          </div>
        </div>

        <article className="workspace-card workspace-callout">
          <span className="section-kicker">Today</span>
          <strong>{workspace.compareWin}</strong>
          <p className="muted">
            Queue health: {workspace.queuedJobs} jobs waiting, {workspace.docsInReview} files
            actively in review.
          </p>
          <div className="callout-grid">
            <span>Boardroom-ready compare</span>
            <span>Premium export quality</span>
          </div>
        </article>
      </section>

      <section className="workspace-stats">
        <article className="workspace-card">
          <span className="muted">Documents in review</span>
          <strong>{workspace.docsInReview}</strong>
        </article>
        <article className="workspace-card">
          <span className="muted">Queued jobs</span>
          <strong>{workspace.queuedJobs}</strong>
        </article>
        <article className="workspace-card">
          <span className="muted">Weekly volume</span>
          <strong>{workspace.weeklyVolume}</strong>
        </article>
      </section>

      <section className="workspace-signals">
        {decisionSignals.map((signal) => (
          <article key={signal.label} className="workspace-signal-card">
            <span className="section-kicker">{signal.label}</span>
            <strong>{signal.value}</strong>
            <p>{signal.note}</p>
          </article>
        ))}
      </section>

      <section className="insight-grid">
        <article className="content-panel">
          <div className="panel-header">
            <div>
              <span className="section-kicker">Documents</span>
              <h2>Fresh uploads</h2>
            </div>
            <span className="pill">Compare-ready</span>
          </div>
          <div className="doc-grid">
            {documents.map((document) => (
              <div key={document.id} className="doc-card">
                <strong>{document.title}</strong>
                <div className="panel-meta">
                  <span className={`status-pill ${document.status}`}>{document.status}</span>
                  <span className="muted">{document.type}</span>
                </div>
                <p className="muted">{document.highlights.join(" / ")}</p>
                <div className="doc-card-footer">
                  <span>{document.supplier}</span>
                  <span>{document.uploadedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="content-panel">
          <div className="panel-header">
            <div>
              <span className="section-kicker">Tasks</span>
              <h2>Generated follow-ups</h2>
            </div>
            <span className="pill">{tasks.length} active</span>
          </div>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <strong>{task.title}</strong>
                <p className="muted">
                  {task.owner} · due {task.dueDate} · source {task.source}
                </p>
                <span className="task-status-tag">{task.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="content-panel">
          <div className="panel-header">
            <div>
              <span className="section-kicker">Exports</span>
              <h2>Decision-ready output lane</h2>
            </div>
          </div>
          <ul className="export-list">
            {exportsFeed.map((item) => (
              <li key={item.id} className="export-item">
                <strong>
                  {item.format.toUpperCase()} · {item.source}
                </strong>
                <p className="muted">
                  {item.status} · {item.createdAt}
                </p>
                <span className="export-badge">Ready for handoff</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
