import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Link } from 'src/common/classes/link';

export class CreateProjectDto {

  @ApiProperty({ description: 'Project title' })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ description: 'Project description' })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ description: 'Git repository link' })
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => Link)
  readonly gitLink: Link;

  @ApiProperty({ description: 'Array of useful links related to the project' })
  @IsOptional()
  @ValidateNested()
  @IsNotEmpty()
  @Type(() => Link)
  readonly usefulLinks: Link[];
}