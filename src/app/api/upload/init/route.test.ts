import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { POST } from "@/app/api/upload/init/route";

describe("POST /api/upload/init", () => {
  it("returns a signed upload payload for valid documents", async () => {
    const request = new NextRequest("http://localhost/api/upload/init", {
      method: "POST",
      body: JSON.stringify({
        workspaceId: "ws_procurement",
        filename: "teklif-a.pdf",
        mimeType: "application/pdf",
        sizeBytes: 2_849_201
      })
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.documentId).toMatch(/^doc_/);
    expect(body.storagePath).toContain("ws_procurement");
    expect(body.expiresIn).toBe(600);
  });

  it("rejects invalid payloads with a 400 response", async () => {
    const request = new NextRequest("http://localhost/api/upload/init", {
      method: "POST",
      body: JSON.stringify({
        workspaceId: "",
        filename: "x",
        mimeType: "application/pdf",
        sizeBytes: 0
      })
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
  });

  it("falls back to a binary extension when the filename has no suffix", async () => {
    const request = new NextRequest("http://localhost/api/upload/init", {
      method: "POST",
      body: JSON.stringify({
        workspaceId: "ws_procurement",
        filename: "quote-upload",
        mimeType: "application/octet-stream",
        sizeBytes: 512
      })
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.storagePath).toContain("original.bin");
  });
});
