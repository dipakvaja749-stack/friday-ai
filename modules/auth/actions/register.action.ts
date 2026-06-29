"use server";

import { AuthController } from "../controllers/auth.controller";
import { RegisterSchema } from "../validations/register.schema";

const authController = new AuthController();

export async function registerAction(values: unknown) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten(),
    };
  }

  try {
    await authController.register(validatedFields.data);

    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    };
  }
}