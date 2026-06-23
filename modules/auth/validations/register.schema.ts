import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters required"),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;