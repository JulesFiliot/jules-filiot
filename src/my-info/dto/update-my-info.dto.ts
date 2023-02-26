import { PartialType } from '@nestjs/swagger';
import { CreateMyInfoDto } from './create-my-info.dto';

export class UpdateMyInfoDto extends PartialType(CreateMyInfoDto) {}