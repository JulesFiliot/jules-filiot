import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	  id: number;

	@Column({ nullable: false })
	  title: string;

	@Column({ nullable: true })
	  description: string;

	@JoinColumn({ referencedColumnName: 'id' })
	@ManyToOne(
	  () => Category,
	  category => category.skills,
	  {
	    cascade: ['insert', 'update'],
	  }
	)
	  category: Category;
}