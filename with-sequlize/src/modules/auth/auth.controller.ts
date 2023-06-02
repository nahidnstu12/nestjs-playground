import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';
import { DoesUserExists } from '../../core/guards/doesUserExists.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request) {
    return await this.authService.login(request.user);
  }

  @UseGuards(DoesUserExists)
  @Post('signup')
  async signup(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}
