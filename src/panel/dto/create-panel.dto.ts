import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';

export class CreatePanelDto {
	@ApiProperty({ description: 'Panel title' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly title: MultiLanguageDTO;

	@ApiProperty({ description: 'Panel description' })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
	readonly description: MultiLanguageDTO;

  @ApiProperty({ description: 'Panel priority' })
  @IsNotEmpty()
  @IsOptional()
  @IsNumber()
	readonly priority: number;
}
