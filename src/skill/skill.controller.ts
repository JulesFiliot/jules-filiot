import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  // CATEGORIES
  @ApiTags('categories')
  @Get('/categories')
  findAllCategories() {
    return this.skillService.findAllCategories();
  }

  @ApiTags('categories')
  @Patch('/categories/:id')
  updateCategory(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.skillService.updateCategory(id, updateCategoryDto);
  }

  @ApiTags('categories')
  @Get('/categories/:id')
  findOneCategory(@Param('id') id: string) {
    return this.skillService.findOneCategory(id);
  }

  @ApiTags('categories')
  @Delete('/categories/:id')
  removeCategory(@Param('id') id: string) {
    return this.skillService.removeCategory(id);
  }

  // SKILLS
  @ApiTags('skills')
  @Post()
  createSkill(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.createSkill(createSkillDto);
  }

  @ApiTags('skills')
  @Get()
  findAllSkills() {
    return this.skillService.findAllSkills();
  }

  @ApiTags('skills')
  @Patch(':id')
  updateSkill(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.updateSkill(id, updateSkillDto);
  }

  @ApiTags('skills')
  @Get(':id')
  findOneSkill(@Param('id') id: string) {
    return this.skillService.findOneSkill(id);
  }

  @ApiTags('skills')
  @Delete(':id')
  removeSkill(@Param('id') id: string) {
    return this.skillService.removeSkill(id);
  }
}
