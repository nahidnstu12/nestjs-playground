import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../constants';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }
}
