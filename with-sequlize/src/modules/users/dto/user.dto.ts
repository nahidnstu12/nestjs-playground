import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Gender } from '../../../constants/enum';

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsEnum(Gender, {
    message: 'gender must be either Male or Female',
  })
  readonly gender: Gender;
}
