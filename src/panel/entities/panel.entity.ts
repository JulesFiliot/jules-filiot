import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PanelEntry } from './panelEntry.entity';

@Entity()
export class Panel {
	@PrimaryGeneratedColumn()
	  id: number;

	@Column({ type: 'json' })
	  title: MultiLanguageDTO;

	@Column({ type: 'json', nullable: true })
	  description: MultiLanguageDTO;

	@JoinTable()
	@OneToMany(
	  () => PanelEntry,
	  panelEntry => panelEntry.panel,
	)
	  panelEntries: PanelEntry[];
}