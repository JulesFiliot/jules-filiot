import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Category } from '../entities/category.entity';

export class CreateSkillDto {
	@ApiProperty({ description: 'Skill title' })
	@IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly title: MultiLanguageDTO;

	@ApiProperty({ description: 'Skill description' })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
	readonly description: MultiLanguageDTO;

  @ApiProperty({ description: 'Skill category' })
  @IsNotEmpty()
  @Transform(({ value }) => ({ title: value.toString() }))
	readonly category: Category;
}
