import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PanelEntry } from './panelEntry.entity';

@Entity()
export class Roadmap {
	@PrimaryGeneratedColumn()
	  id: number;

	@Column()
	  title: string;

	@Column({ nullable: true })
	  description: string;

	@JoinTable()
	@OneToMany(
	  () => PanelEntry,
	  panelEntry => panelEntry.roadmap,
	)
	  timeStamps: PanelEntry[];
}