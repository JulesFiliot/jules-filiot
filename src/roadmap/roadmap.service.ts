import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoadmapDto } from './dto/create-roadmap.dto';
import { CreateTimeStampDto } from './dto/create-timeStamp.dto';
import { UpdateRoadMapDto } from './dto/update-roadmap.dto';
import { UpdateTimeStampDto } from './dto/update-timeStamp.dto';
import { Roadmap } from './entities/roadmap.entity';
import { TimeStamp } from './entities/timeStamp.entity';

@Injectable()
export class RoadmapService {
  constructor(
    @InjectRepository(Roadmap)
    private readonly roadmapRepository: Repository<Roadmap>,
    @InjectRepository(TimeStamp)
    private readonly timeStampRepository: Repository<TimeStamp>,
  ) {}

  // ROADMAPS
  createRoadmap(createRoadmapDto: CreateRoadmapDto) {
    const roadmap = this.roadmapRepository.create({
      ...createRoadmapDto,
    });
    return this.roadmapRepository.save(roadmap);
  }

  async updateRoadmap(id: string, updateRoadMapDto: UpdateRoadMapDto) {
    const roadmap = await this.roadmapRepository.preload({
      id: +id,
      ...updateRoadMapDto,
    });
    if (!roadmap) throw new NotFoundException(`Could not find roadmap of id ${id}`);
    return this.roadmapRepository.save(roadmap);
  }

  findAllRoadmap() {
    return this.roadmapRepository.find({
      relations: ['timeStamps'],
    });
  }

  async findOneRoadmap(id: string) {
    const roadmap = await this.roadmapRepository.findOne(id, {
      relations: ['timeStamps'],
    });
    if (!roadmap) throw new NotFoundException(`Could not find roadmap of id ${id}`);
    return roadmap;
  }

  async removeRoadmap(id: string) {
    const roadmap = await this.findOneRoadmap(id);
    return this.roadmapRepository.remove(roadmap);
  }

  // TIME STAMPS
  createTimeStamp(createTimeStampDto: CreateTimeStampDto) {
    const timeStamp = this.timeStampRepository.create({
      ...createTimeStampDto,
    });
    return this.timeStampRepository.save(timeStamp);
  }

  async updateTimeStamp(id: string, updateTimeStampDto: UpdateTimeStampDto) {
    const timeStamp = await this.timeStampRepository.preload({
      id: +id,
      ...updateTimeStampDto,
    });
    if (!timeStamp) throw new NotFoundException(`Could not find time stamp of id ${id}`);
    return this.timeStampRepository.save(timeStamp);
  }

  findAllTimeStamp() {
    return this.timeStampRepository.find();
  }

  async findOneTimeStamp(id: string) {
    const timeStamp = await this.timeStampRepository.findOne(id);
    if (!timeStamp) throw new NotFoundException(`Could not find time stamp of id ${id}`);
    return timeStamp;
  };

  async removeTimeStamp(id: string) {
    const timeStamp = await this.findOneTimeStamp(id);
    return this.timeStampRepository.remove(timeStamp);
  }
}
