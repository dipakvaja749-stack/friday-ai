import { z } from "zod";

export const CreateMessageSchema = z.object({
  content: z
    .string()
    .min(1, "Message is required")
    .max(4000, "Message too long"),

  chatId: z.string().min(1),
});

export type CreateMessageSchemaType =
  z.infer<typeof CreateMessageSchema>;