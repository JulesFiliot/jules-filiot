import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Category } from '../entities/category.entity';

export class CreateSkillDto {
	@ApiProperty({ description: 'Skill title' })
	@IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly title: string;

	@ApiProperty({ description: 'Skill description' })
  @IsOptional()
  @IsNotEmpty()
	@IsString()
  @MaxLength(1000)
	readonly description: string;

  @ApiProperty({ description: 'Skill category' })
  @IsNotEmpty()
	readonly category: Category;
}
