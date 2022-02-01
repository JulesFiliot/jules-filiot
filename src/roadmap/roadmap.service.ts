import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  createRoadmap(todoBody: any) {
    const roadmap = this.roadmapRepository.create({
      ...todoBody,
    });
    return this.roadmapRepository.save(roadmap);
  }

  findAllRoadmap() {
    return this.roadmapRepository.find({
      relations: ['timeStamps'],
    });
  }

  createTimeStamp(todoBody: any) {
    const timeStamp = this.timeStampRepository.create({
      ...todoBody,
    });
    return this.timeStampRepository.save(timeStamp);
  }

  findAllTimeStamp() {
    return this.timeStampRepository.find({
      relations: ['roadmap'],
    });
  }
}
