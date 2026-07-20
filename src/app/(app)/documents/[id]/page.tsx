import { ActionRail } from "@/components/app/action-rail";
import { getDocumentById } from "@/lib/mock-data";

export default async function DocumentPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const document = getDocumentById(id);

  return (
    <div className="insight-grid">
      <section className="content-panel">
        <div className="panel-header">
          <div>
            <span className="section-kicker">Document detail</span>
            <h1>{document.title}</h1>
          </div>
          <span className={`status-pill ${document.status}`}>{document.status}</span>
        </div>

        <div className="panel-meta">
          <span className="pill">{document.type}</span>
          <span className="muted">{document.supplier}</span>
          <span className="muted">{document.uploadedAt}</span>
        </div>

        <ActionRail />

        <article className="summary-card">
          <span className="section-kicker">Extracted facts</span>
          <ul className="summary-list">
            {document.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="content-panel">
        <div className="panel-header">
          <div>
            <span className="section-kicker">Pipeline</span>
            <h2>What happens next</h2>
          </div>
        </div>
        <div className="stack-grid">
          <article className="summary-card">
            <strong>Upload + metadata</strong>
            <p>Signed upload, storage path, and document version creation.</p>
          </article>
          <article className="summary-card">
            <strong>Parse + normalize</strong>
            <p>Queue-backed extraction, OCR fallback, and canonical chunk storage.</p>
          </article>
          <article className="summary-card">
            <strong>Retrieve + answer</strong>
            <p>Hybrid search, grounded prompt, and Claude streaming response.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
