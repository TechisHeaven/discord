import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/helpers/jwtHandler";
import { updateSession } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session-token")?.value;

  const verifiedToken =
    token && (await decrypt(token).catch((err) => console.log(err)));

  if (
    (req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register")) &&
    !verifiedToken
  ) {
    return;
  }
  if (
    req.url.includes("/login") ||
    (req.url.includes("/register") && verifiedToken)
  ) {
    return NextResponse.redirect(new URL("/channels/me", req.url));
  }
  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return await updateSession(req);
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/((?!api|_next|static|public|favicon.ico).*)",
  ],
};
