import { NextRequest, NextResponse } from "next/server";

import { uploadCompleteRequestSchema } from "@/lib/contracts";
import { makeId } from "@/lib/ids";

export async function POST(request: NextRequest) {
  const payload = uploadCompleteRequestSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid completion payload" }, { status: 400 });
  }

  return NextResponse.json(
    {
      documentId: payload.data.documentId,
      parseJobId: makeId("job"),
      status: "queued"
    },
    { status: 202 }
  );
}
