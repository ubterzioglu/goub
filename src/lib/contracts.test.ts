import { describe, expect, it } from "vitest";

import {
  askRequestSchema,
  compareRequestSchema,
  uploadInitRequestSchema
} from "@/lib/contracts";

describe("request contracts", () => {
  it("accepts a valid upload init payload", () => {
    const payload = uploadInitRequestSchema.parse({
      workspaceId: "ws_procurement",
      filename: "teklif-a.pdf",
      mimeType: "application/pdf",
      sizeBytes: 2_849_201
    });

    expect(payload.workspaceId).toBe("ws_procurement");
  });

  it("rejects compare requests with fewer than two versions", () => {
    const result = compareRequestSchema.safeParse({
      workspaceId: "ws_procurement",
      documentVersionIds: ["dv_1"],
      schema: "supplier_quote_v1",
      outputFormat: "table"
    });

    expect(result.success).toBe(false);
  });

  it("requires grounded questions for ask flows", () => {
    const payload = askRequestSchema.parse({
      workspaceId: "ws_procurement",
      documentIds: ["doc_1"],
      question: "Teslim suresi nedir?",
      mode: "grounded"
    });

    expect(payload.mode).toBe("grounded");
  });
});
