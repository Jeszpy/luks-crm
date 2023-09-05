import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(6, 10)
  @IsString()
  login: string;

  @Length(3, 10)
  @IsString()
  password: string;
}
