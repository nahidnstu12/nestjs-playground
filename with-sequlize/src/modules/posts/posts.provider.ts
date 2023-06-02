import { POST_REPOSITORY } from '../../constants';
import { Post } from './posts.entity';

export const PostsProvider = [
  {
    provide: POST_REPOSITORY,
    useValue: Post,
  },
];
