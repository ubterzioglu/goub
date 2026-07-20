import { documents, exportsFeed, tasks, workspace } from "@/lib/mock-data";

export default async function WorkspacePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="workspace-hero">
      <section className="workspace-header">
        <div>
          <span className="section-kicker">Workspace</span>
          <h1 className="workspace-title">{workspace.name}</h1>
          <p className="workspace-copy">
            {workspace.focus}. Report-driven starter shell for {slug} with compare-first
            UX, protected routes, and API entry points.
          </p>
        </div>

        <article className="workspace-card">
          <span className="section-kicker">Today</span>
          <strong>{workspace.compareWin}</strong>
          <p className="muted">
            Queue health: {workspace.queuedJobs} jobs waiting, {workspace.docsInReview} files
            actively in review.
          </p>
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
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
