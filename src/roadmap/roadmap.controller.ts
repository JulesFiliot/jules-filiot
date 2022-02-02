import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoadmapDto } from './dto/create-roadmap.dto';
import { CreateTimeStampDto } from './dto/create-timeStamp.dto';
import { RoadmapService } from './roadmap.service';

@ApiTags('roadmaps')
@Controller('roadmaps')
export class RoadmapController {
  constructor(private readonly roadmapService: RoadmapService) {}

  @Post()
  createRoadmap(@Body() createRoadmapDto: CreateRoadmapDto) {
    return this.roadmapService.createRoadmap(createRoadmapDto);
  }

  @Get()
  findAllRoadmap() {
    return this.roadmapService.findAllRoadmap();
  }

  @Post('/timestamps')
  createTimeStamp(@Body() createTimeStampDto: CreateTimeStampDto) {
    return this.roadmapService.createTimeStamp(createTimeStampDto);
  }

  @Get('/timestamps')
  findAllTimeStamps () {
    return this.roadmapService.findAllTimeStamp();
  }
}
