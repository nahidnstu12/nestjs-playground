import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UserService } from '../../modules/users/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class DoesUserExists implements CanActivate {
  constructor(private readonly userService: UserService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const userExists = await this.userService.findByEmail(request.body.email);
    if (userExists) {
      throw new ForbiddenException('User already exists');
    }
    return true;
  }
}
