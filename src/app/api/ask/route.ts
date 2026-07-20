import { NextRequest } from "next/server";

import { askRequestSchema } from "@/lib/contracts";
import { createEventStream } from "@/lib/streaming";

export async function POST(request: NextRequest) {
  const payload = askRequestSchema.safeParse(await request.json());

  if (!payload.success) {
    return new Response(JSON.stringify({ error: "Invalid ask payload" }), {
      status: 400,
      headers: {
        "content-type": "application/json"
      }
    });
  }

  const stream = createEventStream([
    {
      event: "run",
      data: {
        status: "started",
        workspaceId: payload.data.workspaceId
      }
    },
    {
      event: "chunk",
      data: {
        short_answer:
          "Teslim suresi ve odeme kosullari retrieval sonucuna gore karsilastirma tablosuna aktariliyor."
      }
    },
    {
      event: "chunk",
      data: {
        evidence: [
          { chunk_id: "chunk_delivery_terms", note: "14 gun teslim ibaresi yakalandi" },
          { chunk_id: "chunk_payment_terms", note: "%35 pesin + 30 gun vade metni bulundu" }
        ]
      }
    }
  ]);

  return new Response(stream, {
    status: 200,
    headers: {
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
      "content-type": "text/event-stream; charset=utf-8"
    }
  });
}
