import { Inject, Injectable } from '@nestjs/common';
import { POST_REPOSITORY } from '../../constants';
import { Post } from './posts.entity';
import { PostsDto } from './dto/posts.dto';
import { User } from '../users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @Inject(POST_REPOSITORY) private readonly postRepository: typeof Post,
  ) {}

  async create(post: PostsDto, userId: number): Promise<Post> {
    return await this.postRepository.create<Post>({ ...post, userId });
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.findAll<Post>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async findOne(id: number): Promise<Post> {
    return await this.postRepository.findOne({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async updateOne(id: number, data: PostsDto, userId: number) {
    const [numberAffectedRows, [updatedPost]] =
      await this.postRepository.update(
        { ...data },
        { where: { id, userId }, returning: true },
      );
    return { numberAffectedRows, updatedPost };
  }
  async delete(id: number, userId: number) {
    return await this.postRepository.destroy({ where: { id, userId } });
  }
}
