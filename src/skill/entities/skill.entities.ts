import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	  id: number;

	@Column({ nullable: false })
	  title: string;

	@Column({ nullable: true })
	  description: string;

  @Column({ nullable: false })
	  category: string;
}