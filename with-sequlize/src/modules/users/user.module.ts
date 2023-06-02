import { Module } from '@nestjs/common';
import { UserProviders } from './user.provider';
import { UserService } from './user.service';
import {UserController} from "./user.controller";

@Module({
  providers: [UserService, ...UserProviders],
  exports: [UserService],
  controllers: [UserController]
})
export class UserModule {}
