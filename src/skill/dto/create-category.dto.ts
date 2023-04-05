import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';

export class CreateCategoryDto {
	@ApiProperty({ description: 'Category title' })
	@IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly title: MultiLanguageDTO;

  @ApiProperty({ description: 'Category priority' })
  @IsNotEmpty()
  @IsOptional()
  @IsNumber()
	readonly priority: number;
}
