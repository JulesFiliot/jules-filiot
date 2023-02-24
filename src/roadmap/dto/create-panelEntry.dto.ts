import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { DateIsGreaterThan } from '../../common/decorators/dateIsGreaterThan.decorator';

export class CreatePanelEntryDto {
	@ApiProperty({ description: 'Panel entry title' })
	@IsString()
  @MinLength(3)
  @MaxLength(30)
  readonly title: string;
	
  @ApiProperty({ description: 'Panel entry subtitle' })
	@IsString()
  @MinLength(3)
  @MaxLength(30)
	readonly subtitle: string;

	@ApiProperty({ description: 'Panel entry description' })
  @IsOptional()
  @IsNotEmpty()
	@IsString()
  @MaxLength(1000)
  readonly description: string;

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
    description: 'Roadmap id owning the panel entry.',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  readonly roadmapId: number;
}
