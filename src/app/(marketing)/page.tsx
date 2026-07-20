import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Compare-first AI workspace</span>
            <h1>Get Out of Busywork.</h1>
            <p className="hero-copy">
              GOUB helps teams turn teklifleri, sozlesmeleri, tablolari ve toplanti
              notlarini into comparable, traceable, exportable outputs in minutes.
            </p>
            <div className="hero-actions">
              <Link href="/login" className="primary-link">
                Ucretsiz Deneyin
              </Link>
              <Link href="/docs" className="secondary-link">
                Mimariyi Gor
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <span className="section-kicker">MVP-1</span>
            <h2>Quote comparison that produces real buying decisions.</h2>
            <p className="muted">
              Upload multiple supplier files, normalize pricing and delivery terms, and
              export one executive-ready table with risks and follow-up tasks.
            </p>
            <div className="stat-grid">
              <div className="stat">
                <span className="muted">First response</span>
                <strong>{"< 2s"}</strong>
              </div>
              <div className="stat">
                <span className="muted">Primary stack</span>
                <strong>Next + Supabase</strong>
              </div>
              <div className="stat">
                <span className="muted">Worker lane</span>
                <strong>Cloud Run</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="section-kicker">Why this shape</span>
          <h2 className="section-title">One document model, many outcomes.</h2>
          <p className="muted">
            The report recommends a narrow wedge first, then layered expansion across ask,
            summarize, contract review, table extraction, task generation, and export.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="section-kicker">MVP-1</span>
            <strong>Compare</strong>
            <ul>
              <li>Multi-file upload</li>
              <li>Canonical row matching</li>
              <li>Pricing and delivery diffs</li>
            </ul>
          </article>
          <article className="feature-card">
            <span className="section-kicker">MVP-2</span>
            <strong>Ask + Summarize</strong>
            <ul>
              <li>Grounded answers with evidence</li>
              <li>Section-aware summaries</li>
              <li>Streaming UX</li>
            </ul>
          </article>
          <article className="feature-card">
            <span className="section-kicker">MVP-3</span>
            <strong>Review + Extract</strong>
            <ul>
              <li>Risk highlights</li>
              <li>Table extraction</li>
              <li>Task generation and export</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
