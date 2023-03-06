import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Panel } from './entities/panel.entity';
import { PanelEntry } from './entities/panelEntry.entity';
import { PanelController } from './panel.controller';
import { PanelService } from './panel.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Panel, PanelEntry]),
  ],
  controllers: [PanelController],
  providers: [PanelService],
  exports: []
})
export class PanelModule {}
