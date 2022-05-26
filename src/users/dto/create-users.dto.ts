import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUsersDto {
	@ApiProperty({ description: 'User\'s username' })
	@IsString()
  @MinLength(4)
  @MaxLength(30)
  readonly username: string;

	@ApiProperty({ description: 'User\'s password' })
	@IsString()
  @MinLength(4)
  @MaxLength(50)
	readonly password: string;
}
