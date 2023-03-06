import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @ApiTags('projects')
  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.createProject(createProjectDto);
  }

  @ApiTags('projects')
  @Get()
  findAllProjects() {
    return this.projectService.findAllProjects();
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('projects')
  @Patch(':id')
  updateProject(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.updateProject(id, updateProjectDto);
  }

  @ApiTags('projects')
  @Get(':id')
  findOneProject(@Param('id') id: string) {
    return this.projectService.findOneProject(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('projects')
  @Delete(':id')
  removeOneProject(@Param('id') id: string) {
    return this.projectService.removeOneProject(id);
  }
}
