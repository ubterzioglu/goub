import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPrefixes = [
  "/workspace",
  "/documents",
  "/compare",
  "/tasks",
  "/exports",
  "/usage",
  "/settings"
];

export function middleware(request: NextRequest) {
  const isProtected = protectedPrefixes.some((prefix) =>
    request.nextUrl.pathname.startsWith(prefix)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const session = request.cookies.get("goub-session");

  if (session?.value) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/workspace/:path*", "/documents/:path*", "/compare/:path*", "/tasks", "/exports", "/usage", "/settings"]
};
