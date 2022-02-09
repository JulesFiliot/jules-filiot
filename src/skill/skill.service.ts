import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entities';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
  ) {}

  createSkill(createSkillDto: CreateSkillDto) {
    const roadmap = this.skillRepository.create({
      ...createSkillDto,
    });
    return this.skillRepository.save(roadmap);
  }

  async updateSkill(id: string, updateSkillDto: UpdateSkillDto) {
    const skill = await this.skillRepository.preload({
      id: +id,
      ...updateSkillDto,
    });
    if (!skill) throw new NotFoundException(`Could not find skill of id ${id}`);
    return this.skillRepository.save(skill);
  }

  findAllSkills() {
    return this.skillRepository.find();
  }

  async findOneSkill(id: string) {
    const skill = await this.skillRepository.findOne(id);
    if (!skill) throw new NotFoundException(`Could not find skill of id ${id}`);
    return skill;
  }

  async removeSkill(id: string) {
    const skill = await this.findOneSkill(id);
    return this.skillRepository.remove(skill);
  }
}
