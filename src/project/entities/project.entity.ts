import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ type: 'jsonb', nullable: false })
    title: MultiLanguageDTO;

  @Column({ type: 'jsonb', nullable: false })
    description: MultiLanguageDTO;

  @Column({ type: 'jsonb', nullable: true })
    image: Link;

  @Column({ type: 'jsonb', nullable: true })
    gitLink: Link;
  
  @Column('jsonb', { nullable: true })
    usefulLinks?: Link[];
}