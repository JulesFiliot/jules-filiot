import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoadmapDto } from './dto/create-roadmap.dto';
import { CreateTimeStampDto } from './dto/create-timeStamp.dto';
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

  createRoadmap(createRoadmapDto: CreateRoadmapDto) {
    const roadmap = this.roadmapRepository.create({
      ...createRoadmapDto,
    });
    return this.roadmapRepository.save(roadmap);
  }

  findAllRoadmap() {
    return this.roadmapRepository.find({
      relations: ['timeStamps'],
    });
  }

  createTimeStamp(createTimeStampDto: CreateTimeStampDto) {
    const timeStamp = this.timeStampRepository.create({
      ...createTimeStampDto,
    });
    return this.timeStampRepository.save(timeStamp);
  }

  findAllTimeStamp() {
    return this.timeStampRepository.find();
  }
}
