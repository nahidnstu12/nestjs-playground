import { Module } from '@nestjs/common';
import { UserProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  providers: [UserService, ...UserProviders],
  exports: [UserService],
})
export class UserModule {}
