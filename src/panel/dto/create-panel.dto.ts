import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePanelDto {
	@ApiProperty({ description: 'Panel title' })
	@IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly title: string;

	@ApiProperty({ description: 'Panel description' })
  @IsOptional()
  @IsNotEmpty()
	@IsString()
  @MaxLength(1000)
	readonly description: string;
}
