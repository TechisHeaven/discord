import { z } from "zod";
export const LoginFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid Email Address"),
  password: z.string().min(1, "Password is required"),
});
