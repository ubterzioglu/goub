import { NextRequest, NextResponse } from "next/server";

import { compareRequestSchema } from "@/lib/contracts";
import { makeId } from "@/lib/ids";

export async function POST(request: NextRequest) {
  const payload = compareRequestSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid compare payload" }, { status: 400 });
  }

  return NextResponse.json(
    {
      compareJobId: makeId("cmp"),
      status: "queued",
      schema: payload.data.schema
    },
    { status: 202 }
  );
}
