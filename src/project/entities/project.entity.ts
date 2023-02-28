import { Link } from 'src/common/classes/link';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ nullable: false })
    title: string;

  @Column({ nullable: false })
    description: string;

  @Column({ type: 'json', nullable: true })
    gitLink: Link;
  
  @Column('json', { nullable: true })
    usefulLinks?: Link[];
}