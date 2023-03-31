import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	  id: number;

	@Column({ type: 'jsonb', nullable: false })
	  title: MultiLanguageDTO;

	@Column({ type: 'jsonb', nullable: true })
	  description: MultiLanguageDTO;

	@JoinColumn({ referencedColumnName: 'id' })
	@ManyToOne(
	  () => Category,
	  category => category.skills,
	  {
	    cascade: ['insert', 'update'],
	  }
	)
	  category: Category;

	@Column({ default: 0 })
	  priority: number;
}