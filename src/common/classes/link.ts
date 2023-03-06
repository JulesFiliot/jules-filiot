import { Type } from 'class-transformer';
import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { MultiLanguageDTO } from './multi-language-dto';

export class Link {
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
    title: MultiLanguageDTO;
  
  @IsString()
  @IsUrl()
    url: string;
}