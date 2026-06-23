import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto";
import { AuthService } from "../services/auth.service";

export class AuthController {
  private authService = new AuthService();

  async register(data: RegisterDto) {
    return this.authService.register(data);
  }
  async login(data: LoginDto) {
  return this.authService.login(data);
}
}