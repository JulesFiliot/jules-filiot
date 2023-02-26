import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Link } from 'src/common/classes/link';

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
  @IsString({ each: true })
  readonly sumUpInfo: string[];

  @ApiProperty({ description: 'Extensive description of ones profile. An array of many strings representing different paragraphs' })
  @IsOptional()
  @IsString({ each: true })
  readonly fullInfo: string[];

  @ApiProperty({ description: 'LinkedIn profile link' })
  @Type(() => Link)
  readonly linkedInLink: Link;
}