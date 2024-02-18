"use server";

import { decrypt } from "@/lib/helpers/jwtHandler";
import { processEnv } from "@/lib/helpers/processEnvCustom";
import { cookies } from "next/headers";

export async function HandleGetUser() {
  const token = await getSession();

  try {
    const dynamicData = await fetch(`${processEnv.BASE_URL}/api/auth`, {
      headers: {
        authorization: JSON.stringify(token),
      },
      cache: "no-store",
      method: "GET",
    });

    // if (dynamicData.status === 200) {
    // }
    return dynamicData.json();
  } catch (error) {
    throw error;
  }
}

export async function getSession() {
  const session = cookies().get("session-token")?.value;
  if (!session) {
    return;
  }
  return decrypt(session);
}

export async function removeSession() {
  cookies().delete("session-token");
}
