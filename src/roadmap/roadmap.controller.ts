import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoadmapDto } from './dto/create-roadmap.dto';
import { CreateTimeStampDto } from './dto/create-timeStamp.dto';
import { RoadmapService } from './roadmap.service';

@ApiTags('roadmaps')
@Controller('roadmaps')
export class RoadmapController {
  constructor(private readonly roadmapService: RoadmapService) {}

  // TIME STAMPS
  @Post('/timestamps')
  createTimeStamp(@Body() createTimeStampDto: CreateTimeStampDto) {
    return this.roadmapService.createTimeStamp(createTimeStampDto);
  }

  @Get('/timestamps')
  findAllTimeStamps () {
    return this.roadmapService.findAllTimeStamp();
  }

  @Get('/timestamps/:id')
  findOneTimeStamp(@Param('id') id: string) {
    return this.roadmapService.findOneTimeStamp(id);
  }

  @Delete('/timestamps/:id')
  removeTimeStamp(@Param('id') id: string) {
    return this.roadmapService.removeTimeStamp(id);
  }

  // ROADMAPS
  @Post()
  createRoadmap(@Body() createRoadmapDto: CreateRoadmapDto) {
    return this.roadmapService.createRoadmap(createRoadmapDto);
  }

  @Get()
  findAllRoadmap() {
    return this.roadmapService.findAllRoadmap();
  }

  @Get(':id')
  findOneRoadmap(@Param('id') id: string) {
    return this.roadmapService.findOneRoadmap(id);
  }

  @Delete(':id')
  removeRoadmap(@Param('id') id: string) {
    return this.roadmapService.removeRoadmap(id);
  }
}
