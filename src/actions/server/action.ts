"use server";
import { processEnv } from "@/lib/helpers/processEnvCustom";

export async function serverCreate(formData: any) {
  try {
    console.log(formData);
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
