import { NextRequest, NextResponse } from "next/server";

import { exportRequestSchema } from "@/lib/contracts";
import { makeId } from "@/lib/ids";

export async function POST(request: NextRequest) {
  const payload = exportRequestSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid export payload" }, { status: 400 });
  }

  return NextResponse.json(
    {
      exportId: makeId("exp"),
      status: "processing",
      downloadPath: `${payload.data.workspaceId}/${payload.data.sourceType}/${payload.data.sourceId}.${payload.data.format}`
    },
    { status: 202 }
  );
}
