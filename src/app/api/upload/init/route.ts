import { NextRequest, NextResponse } from "next/server";

import { uploadInitRequestSchema } from "@/lib/contracts";
import { makeId } from "@/lib/ids";

export async function POST(request: NextRequest) {
  const payload = uploadInitRequestSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json(
      {
        error: "Invalid upload payload",
        issues: payload.error.flatten()
      },
      { status: 400 }
    );
  }

  const documentId = makeId("doc");
  const versionId = makeId("dv");
  const filenameParts = payload.data.filename.split(".");
  const extension = filenameParts.length > 1 ? filenameParts.at(-1) ?? "bin" : "bin";

  return NextResponse.json({
    documentId,
    versionId,
    uploadUrl: `https://storage.goub.local/upload/${documentId}`,
    storagePath: `org_demo/${payload.data.workspaceId}/${documentId}/${versionId}/original.${extension}`,
    expiresIn: 600
  });
}
