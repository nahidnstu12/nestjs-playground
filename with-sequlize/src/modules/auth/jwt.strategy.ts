import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../users/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "random-1234",
    });
  }
  async validate(payload: any) {
    const user = await this.userService.findById(payload.id);
    if (!user) {
      throw new UnauthorizedException('You are not permitted to this action');
    }

    console.log("validate jwt strategy")
    return payload;
  }
}
