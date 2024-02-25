"use server";
import { decrypt } from "@/lib/helpers/jwtHandler";
import { processEnv } from "@/lib/helpers/processEnvCustom";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function serverCreate(formData: any) {
  try {
    const token = await cookies().get("session-token")?.value;
    const response = await fetch(`${processEnv.BASE_URL}/api/server`, {
      method: "POST",
      headers: {
        "session-token": JSON.stringify(token),
        // "Content-Type": "multipart/form-data",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    revalidateTag("servers");

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

//fetch all servers list
export async function serversFetch() {
  try {
    const token = await cookies().get("session-token")?.value;
    const response = await fetch(`${processEnv.BASE_URL}/api/server`, {
      next: {
        tags: ["servers"],
      },
      cache: "no-cache",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "session-token": JSON.stringify(token),
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getSideBarChannels(channelId: String) {
  try {
    const response = await fetch(
      `${processEnv.BASE_URL}/api/server/channels?id=${channelId}`,
      {
        next: {
          tags: ["channels"],
        },
        cache: "no-cache",
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    return data[0];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
