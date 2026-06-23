import { prisma } from "@/app/lib/prisma";
import { RegisterDto } from "../dto/register.dto";

export class AuthRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(data: RegisterDto) {
    return prisma.user.create({
      data,
    });
  }
}