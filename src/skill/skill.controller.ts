import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SkillService } from './skill.service';

@ApiTags('skills')
@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  createSkill(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.createSkill(createSkillDto);
  }

  @Get()
  findAllSkills() {
    return this.skillService.findAllSkills();
  }

  @Patch(':id')
  updateSkill(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.updateSkill(id, updateSkillDto);
  }

  @Get(':id')
  findOneSkill(@Param('id') id: string) {
    return this.skillService.findOneSkill(id);
  }

  @Delete(':id')
  removeSkill(@Param('id') id: string) {
    return this.skillService.removeSkill(id);
  }
}
