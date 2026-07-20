import Link from "next/link";

import { documents } from "@/lib/mock-data";

export default function DocumentsPage() {
  return (
    <section className="content-panel">
      <div className="panel-header">
        <div>
          <span className="section-kicker">Inbox</span>
          <h1>Documents</h1>
        </div>
        <span className="pill">Private bucket flow</span>
      </div>

      <div className="doc-grid">
        {documents.map((document) => (
          <Link key={document.id} href={`/documents/${document.id}`} className="doc-card">
            <strong>{document.title}</strong>
            <p className="muted">
              {document.supplier} · {document.uploadedAt}
            </p>
            <p className="muted">{document.highlights.join(" / ")}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
