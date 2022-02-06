import { PartialType } from '@nestjs/swagger';
import { CreateRoadmapDto } from './create-roadmap.dto';

export class UpdateRoadMapDto extends PartialType(CreateRoadmapDto) {}
