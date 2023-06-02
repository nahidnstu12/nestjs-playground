import { Module } from '@nestjs/common';
import { PostsProvider } from './posts.provider';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  providers: [PostsService, ...PostsProvider],
  exports: [],
  controllers: [PostsController],
})
export class PostsModel {}
