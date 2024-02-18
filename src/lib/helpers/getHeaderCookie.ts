import { cookies } from "next/headers";

export function getUserTokenCookie() {
  const cookieStore = cookies();
  console.log(cookieStore.getAll());
  const token = cookieStore.get("session-token")!.value;
  return token;
}
