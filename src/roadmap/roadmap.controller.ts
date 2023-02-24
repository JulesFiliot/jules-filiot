import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateRoadmapDto } from './dto/create-roadmap.dto';
import { CreateTimeStampDto } from './dto/create-panelEntry.dto';
import { UpdateRoadMapDto } from './dto/update-roadmap.dto';
import { UpdateTimeStampDto } from './dto/update-panelEntry.dto';
import { RoadmapService } from './roadmap.service';

@Controller('roadmaps')
export class RoadmapController {
  constructor(private readonly roadmapService: RoadmapService) {}

  // TIME STAMPS
  @UseGuards(JwtAuthGuard)
  @ApiTags('time stamps')
  @Post('/timestamps')
  createTimeStamp(@Body() createTimeStampDto: CreateTimeStampDto) {
    return this.roadmapService.createTimeStamp(createTimeStampDto);
  }

  @ApiTags('time stamps')
  @Get('/timestamps')
  findAllTimeStamps () {
    return this.roadmapService.findAllTimeStamp();
  }

  @ApiTags('time stamps')
  @Get('/timestamps/:id')
  findOneTimeStamp(@Param('id') id: string) {
    return this.roadmapService.findOneTimeStamp(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('time stamps')
  @Patch('/timestamps/:id')
  updateTimeStamp(@Param('id') id: string, @Body() updateTimeStampDto: UpdateTimeStampDto) {
    return this.roadmapService.updateTimeStamp(id, updateTimeStampDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('time stamps')
  @Delete('/timestamps/:id')
  removeTimeStamp(@Param('id') id: string) {
    return this.roadmapService.removeTimeStamp(id);
  }

  // ROADMAPS
  @UseGuards(JwtAuthGuard)
  @ApiTags('roadmaps')
  @Post()
  createRoadmap(@Body() createRoadmapDto: CreateRoadmapDto) {
    return this.roadmapService.createRoadmap(createRoadmapDto);
  }

  @ApiTags('roadmaps')
  @Get()
  findAllRoadmap() {
    return this.roadmapService.findAllRoadmap();
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('roadmaps')
  @Patch(':id')
  updateRoadmap(@Param('id') id: string, @Body() updateRoadMapDto: UpdateRoadMapDto) {
    return this.roadmapService.updateRoadmap(id, updateRoadMapDto);
  }

  @ApiTags('roadmaps')
  @Get(':id')
  findOneRoadmap(@Param('id') id: string) {
    return this.roadmapService.findOneRoadmap(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('roadmaps')
  @Delete(':id')
  removeRoadmap(@Param('id') id: string) {
    return this.roadmapService.removeRoadmap(id);
  }
}
