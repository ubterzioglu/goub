export default function UsagePage() {
  return (
    <section className="content-panel">
      <div className="panel-header">
        <div>
          <span className="section-kicker">Usage</span>
          <h1>Metering and guardrails</h1>
        </div>
      </div>
      <div className="usage-grid">
        <article className="usage-card">
          <span className="muted">Token discipline</span>
          <strong>Prompt caching on</strong>
        </article>
        <article className="usage-card">
          <span className="muted">Async lane</span>
          <strong>Batch-ready exports</strong>
        </article>
        <article className="usage-card">
          <span className="muted">Retrieval</span>
          <strong>Hybrid FTS + vector</strong>
        </article>
      </div>
    </section>
  );
}
