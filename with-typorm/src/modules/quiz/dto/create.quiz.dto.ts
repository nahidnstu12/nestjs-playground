import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty()
  @MinLength(4)
  title: string;

  @IsNotEmpty()
  @MinLength(4)
  description: string;
}
