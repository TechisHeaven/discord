"use server";

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

    const response = await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    });

    // .then(function (response) {
    //   console.log(response.data);

    //   if (response.data.status === 200) {
    //     cookies().set("session-token", response.data.token);
    //     // return response.data;
    //   }
    //   return response.data;
    // });
    if (response.status === 200) {
      cookies().set("session-token", response.data.token);
    }

    return response.data;
    // Return the entire response data
  } catch (error) {
    throw error;
  }
}
