const plans = [
  {
    name: "Starter",
    description: "Solo users who need upload, ask, summarize, and lightweight export.",
    focus: "Ask, summarize, basic export"
  },
  {
    name: "Pro",
    description: "Small teams running compare-first procurement or ops workflows.",
    focus: "Compare, task generation, richer quotas"
  },
  {
    name: "Enterprise",
    description: "Security-led teams that require SSO, retention controls, and audit logs.",
    focus: "SSO, custom retention, region controls"
  }
];

export default function PricingPage() {
  return (
    <section className="section pricing-layout">
      <div className="section-heading">
        <span className="section-kicker">Pricing spine</span>
        <h1 className="section-title">Value-based packaging for document-heavy teams.</h1>
        <p className="muted">
          The report recommends outcome-driven plans instead of raw token pricing so GOUB
          can price around time saved and decision speed.
        </p>
      </div>

      <div className="feature-grid">
        {plans.map((plan) => (
          <article key={plan.name} className="pricing-card">
            <span className="section-kicker">{plan.name}</span>
            <h2>{plan.focus}</h2>
            <p>{plan.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
