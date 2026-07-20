const docsSections = [
  {
    title: "Web tier",
    body: "Next.js App Router handles the marketing site, auth pages, workspace shell, BFF routes, and streaming UI."
  },
  {
    title: "Data and auth",
    body: "Supabase provides Postgres, Auth, Storage, RLS, GraphQL, and queue-backed coordination."
  },
  {
    title: "Heavy processing",
    body: "Cloud Run workers own OCR, office conversion, normalization, embeddings, and export generation."
  }
];

export default function DocsPage() {
  return (
    <section className="section docs-layout">
      <div className="section-heading">
        <span className="section-kicker">Architecture</span>
        <h1 className="section-title">The operating spine behind the premium surface.</h1>
        <p className="muted">
          The frontend can look refined because the stack underneath stays disciplined:
          clean boundaries, private storage, and a dedicated worker lane for heavy jobs.
        </p>
      </div>

      <div className="docs-flow">
        {docsSections.map((section, index) => (
          <article key={section.title} className="docs-step">
            <span className="section-kicker">Step 0{index + 1}</span>
            <strong>{section.title}</strong>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
