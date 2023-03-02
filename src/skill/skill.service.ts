import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Category } from './entities/category.entity';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // SKILLS
  async createSkill(createSkillDto: CreateSkillDto) {
    const category = await this.preloadCategoryByTitle(createSkillDto.category.title);
    const skill = this.skillRepository.create({
      ...createSkillDto,
      category,
    });
    return this.skillRepository.save(skill);
  }

  async updateSkill(id: string, updateSkillDto: UpdateSkillDto) {
    const category = await this.preloadCategoryByTitle(updateSkillDto.category.title);
    const skill = await this.skillRepository.preload({
      id: +id,
      ...updateSkillDto,
      category,
    });
    if (!skill) throw new NotFoundException(`Could not find skill of id ${id}`);
    return this.skillRepository.save(skill);
  }

  findAllSkills() {
    return this.skillRepository.find({
      relations: ['category'],
    });
  }

  async findOneSkill(id: string) {
    const skill = await this.skillRepository.findOne(id, {
      relations: ['category'],
    });
    if (!skill) throw new NotFoundException(`Could not find skill of id ${id}`);
    return skill;
  }

  async removeSkill(id: string) {
    const skill = await this.findOneSkill(id);
    return this.skillRepository.remove(skill);
  }

  private async preloadCategoryByTitle(title: MultiLanguageDTO): Promise<Category> {
    const existingCategory = await this.categoryRepository.findOne({ title });
    if (existingCategory) {
      return existingCategory;
    }
    return this.categoryRepository.create({ title });
  }

  // CATEGORIES
  async removeCategory(id: string) {
    const category = await this.findOneCategory(id);
    return this.categoryRepository.remove(category);
  }

  async findOneCategory(id: string) {
    const category = await this.categoryRepository.findOne(id, {
      relations: ['skills'],
    });
    if (!category) throw new NotFoundException(`Could not find category of id ${id}`);
    return category;
  }

  findAllCategories() {
    return this.categoryRepository.find({
      relations: ['skills'],
    });
  }

  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.preload({
      id: +id,
      ...updateCategoryDto,
    });
    if (!category) throw new NotFoundException(`Could not find category of id ${id}`);
    return this.categoryRepository.save(category);
  }
}
