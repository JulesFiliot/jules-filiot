import { PartialType } from '@nestjs/swagger';
import { CreateTimeStampDto } from './create-timeStamp.dto';

export class UpdateTimeStampDto extends PartialType(CreateTimeStampDto) {}
