import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string) {
    const user = await this.userService.findByEmail(username);

    if (!user) {
      return;
    }
    const match = await bcrypt.compare(pass, user.password);

    if (!match) {
      return null;
    }
    const { password, ...result } = user['dataValues'];
    return result;
  }
  async login(user) {
    const token = await this.jwtService.signAsync(user);
    if (!token) {
      // throw new ExceptionHandler('Something went wrong');
      return 'something went wrong with token';
    }
    return { user, token };
  }
  async create(user) {
    const pass = await bcrypt.hash(user.password, 10);

    const newUser = await this.userService.create({ ...user, password: pass });

    const { password, ...result } = newUser['dataValues'];

    const token = await this.jwtService.signAsync(result);

    return { user: result, token };
  }
}
