import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNotEmptyObject, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';

export class CreateProjectDto {

  @ApiProperty({ description: 'Project title' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly title: MultiLanguageDTO;

  @ApiProperty({ description: 'Project description' })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly description: MultiLanguageDTO;

  @ApiProperty({ description: 'Project illustration link' })
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => Link)
  readonly image: Link;

  @ApiProperty({ description: 'Git repository link' })
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => Link)
  readonly gitLink: Link;

  @ApiProperty({ description: 'Project\'s tags to list technologies and/or skills involved in this project' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly tags: string[];

  @ApiProperty({ description: 'Array of useful links related to the project' })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Link)
  readonly usefulLinks: Link[];

  @ApiProperty({ description: 'Project priority' })
  @IsNotEmpty()
  @IsOptional()
  @IsNumber()
  readonly priority: number;
}