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
        <h1 className="section-title">Priced like a serious workflow, not a toy AI tab.</h1>
        <p className="muted">
          GOUB should be sold around decision speed, export quality, and reduced manual
          review hours rather than raw tokens.
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
