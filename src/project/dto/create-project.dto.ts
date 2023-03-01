import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator';
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

  @ApiProperty({ description: 'Git repository link' })
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => Link)
  readonly gitLink: Link;

  @ApiProperty({ description: 'Array of useful links related to the project' })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Link)
  readonly usefulLinks: Link[];
}