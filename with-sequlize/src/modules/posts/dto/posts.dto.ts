import { IsNotEmpty, MinLength } from 'class-validator';

export class PostsDto {
  @IsNotEmpty()
  @MinLength(3)
  readonly title: string;

  @IsNotEmpty()
  @MinLength(5)
  readonly body: string;
}
