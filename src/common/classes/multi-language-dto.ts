import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MultiLanguageDTO {
  @ApiProperty({ description: 'French translation of property' })
  @IsString()
  @IsNotEmpty()
    fr: string;
  
  @ApiProperty({ description: 'English translation of property' })
  @IsString()
  @IsNotEmpty()
    en: string;
}