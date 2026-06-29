import { z } from "zod";

export const CreateChatSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100),
});

export type CreateChatSchemaType =
  z.infer<typeof CreateChatSchema>;