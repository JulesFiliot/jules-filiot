import { IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class Link {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
    title: string;
  
  @IsString()
  @IsUrl()
    url: string;
}