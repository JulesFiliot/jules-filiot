import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMyInfoDto } from './dto/create-myinfo.dto';
import { UpdateMyInfoDto } from './dto/update-myinfo.dto';
import { MyInfoService } from './myinfo.service';

@Controller('myinfo')
export class MyInfoController {
  constructor(private readonly myInfoService: MyInfoService) {}

  @UseGuards(JwtAuthGuard)
  @ApiTags('myinfo')
  @Post()
  createPanel(@Body() createMyInfoDto: CreateMyInfoDto) {
    return this.myInfoService.createMyInfo(createMyInfoDto);
  }

  @ApiTags('myinfo')
  @Get()
  findAllPanels() {
    return this.myInfoService.findAllMyInfo();
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('myinfo')
  @Patch(':id')
  updatePanel(@Param('id') id: string, @Body() updateMyInfoDto: UpdateMyInfoDto) {
    return this.myInfoService.updateMyInfo(id, updateMyInfoDto);
  }

  @ApiTags('myinfo')
  @Get(':id')
  findOnePanel(@Param('id') id: string) {
    return this.myInfoService.findOneMyInfo(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('myinfo')
  @Delete(':id')
  removeOnePanel(@Param('id') id: string) {
    return this.myInfoService.removeOneMyInfo(id);
  }
}
