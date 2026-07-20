export type WorkspaceSummary = {
  slug: string;
  name: string;
  focus: string;
  compareWin: string;
  weeklyVolume: string;
  docsInReview: number;
  queuedJobs: number;
};

export type DocumentSummary = {
  id: string;
  versionId: string;
  title: string;
  supplier: string;
  type: string;
  status: "ready" | "processing" | "queued";
  uploadedAt: string;
  highlights: string[];
};

export type CompareRow = {
  key: string;
  label: string;
  severity: "low" | "medium" | "high";
  values: Record<string, string>;
};

export type TaskSummary = {
  id: string;
  title: string;
  owner: string;
  dueDate: string;
  status: "open" | "review" | "done";
  source: string;
};

export type ExportSummary = {
  id: string;
  format: "csv" | "xlsx" | "pdf" | "json";
  status: "ready" | "processing";
  source: string;
  createdAt: string;
};

export const workspace: WorkspaceSummary = {
  slug: "atlas-procurement",
  name: "Atlas Procurement",
  focus: "Compare-first procurement workspace",
  compareWin: "3 teklif 11 dakikada tek tabloya indi",
  weeklyVolume: "138 belge / hafta",
  docsInReview: 12,
  queuedJobs: 4
};

export const documents: DocumentSummary[] = [
  {
    id: "doc_ankara_steel",
    versionId: "dv_ankara_steel_v1",
    title: "Ankara Steel - Q3 Teklif",
    supplier: "Ankara Steel",
    type: "PDF",
    status: "ready",
    uploadedAt: "2026-07-20 09:15",
    highlights: ["14 gun teslim", "%35 pesin", "2 yil garanti"]
  },
  {
    id: "doc_meridyen_logistics",
    versionId: "dv_meridyen_logistics_v1",
    title: "Meridyen Logistics - Sevkiyat Paketi",
    supplier: "Meridyen Logistics",
    type: "DOCX",
    status: "ready",
    uploadedAt: "2026-07-20 10:05",
    highlights: ["FOB Izmir", "21 gun teslim", "sigorta dahil degil"]
  },
  {
    id: "doc_nova_metal",
    versionId: "dv_nova_metal_v1",
    title: "Nova Metal - Revize Teklif",
    supplier: "Nova Metal",
    type: "XLSX",
    status: "processing",
    uploadedAt: "2026-07-20 10:22",
    highlights: ["Satir esleme calisiyor", "odeme kosulu belirsiz"]
  }
];

export const compareRows: CompareRow[] = [
  {
    key: "delivery_time",
    label: "Teslim suresi",
    severity: "high",
    values: {
      "Ankara Steel": "14 gun",
      "Meridyen Logistics": "21 gun",
      "Nova Metal": "18 gun"
    }
  },
  {
    key: "payment_terms",
    label: "Odeme kosulu",
    severity: "high",
    values: {
      "Ankara Steel": "%35 pesin, 30 gun vade",
      "Meridyen Logistics": "%50 pesin",
      "Nova Metal": "Belge icinde net degil"
    }
  },
  {
    key: "warranty",
    label: "Garanti",
    severity: "medium",
    values: {
      "Ankara Steel": "24 ay",
      "Meridyen Logistics": "12 ay",
      "Nova Metal": "18 ay"
    }
  }
];

export const tasks: TaskSummary[] = [
  {
    id: "task_1",
    title: "Nova Metal odeme kosulunu dogrula",
    owner: "Ceren",
    dueDate: "2026-07-21",
    status: "open",
    source: "Compare cmp_atlas_q3"
  },
  {
    id: "task_2",
    title: "Meridyen sevkiyat sigortasi icin ek teklif iste",
    owner: "Mert",
    dueDate: "2026-07-22",
    status: "review",
    source: "Document doc_meridyen_logistics"
  }
];

export const exportsFeed: ExportSummary[] = [
  {
    id: "exp_1",
    format: "xlsx",
    status: "ready",
    source: "Compare cmp_atlas_q3",
    createdAt: "2026-07-20 11:40"
  },
  {
    id: "exp_2",
    format: "pdf",
    status: "processing",
    source: "Contract review doc_ankara_steel",
    createdAt: "2026-07-20 11:48"
  }
];

export function getDocumentById(id: string) {
  return documents.find((document) => document.id === id) ?? documents[0];
}
