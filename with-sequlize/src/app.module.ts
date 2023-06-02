import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { AppConfigModule } from './shared/app-config/app-config.module';
import { UserModule } from './modules/users/user.module';
import { PostsModel } from './modules/posts/posts.model';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AppConfigModule,
    UserModule,
    AuthModule,
    PostsModel,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
