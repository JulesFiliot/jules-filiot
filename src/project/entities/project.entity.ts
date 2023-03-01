import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ type: 'json', nullable: false })
    title: MultiLanguageDTO;

  @Column({ type: 'json', nullable: false })
    description: MultiLanguageDTO;

  @Column({ type: 'json', nullable: true })
    gitLink: Link;
  
  @Column('json', { nullable: true })
    usefulLinks?: Link[];
}