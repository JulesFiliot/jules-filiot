import { PartialType } from '@nestjs/swagger';
import { CreatePanelEntryDto } from './create-panelEntry.dto';

export class UpdatePanelEntryDto extends PartialType(CreatePanelEntryDto) {}
