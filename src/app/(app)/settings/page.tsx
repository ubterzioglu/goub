export default function SettingsPage() {
  return (
    <section className="content-panel">
      <div className="panel-header">
        <div>
          <span className="section-kicker">Settings</span>
          <h1>Security-first defaults</h1>
        </div>
      </div>
      <div className="settings-grid">
        <article className="settings-card">
          <strong>Retention policies</strong>
          <p className="muted">Raw files 90 days, parsed chunks 180 days, audit logs 365 days.</p>
        </article>
        <article className="settings-card">
          <strong>Access model</strong>
          <p className="muted">Supabase Auth for identity, org and workspace membership for authorization.</p>
        </article>
        <article className="settings-card">
          <strong>Private by default</strong>
          <p className="muted">Signed URLs, RLS, and worker-isolated processing are the baseline.</p>
        </article>
      </div>
    </section>
  );
}
