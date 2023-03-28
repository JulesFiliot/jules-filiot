import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { DateIsGreaterThan } from '../../common/decorators/dateIsGreaterThan.decorator';

export class CreatePanelEntryDto {
	@ApiProperty({ description: 'Panel entry title' })
	@IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly title: MultiLanguageDTO;
	
  @ApiProperty({ description: 'Panel entry subtitle' })
	@IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
	readonly subtitle: MultiLanguageDTO;
  
  @ApiProperty({ description: 'Panel entry location' })
	@IsNotEmpty()
  @IsOptional()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly location: MultiLanguageDTO;

	@ApiProperty({ description: 'Panel entry description' })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly description: MultiLanguageDTO[];

  @ApiProperty({
    description: 'Panel entry start date. Date must be ISO8601.',
  })
  @IsDateString()
	readonly startDate: Date;

  @ApiProperty({
    description: 'Panel entry end date. Date must be ISO8601.\nTo set the end date to "Present" leave this property empty.',
  })
  @IsDateString()
  @DateIsGreaterThan('startDate', {
    message: 'Panel entry end date must be greater than its start date',
  })
  @IsOptional()
  readonly endDate: Date;

  @ApiProperty({
    description: 'Panel id owning the panel entry.',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  readonly panelId: number;

  @ApiProperty({
    description: 'Panel entry additional links to useful resource.',
  })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Link)
  readonly externalLinks: Link[];
}
