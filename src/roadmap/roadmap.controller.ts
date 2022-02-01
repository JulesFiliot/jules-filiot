import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoadmapService } from './roadmap.service';

@ApiTags('roadmaps')
@Controller('roadmaps')
export class RoadmapController {
  constructor(private readonly roadmapService: RoadmapService) {}

  @Post()
  createRoadmap(@Body() todoBody: any) {
    return this.roadmapService.createRoadmap(todoBody);
  }

  @Get()
  findAllRoadmap() {
    return this.roadmapService.findAllRoadmap();
  }

  @Post('/timestamps')
  createTimeStamp(@Body() todoBody: any) {
    return this.roadmapService.createTimeStamp(todoBody);
  }

  @Get('/timestamps')
  findAllTimeStamps () {
    return this.roadmapService.findAllTimeStamp();
  }
}
