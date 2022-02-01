import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamp } from './timeStamp.entity';

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
	  () => TimeStamp,
	  timeStamp => timeStamp.roadmap,
	  { cascade: true }
	)
	  timeStamps: TimeStamp[];
}