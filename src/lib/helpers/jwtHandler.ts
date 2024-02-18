import * as jwt from "jsonwebtoken";
import { processEnv } from "./processEnvCustom";
import { SignJWT, jwtVerify } from "jose";

const secretKey = processEnv.SECRET_KEY;

const key = new TextEncoder().encode(secretKey);
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
