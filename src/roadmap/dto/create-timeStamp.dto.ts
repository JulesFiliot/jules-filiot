import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { DateIsGreaterThan } from '../../common/decorators/dateIsGreaterThan.decorator';

export class CreateTimeStampDto {
	@ApiProperty({ description: 'Time stamp title' })
	@IsString()
  @MinLength(3)
  @MaxLength(30)
  readonly title: string;

	@ApiProperty({ description: 'Time stamp description' })
  @IsOptional()
  @IsNotEmpty()
	@IsString()
  @MaxLength(1000)
	readonly description: string;

  @ApiProperty({
    description: 'Time stamp start date. Date must be ISO8601.',
  })
  @IsDateString()
	readonly startDate: Date;

  @ApiProperty({
    description: 'Time stamp end date. Date must be ISO8601.\nTo create a time stamp lasting only one day you can leave the end date empty',
  })
  @IsDateString()
  @DateIsGreaterThan('startDate', {
    message: 'Time stamp end date must be greater than its start date',
  })
  @IsOptional()
  readonly endDate: Date;

  @ApiProperty({
    description: 'Roadmap id owning the time stamp.',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  readonly roadmapId: number;
}
