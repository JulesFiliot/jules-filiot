import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMyInfoDto } from './dto/create-my-info.dto';
import { UpdateMyInfoDto } from './dto/update-my-info.dto';
import { MyInfoService } from './my-info.service';

@Controller('myinfo')
export class MyInfoController {
  constructor(private readonly myInfoService: MyInfoService) {}

  @UseGuards(JwtAuthGuard)
  @ApiTags('panels')
  @Post()
  createPanel(@Body() createMyInfoDto: CreateMyInfoDto) {
    return this.myInfoService.createMyInfo(createMyInfoDto);
  }

  @ApiTags('panels')
  @Get()
  findAllPanels() {
    return this.myInfoService.findAllMyInfo();
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('panels')
  @Patch(':id')
  updatePanel(@Param('id') id: string, @Body() updateMyInfoDto: UpdateMyInfoDto) {
    return this.myInfoService.updateMyInfo(id, updateMyInfoDto);
  }

  @ApiTags('panels')
  @Get(':id')
  findOnePanel(@Param('id') id: string) {
    return this.myInfoService.findOneMyInfo(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('panels')
  @Delete(':id')
  removeOnePanel(@Param('id') id: string) {
    return this.myInfoService.removeOneMyInfo(id);
  }
}
