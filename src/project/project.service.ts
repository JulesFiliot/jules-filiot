import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  async createProject(createProjectDto: CreateProjectDto) {
    const project = this.projectRepo.create({
      ...createProjectDto,
    });
    return this.projectRepo.save(project);
  }
  async updateProject(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectRepo.preload({
      id: +id,
      ...updateProjectDto,
    });
    if (!project) throw new NotFoundException(`Could not find project of id ${id}`);
    return this.projectRepo.save(project);
  }

  findAllProjects() {
    return this.projectRepo.find();
  }

  async findOneProject(id: string) {
    const project = await this.projectRepo.findOne(id);
    if (!project) throw new NotFoundException(`Could not find project of id ${id}`);
    return project;
  }

  async removeOneProject(id: string) {
    const project = await this.findOneProject(id);
    return this.projectRepo.remove(project);
  }
}
