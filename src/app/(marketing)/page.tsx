import Link from "next/link";

const premiumSignals = [
  "Executive-ready compare sheets in minutes",
  "Grounded answers with traceable evidence",
  "Exports that teams can actually ship"
];

const pillars = [
  {
    label: "Compare-first core",
    title: "A buying room, not another chatbot.",
    body: "Supplier files, contracts, and spreadsheets converge into one structured decision surface with price, lead time, warranty, and exceptions aligned."
  },
  {
    label: "Private by default",
    title: "Security language that enterprise buyers expect.",
    body: "Tenant-aware storage, RLS, audit logs, retention controls, and a server-side AI boundary keep document handling deliberate instead of casual."
  },
  {
    label: "Operational outputs",
    title: "Every answer ends in an action.",
    body: "Ask, summarize, review, export, and task generation are treated like one workflow so work can leave the interface in a usable format."
  }
];

const workflow = [
  {
    step: "01",
    title: "Ingest",
    body: "Upload PDF, DOCX, XLSX, and scanned files into one private workspace."
  },
  {
    step: "02",
    title: "Normalize",
    body: "Parse rows, clauses, payment terms, tables, and entities into a stable compare schema."
  },
  {
    step: "03",
    title: "Decide",
    body: "Surface deltas, risks, executive summaries, and exportable outputs without manual copy-paste."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero premium-hero">
        <div className="hero-grid premium-hero-grid">
          <div className="hero-copy-block">
            <span className="eyebrow">Luxury-grade document operations</span>
            <h1>Make dense documents feel boardroom clean.</h1>
            <p className="hero-copy">
              GOUB is a premium workspace for teams that need supplier offers, contracts,
              spreadsheets, and meeting notes to collapse into one elegant decision system.
            </p>
            <div className="hero-actions">
              <Link href="/login" className="primary-link">
                Enter the Workspace
              </Link>
              <Link href="/pricing" className="secondary-link">
                View Plans
              </Link>
            </div>
            <div className="signal-row">
              {premiumSignals.map((signal) => (
                <span key={signal} className="signal-pill">
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-card premium-card">
            <div className="card-topline">
              <span className="section-kicker">Signature workflow</span>
              <span className="card-tag">Procurement / Ops / Legal</span>
            </div>
            <h2>Quote comparison that looks like a final deliverable.</h2>
            <p className="muted">
              The first impression should already feel shippable: aligned supplier rows,
              highlighted risk, traceable evidence, and one export-ready table.
            </p>
            <div className="hero-scoreboard">
              <div className="score-card">
                <span className="muted">Decision lag</span>
                <strong>11 min</strong>
              </div>
              <div className="score-card">
                <span className="muted">Lead surface</span>
                <strong>3 docs / 1 view</strong>
              </div>
              <div className="score-card">
                <span className="muted">Export quality</span>
                <strong>Board-ready</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="proof-band">
          <div className="proof-item">
            <span className="section-kicker">Response feel</span>
            <strong>{"< 2s first token"}</strong>
          </div>
          <div className="proof-item">
            <span className="section-kicker">Design principle</span>
            <strong>Blue / Red / Yellow / Green</strong>
          </div>
          <div className="proof-item">
            <span className="section-kicker">Architecture spine</span>
            <strong>Next + Supabase + worker lane</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="section-kicker">Why it feels expensive</span>
          <h2 className="section-title">One sharp workflow, then a wider operating system.</h2>
          <p className="muted">
            GOUB should not feel like a tool shelf. It should feel like a disciplined room
            where documents become decisions, then actions, then exported outcomes.
          </p>
        </div>

        <div className="signature-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="feature-card feature-card-luxury">
              <span className="section-kicker">{pillar.label}</span>
              <strong>{pillar.title}</strong>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-showcase">
        <div className="section-heading">
          <span className="section-kicker">Flow</span>
          <h2 className="section-title">The premium experience is the reduction of clutter.</h2>
        </div>
        <div className="workflow-grid">
          {workflow.map((item) => (
            <article key={item.step} className="workflow-stage">
              <span className="workflow-step">{item.step}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
