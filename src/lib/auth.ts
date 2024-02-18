import { jwtVerify, SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { decrypt, encrypt } from "./helpers/jwtHandler";

const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret || secret.length === 0) {
    throw new Error("The environment variable JWT_SECRET_KEY is not set");
  }

  return secret;
};

interface UserJwtPayload {
  jti: string;
  iat: number;
}

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );

    return verified.payload as UserJwtPayload;
  } catch (error) {
    throw new Error(error + "Your token has Expired");
  }
};

export const updateSession = async (request: NextRequest) => {
  const token = request.cookies.get("session-token")?.value;

  if (!token) {
    return;
  }

  const parsed = await decrypt(token);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session-token",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
};
