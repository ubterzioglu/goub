import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const redirectTo = (formData.get("redirectTo") as string | null) ?? "/workspace/atlas-procurement";
  const email = (formData.get("email") as string | null) ?? "demo@goub.net";

  const response = NextResponse.redirect(new URL(redirectTo, request.url));
  response.cookies.set("goub-session", email, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });

  return response;
}
