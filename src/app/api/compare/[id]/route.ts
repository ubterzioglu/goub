import { NextRequest, NextResponse } from "next/server";

import { compareRows } from "@/lib/mock-data";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    compareJobId: id,
    status: "ready",
    rows: compareRows
  });
}
