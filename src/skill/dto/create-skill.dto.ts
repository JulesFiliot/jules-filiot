import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { CreateCategoryDto } from './create-category.dto';

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
  @ValidateNested()
  @Type(() => CreateCategoryDto)
	readonly category: CreateCategoryDto;

  @ApiProperty({ description: 'Skill priority' })
  @IsNotEmpty()
  @IsOptional()
  @IsNumber()
  readonly priority: number;
}
