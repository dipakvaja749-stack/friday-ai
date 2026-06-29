import bcrypt from "bcryptjs";
import { RegisterDto } from "../dto/register.dto";
import { AuthRepository } from "../repositories/auth.repository";
import { LoginDto } from "../dto/login.dto";

export class AuthService {
  private authRepository = new AuthRepository();

  async register(data: RegisterDto) {
    const existingUser = await this.authRepository.findByEmail(
      data.email
    );

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.authRepository.createUser({
      ...data,
      password: hashedPassword,
    });
  }
  async login(data: LoginDto) {
  const user = await this.authRepository.findByEmail(data.email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const passwordMatch = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  return user;
}
}