"use server";

import { processEnv } from "@/lib/helpers/processEnvCustom";
import { LoginFormSchema } from "@/lib/loginFormSchema";
import axios from "axios";
import { cookies } from "next/headers";
import { z } from "zod";

type Inputs = z.infer<typeof LoginFormSchema>;

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
