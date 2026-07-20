import { compareRows } from "@/lib/mock-data";

export default async function ComparePage({
  params
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  return (
    <section className="content-panel">
      <div className="panel-header">
        <div>
          <span className="section-kicker">Compare job</span>
          <h1>{jobId}</h1>
        </div>
        <span className="pill">Queued by API contract</span>
      </div>

      <div className="compare-table">
        {compareRows.map((row) => (
          <article key={row.key} className="compare-row">
            <div>
              <span className={`severity-pill ${row.severity}`}>{row.severity}</span>
              <h2>{row.label}</h2>
            </div>
            <div className="compare-values">
              {Object.entries(row.values).map(([vendor, value]) => (
                <span key={vendor}>
                  <strong>{vendor}</strong>
                  <br />
                  {value}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
