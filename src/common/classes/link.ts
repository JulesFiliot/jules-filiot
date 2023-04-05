import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { MultiLanguageDTO } from './multi-language-dto';

export class Link {
  @ApiProperty({ description: 'Hyperlink title' })
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
    title: MultiLanguageDTO;
  
  @ApiProperty({ description: 'Hyperlink url' })
  @IsString()
  @IsUrl()
    url: string;
}