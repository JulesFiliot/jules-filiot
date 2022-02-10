import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { Category } from './entities/category.entity';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Skill, Category]),
  ],
  controllers: [SkillController],
  providers: [SkillService],
  exports: []
})
export class SkillModule {}
