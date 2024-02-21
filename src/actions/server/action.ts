"use server";
import { decrypt } from "@/lib/helpers/jwtHandler";
import { processEnv } from "@/lib/helpers/processEnvCustom";
import { cookies } from "next/headers";

export async function serverCreate(formData: any) {
  try {
    const response = await fetch(`${processEnv.BASE_URL}/api/server`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

//fetch all servers list
export async function serversFetch() {
  try {
    const response = await fetch(`${processEnv.BASE_URL}/api/server`, {
      next: {
        tags: ["servers"],
      },
      cache: "no-cache",
      method: "GET",
      headers: {
        // "Content-Type": "multipart/form-data",
        "content-type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
