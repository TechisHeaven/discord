import { NextRequest, NextResponse } from "next/server";
import { decrypt, encrypt } from "./helpers/jwtHandler";

export const updateSession = async (request: NextRequest) => {
  const token = request.cookies.get("session-token")?.value;

  if (!token) {
    return;
  }

  const parsed = await decrypt(token);
  parsed.expires = new Date(Date.now() + 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds 1 hour if use 10 * 1000 then its 10 seconds
  const res = NextResponse.next();
  res.cookies.set({
    name: "session-token",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
};
