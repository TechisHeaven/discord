import { updateSession, verifyAuth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { decrypt, encrypt } from "./lib/helpers/jwtHandler";
import { jwtDecrypt } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session-token")?.value;

  const verifiedToken =
    token && (await decrypt(token).catch((err) => console.log(err)));

  if (req.nextUrl.pathname.startsWith("/login") && !verifiedToken) {
    return;
  }
  if (req.url.includes("/login") && verifiedToken) {
    return NextResponse.redirect(new URL("/channels/me", req.url));
  }
  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // return await updateSession(req);
}

export const config = {
  matcher: ["/", "/login", "/((?!api|_next|static|public|favicon.ico).*)"],
};
