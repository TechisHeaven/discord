import { z } from "zod";
export const LoginFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid Email Address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password is too Long" }),
});

export const RegisterFromSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid Email Address"),
  name: z
    .string()
    .min(1, "Username is required")
    .max(32, "Username is too long"),
  username: z.string().min(1, "Username is required"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password is too Long" }),
  dob: z.string().min(1, { message: "Date of Birth is required" }).optional(),
});
