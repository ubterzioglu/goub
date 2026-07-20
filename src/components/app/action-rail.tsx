import { documentActions } from "@/lib/navigation";

export function ActionRail() {
  return (
    <div className="action-rail" aria-label="Belge aksiyonlari">
      {documentActions.map((action) => (
        <button key={action} className="action-pill" type="button">
          {action}
        </button>
      ))}
    </div>
  );
}
