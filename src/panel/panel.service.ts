import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePanelDto } from './dto/create-panel.dto';
import { CreatePanelEntryDto } from './dto/create-panelEntry.dto';
import { UpdatePanelDto } from './dto/update-panel.dto';
import { UpdatePanelEntryDto } from './dto/update-panelEntry.dto';
import { Panel } from './entities/panel.entity';
import { PanelEntry } from './entities/panelEntry.entity';
import * as moment from 'moment';

@Injectable()
export class PanelService {
  constructor(
    @InjectRepository(Panel)
    private readonly panelRepository: Repository<Panel>,
    @InjectRepository(PanelEntry)
    private readonly panelEntryRepository: Repository<PanelEntry>,
  ) {}

  // PANELS
  createPanel(createPanelDto: CreatePanelDto) {
    const panel = this.panelRepository.create({
      ...createPanelDto,
    });
    return this.panelRepository.save(panel);
  }

  async updatePanel(id: string, updatePanelDto: UpdatePanelDto) {
    const panel = await this.panelRepository.preload({
      id: +id,
      ...updatePanelDto,
    });
    if (!panel) throw new NotFoundException(`Could not find panel of id ${id}`);
    return this.panelRepository.save(panel);
  }

  findAllPanels() {
    return this.panelRepository.find({
      relations: ['panelEntries'],
    });
  }

  async findOnePanel(id: string) {
    const panel = await this.panelRepository.findOne(id, {
      relations: ['panelEntries'],
    });
    if (!panel) throw new NotFoundException(`Could not find panel of id ${id}`);
    return panel;
  }

  async removeOnePanel(id: string) {
    const panel = await this.findOnePanel(id);
    if (panel.panelEntries) await this.panelEntryRepository.remove(panel.panelEntries);
    return this.panelRepository.remove(panel);
  }

  // PANEL ENTRIES
  createPanelEntry(createPanelEntryDto: CreatePanelEntryDto) {
    const panelEntry = this.panelEntryRepository.create({
      ...createPanelEntryDto,
    });
    return this.panelEntryRepository.save(panelEntry);
  }

  async updatePanelEntry(id: string, updatePanelEntryDto: UpdatePanelEntryDto) {
    const actualPanelEntry = await this.findOnePanelEntry(id);
    if (
      actualPanelEntry.endDate
      && updatePanelEntryDto.startDate
      && !updatePanelEntryDto.endDate
      && moment(actualPanelEntry.endDate).toISOString() <= moment(updatePanelEntryDto.startDate).toISOString()
    ) {
      throw new HttpException(`Could not update panel entry of id ${id}. endDate must be greater than startDate.`, HttpStatus.FORBIDDEN);
    }
    const panelEntry = await this.panelEntryRepository.preload({
      id: +id,
      ...updatePanelEntryDto,
    });
    if (!panelEntry) throw new NotFoundException(`Could not find panel entry of id ${id}`);

    return this.panelEntryRepository.save(panelEntry);
  }

  findAllPanelEntries() {
    return this.panelEntryRepository.find();
  }

  async findOnePanelEntry(id: string) {
    const panelEntry = await this.panelEntryRepository.findOne(id);
    if (!panelEntry) throw new NotFoundException(`Could not find panel entry of id ${id}`);
    return panelEntry;
  };

  async removeOnePanelEntry(id: string) {
    const panelEntry = await this.findOnePanelEntry(id);
    return this.panelEntryRepository.remove(panelEntry);
  }
}
