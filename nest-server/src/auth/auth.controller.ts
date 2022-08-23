import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  @Post('login')
  async getAccessToken(req) {
    const code = req.body.code
    return await this.authService.getAccessToken();
  }
}
}
