import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsDto } from './dto/posts.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/posts')
export class PostsController {
  constructor(private readonly postservice: PostsService) {}

  @Get('/')
  async findAll() {
    return await this.postservice.findAll();
  }

  @Get('/:id')
  async findAOne(@Param('id') id: number) {
    const post = await this.postservice.findOne(id);

    if (!post) {
      throw new NotFoundException("Post doesn't exists");
    }
    return { post };
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/')
  async create(@Body() post: PostsDto, @Request() request) {
    console.log('request', request.user);
    return await this.postservice.create(post, Number(request.user.id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:id')
  async update(
    @Param('id') id: number,
    @Body() post: PostsDto,
    @Request() req,
  ) {
    return await this.postservice.updateOne(id, post, Number(req.user.id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:id')
  async delete(@Param('id') id: number, @Request() request) {
    return await this.postservice.delete(id, Number(request.user.id));
  }
}
