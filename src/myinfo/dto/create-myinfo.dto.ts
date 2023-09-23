import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';

export class CreateMyInfoDto {

  @ApiProperty({ description: 'First name' })
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty({ description: 'Last name' })
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({ description: 'Email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: 'Short description of ones profile. An array of some strings representing different bullet points' })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly sumUpInfo: MultiLanguageDTO[];

  @ApiProperty({ description: 'Extensive description of ones profile. An array of many strings representing different paragraphs' })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  readonly fullInfo: MultiLanguageDTO[];

  @ApiProperty({ description: 'LinkedIn profile link' })
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => Link)
  readonly linkedInLink: Link;

  @ApiProperty({ description: 'Github profile link' })
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => Link)
  readonly gitLink: Link;
}