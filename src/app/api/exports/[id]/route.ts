import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    exportId: id,
    status: "ready",
    downloadUrl: `https://downloads.goub.local/${id}`
  });
}
