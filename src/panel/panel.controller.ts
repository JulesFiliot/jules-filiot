import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePanelDto } from './dto/create-panel.dto';
import { CreatePanelEntryDto } from './dto/create-panelEntry.dto';
import { UpdatePanelDto } from './dto/update-panel.dto';
import { UpdatePanelEntryDto } from './dto/update-panelEntry.dto';
import { PanelService } from './panel.service';

@Controller('panels')
export class PanelController {
  constructor(private readonly panelService: PanelService) {}

  // PANEL ENTRIES
  @UseGuards(JwtAuthGuard)
  @ApiTags('panel entries')
  @Post('/panelentries')
  createPanelEntry(@Body() createPanelEntryDto: CreatePanelEntryDto) {
    return this.panelService.createPanelEntry(createPanelEntryDto);
  }

  @ApiTags('panel entries')
  @Get('/panelentries')
  findAllPanelEntries () {
    return this.panelService.findAllPanelEntries();
  }

  @ApiTags('panel entries')
  @Get('/panelentries/:id')
  findOnePanelEntry(@Param('id') id: string) {
    return this.panelService.findOnePanelEntry(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('panel entries')
  @Patch('/panelentries/:id')
  updateOnePanelEntry(@Param('id') id: string, @Body() updatePanelEntryDto: UpdatePanelEntryDto) {
    return this.panelService.updatePanelEntry(id, updatePanelEntryDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('panel entries')
  @Delete('/panelentries/:id')
  removeOnePanelEntry(@Param('id') id: string) {
    return this.panelService.removeOnePanelEntry(id);
  }

  // PANELS
  @UseGuards(JwtAuthGuard)
  @ApiTags('panels')
  @Post()
  createPanel(@Body() createPanelDto: CreatePanelDto) {
    return this.panelService.createPanel(createPanelDto);
  }

  @ApiTags('panels')
  @Get()
  findAllPanels() {
    return this.panelService.findAllPanels();
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('panels')
  @Patch(':id')
  updatePanel(@Param('id') id: string, @Body() updatePanelDto: UpdatePanelDto) {
    return this.panelService.updatePanel(id, updatePanelDto);
  }

  @ApiTags('panels')
  @Get(':id')
  findOnePanel(@Param('id') id: string) {
    return this.panelService.findOnePanel(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiTags('panels')
  @Delete(':id')
  removeOnePanel(@Param('id') id: string) {
    return this.panelService.removeOnePanel(id);
  }
}
