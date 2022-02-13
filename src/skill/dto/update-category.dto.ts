import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class UpdateCategoryDto {
	@ApiProperty({ description: 'Category title' })
	@IsString()
  @MaxLength(30)
  readonly title: string;
}
