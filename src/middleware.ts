import { verifyAuth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session-token")?.value;

  const verifiedToken =
    token && (await verifyAuth(token).catch((err) => console.log(err)));

  if (req.nextUrl.pathname.startsWith("/login") && !verifiedToken) {
    return;
  }
  if (req.url.includes("/login") && verifiedToken) {
    return NextResponse.redirect(new URL("/channels/me", req.url));
  }
  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/", "/login", "/((?!api|_next|static|public|favicon.ico).*)"],
};
