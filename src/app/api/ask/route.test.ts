import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { POST } from "@/app/api/ask/route";

describe("POST /api/ask", () => {
  it("returns an SSE stream for grounded ask requests", async () => {
    const request = new NextRequest("http://localhost/api/ask", {
      method: "POST",
      body: JSON.stringify({
        workspaceId: "ws_procurement",
        documentIds: ["doc_1"],
        question: "Teslim suresi ve odeme kosullari nedir?",
        mode: "grounded"
      })
    });

    const response = await POST(request);
    const reader = response.body?.getReader();

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/event-stream");
    expect(reader).toBeTruthy();
  });

  it("rejects invalid ask payloads with a 400 response", async () => {
    const request = new NextRequest("http://localhost/api/ask", {
      method: "POST",
      body: JSON.stringify({
        workspaceId: "ws_procurement",
        documentIds: [],
        question: "kisa",
        mode: "grounded"
      })
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Invalid ask payload");
  });
});
