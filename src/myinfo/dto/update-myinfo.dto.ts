import { PartialType } from '@nestjs/swagger';
import { CreateMyInfoDto } from './create-myinfo.dto';

export class UpdateMyInfoDto extends PartialType(CreateMyInfoDto) {}