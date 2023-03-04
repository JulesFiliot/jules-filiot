import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Skill } from './skill.entity';

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	  id: number;

	@Column({ type: 'jsonb' })
	  title: MultiLanguageDTO;

	@OneToMany(
	  () => Skill,
	  skill => skill.category,
	)
	  skills: Skill[];
}
