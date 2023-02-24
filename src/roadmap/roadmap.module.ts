import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roadmap } from './entities/roadmap.entity';
import { TimeStamp } from './entities/panelEntry.entity';
import { RoadmapController } from './roadmap.controller';
import { RoadmapService } from './roadmap.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Roadmap, TimeStamp]),
  ],
  controllers: [RoadmapController],
  providers: [RoadmapService],
  exports: []
})
export class RoadmapModule {}
