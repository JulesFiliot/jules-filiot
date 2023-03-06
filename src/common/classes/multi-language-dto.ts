import { IsNotEmpty, IsString } from 'class-validator';

export class MultiLanguageDTO {
  @IsString()
  @IsNotEmpty()
    fr: string;

  @IsString()
  @IsNotEmpty()
    en: string;
}