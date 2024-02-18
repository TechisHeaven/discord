"use server";

import { processEnv } from "@/lib/helpers/processEnvCustom";
import { LoginFormSchema, RegisterFromSchema } from "@/lib/authFormSchema";
import axios from "axios";
import { cookies } from "next/headers";
import { z } from "zod";

type Inputs = z.infer<typeof LoginFormSchema>;
type RegisterInputs = z.infer<typeof RegisterFromSchema>;

export async function loginUser(data: Inputs) {
  try {
    const result = LoginFormSchema.safeParse(data);
    if (!result.success) {
      return {
        success: false,
        error: result.error.format(),
        status: 401,
      };
    }

    const { email, password } = result.data;

    const response = await axios.post(`${processEnv.BASE_URL}/api/auth/login`, {
      email,
      password,
    });

    if (response.status === 200) {
      cookies().set("session-token", response.data.token);
    }
    return response.data;
    // Return the entire response data
  } catch (error) {
    throw error;
  }
}

export async function RegisterUser(data: RegisterInputs) {
  const result = RegisterFromSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      error: result.error.format(),
      status: 401,
    };
  }

  const passingData = result.data;

  let response = await fetch(`${processEnv.BASE_URL}/api/auth`, {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify(passingData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  response = await response.json();
  if (response.status === 200 && response) {
    cookies().set("session-token", response.token);
  }
  return response;
  // Return the entire response data
}
